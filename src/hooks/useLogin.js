// hooks/useLogin.js
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useLogin = () => {
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
            email: '',
            password: ''
      });
      const uri = 'https://backend-ojekin.vercel.app/auth/';
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const [validationErrors, setValidationErrors] = useState({});

      const validateField = (name, value) => {
            switch (name) {
                  case 'email':
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!value) return 'Email wajib diisi';
                        if (!emailRegex.test(value)) return 'Format email tidak valid';
                        return '';
                  case 'password':
                        if (!value) return 'Password wajib diisi';
                        if (value.length < 6) return 'Password harus minimal 6 karakter';
                        return '';
                  default:
                        return '';
            }
      };

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });

            const error = validateField(name, value);
            setValidationErrors((prevErrors) => ({
                  ...prevErrors,
                  [name]: error
            }));
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            setError(null);
            setSuccess(null);

            const newValidationErrors = {};
            Object.keys(formData).forEach((key) => {
                  const error = validateField(key, formData[key]);
                  if (error) {
                        newValidationErrors[key] = error;
                  }
            });

            setValidationErrors(newValidationErrors);

            if (Object.keys(newValidationErrors).length > 0) {
                  setLoading(false);
                  return;
            }

            try {
                  const response = await axios.post(`${uri}login`, formData);
                  const { token, user } = response.data;

                  const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day in milliseconds
                  localStorage.setItem('user', JSON.stringify({ ...user, token, expiry: expiryTime }));

                  setSuccess(response.data.message);
                  setLoading(false);

                  // Redirect to /pengaturan after successful login
                  navigate('/pengaturan');
            } catch (error) {
                  setLoading(false);
                  if (error.response && error.response.data) {
                        setError(error.response.data.error);
                  } else {
                        setError('An unexpected error occurred');
                  }
            }
      };


      return {
            formData,
            loading,
            error,
            success,
            validationErrors,
            handleChange,
            handleSubmit
      };
};

export default useLogin;
