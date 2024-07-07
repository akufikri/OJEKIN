// components/Login.js
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
    const {
        formData,
        loading,
        error,
        success,
        validationErrors,
        handleChange,
        handleSubmit
    } = useLogin();

    return (
        <section className="flex items-center h-[80vh] justify-center">
            <div className="w-full">
                <div className="my-2 flex items-center justify-center">
                    <img className="w-40 drop-shadow-xl" src="https://ucarecdn.com/7a05217b-4ad0-448d-aba0-ac77246505d6/MemojiBoys911.png" alt="" />
                </div>
                <h1 className="text-center font-semibold mb-5 text-xl">Selamat datang!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={validationErrors.email ? "border-red-500" : ""}
                        />
                        {validationErrors.email && <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>}
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={validationErrors.password ? "border-red-500" : ""}
                        />
                        {validationErrors.password && <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>}
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-500">{success}</div>}
                    <Label>Belum punya akun? <Link to='/register' className="hover:text-blue-400 hover:underline">Daftar</Link></Label>
                    <div className="mb-3 grid grid-cols-1">
                        <Button
                            type="submit"
                            className="bg-blue-100 hover:bg-blue-100 text-blue-900 mt-2"
                            disabled={loading || Object.values(validationErrors).some(error => error !== '')}
                        >
                            {loading ? 'Loading...' : 'Masuk'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
