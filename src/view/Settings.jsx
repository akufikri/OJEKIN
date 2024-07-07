import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { BiUser, BiNotification, BiShield, BiHelpCircle, BiLogOut } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';

const SettingItem = ({ icon, title, description, action }) => (
      <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
                  {icon}
                  <div>
                        <h3 className="font-medium">{title}</h3>
                        <p className="text-sm text-gray-500">{description}</p>
                  </div>
            </div>
            {action}
      </div>
);

const Settings = () => {
      const navigate = useNavigate();
      const [profile, setProfile] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const uri = 'https://backend-ojekin.vercel.app/auth/';
      useEffect(() => {
            const fetchProfile = async () => {
                  const userString = localStorage.getItem('user');
                  if (!userString) {
                        navigate('/login');
                        return;
                  }

                  const user = JSON.parse(userString);
                  if (!user || !user.token) {
                        navigate('/login');
                        return;
                  }

                  try {
                        const response = await axios.get(uri + 'profile', {
                              headers: { Authorization: `Bearer ${user.token}` }
                        });
                        setProfile(response.data);
                        setLoading(false);
                  } catch (err) {
                        console.error('Error fetching profile:', err);
                        setError('Failed to load profile');
                        setLoading(false);
                        if (err.response && err.response.status === 401) {
                              navigate('/login');
                        }
                  }
            };


            fetchProfile();
      }, [navigate]);

      const handleLogout = () => {
            localStorage.removeItem('user')
            navigate('/login');
      };

      if (loading) return <div className='h-full flex items-center justify-center w-full gap-2'>
            <AiOutlineLoading3Quarters className='animate-spin' /><span>Loading</span>
      </div>;
      if (error) return <div>Error: {error}</div>;
      if (!profile) return null;

      return (
            <section className='max-w-2xl mx-auto p-4'>
                  <Card className="bg-blue-50 mb-6">
                        <CardContent className="flex items-center pt-6 pb-6 gap-4">
                              {profile.user.hasOwnProperty('profile_picture') ? (
                                    profile.user.profile_picture ? (
                                          <Avatar className="w-16 h-16">
                                                <AvatarImage src={profile.user.profile_picture} alt={profile.user.name} />
                                          </Avatar>
                                    ) : (
                                          <FaUserCircle className='text-[60px]' />
                                    )
                              ) : (
                                    <FaUserCircle className='text-[60px]' />
                              )}
                              <div className="flex-grow">
                                    <CardTitle className="text-xl mb-1">{profile.user.name}</CardTitle>
                                    <span className='block text-gray-600'>{profile.user.email}</span>
                                    <Button variant="outline" size="sm" className="mt-2">Edit Profil</Button>
                              </div>
                        </CardContent>
                  </Card>


                  <Card className="mb-6">
                        <CardContent className="divide-y">
                              <SettingItem
                                    icon={<BiUser className="w-6 h-6" />}
                                    title="Informasi Akun"
                                    description="Ubah informasi pribadi Anda"
                                    action={<Button variant="ghost">Edit</Button>}
                              />
                              <SettingItem
                                    icon={<BiNotification className="w-6 h-6" />}
                                    title="Notifikasi"
                                    description="Atur preferensi notifikasi Anda"
                                    action={<Switch />}
                              />
                              <SettingItem
                                    icon={<BiShield className="w-6 h-6" />}
                                    title="Privasi dan Keamanan"
                                    description="Kelola pengaturan privasi dan keamanan"
                                    action={<Button variant="ghost">Atur</Button>}
                              />
                        </CardContent>
                  </Card>

                  {profile.user.role === 'driver' && profile.driver && (
                        <Card className="mb-6">
                              <CardContent>
                                    <h3 className="font-medium mb-2">Informasi Driver</h3>
                                    <p>Tipe Kendaraan: {profile.driver.vehicle_type}</p>
                                    <p>Nomor Kendaraan: {profile.driver.vehicle_number}</p>
                                    <p>Nomor Lisensi: {profile.driver.license_number}</p>
                                    <p>Status: {profile.driver.status}</p>
                                    <p>Rating: {profile.driver.rating}</p>
                                    <p>Total Penumpang: {profile.driver.total_riders}</p>
                              </CardContent>
                        </Card>
                  )}

                  <Card>
                        <CardContent className="divide-y">
                              <SettingItem
                                    icon={<BiHelpCircle className="w-6 h-6" />}
                                    title="Bantuan dan Dukungan"
                                    description="Dapatkan bantuan atau hubungi kami"
                                    action={<Button variant="ghost">Hubungi</Button>}
                              />
                              <SettingItem
                                    icon={<BiLogOut className="w-6 h-6 text-red-500" />}
                                    title="Keluar"
                                    description="Keluar dari akun Anda"
                                    action={<Button variant="destructive" onClick={handleLogout}>Keluar</Button>}
                              />
                        </CardContent>
                  </Card>
            </section>
      );
};

export default Settings;