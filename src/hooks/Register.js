import { useState } from 'react';
import axios from 'axios';

const Registration = () => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            phone_number: '',
            profile_picture: '', // Kept as is, can be empty string or have content
            role: 'user'
      });
      const uri = 'https://backend-ojekin.vercel.app/auth/';
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const [validationErrors, setValidationErrors] = useState({});

      const validateField = (name, value) => {
            switch (name) {
                  case 'name':
                        if (!value.trim()) return 'Nama wajib diisi';
                        if (value.length < 3) return 'Nama harus minimal 3 karakter';
                        return '';
                  case 'email':
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!value) return 'Email wajib diisi';
                        if (!emailRegex.test(value)) return 'Format email tidak valid';
                        return '';
                  case 'password':
                        if (!value) return 'Password wajib diisi';
                        if (value.length < 6) return 'Password harus minimal 6 karakter';
                        return '';
                  case 'phone_number':
                        if (value && !/^\d{10,12}$/.test(value)) return 'Nomor telepon harus 10-12 digit';
                        return '';
                  // No validation for profile_picture, it can be empty or have content
                  default:
                        return '';
            }
      };

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));

            const error = validateField(name, value);
            setValidationErrors(prev => ({ ...prev, [name]: error }));
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            // Validasi semua field sebelum submit
            const errors = Object.keys(formData).reduce((acc, key) => {
                  const error = validateField(key, formData[key]);
                  if (error) acc[key] = error;
                  return acc;
            }, {});

            if (Object.keys(errors).length > 0) {
                  setValidationErrors(errors);
                  return;
            }

            setLoading(true);
            setError(null);
            setSuccess(null);

            try {
                  const response = await axios.post(`${uri}register`, formData);
                  setLoading(false);
                  setSuccess('Registrasi berhasil!');
                  return response.data;
            } catch (error) {
                  setLoading(false);
                  setError(error.response?.data?.message || 'Terjadi kesalahan saat registrasi');
                  throw error;
            }
      };

      return { formData, loading, error, success, validationErrors, handleChange, handleSubmit };
}

export default Registration;