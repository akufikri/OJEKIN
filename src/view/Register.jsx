import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import Registration from "@/hooks/Register"
import { CustomAlert } from "@/components/alert/Alerts"

export default function Register() {
    const { formData, loading, error, success, validationErrors, handleChange, handleSubmit } = Registration()

    return (
        <>
            <section className="flex items-center h-[80vh] justify-center">
                <div className="w-full">
                    <div className="my-2 flex items-center justify-center">
                        <img className="w-40 drop-shadow-xl" src="https://ucarecdn.com/4188406e-e442-4706-9ba3-2f95ab79e248/MemojiGirls1211.png" alt="" />
                    </div>
                    <h1 className="text-center font-semibold mb-5 text-xl">Selamat datang!</h1>
                    {error && <CustomAlert title="Error" description={error} variant="destructive" />}
                    {success && <CustomAlert title="Sukses" description={success} variant="default" />}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Label htmlFor="name">Nama</Label>
                            <Input
                                type="text"
                                placeholder="Nama"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={validationErrors.name ? "border-red-500" : ""}
                            />
                            {validationErrors.name && <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>}
                        </div>
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
                        <div className="mb-3">
                            <Label htmlFor="phone_number">Nomor Telepon (Opsional)</Label>
                            <Input
                                type="tel"
                                placeholder="Nomor Telepon"
                                id="phone_number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                className={validationErrors.phone_number ? "border-red-500" : ""}
                            />
                            {validationErrors.phone_number && <p className="text-red-500 text-sm mt-1">{validationErrors.phone_number}</p>}
                        </div>
                        <Label>Sudah punya akun ? <Link to='/login' className="hover:text-blue-400 hover:underline">Masuk</Link></Label>
                        <div className="mb-3 grid grid-cols-1">
                            <Button
                                type="submit"
                                className="bg-blue-100 hover:bg-blue-100 text-blue-900 mt-2"
                                disabled={loading || Object.values(validationErrors).some(error => error !== '')}
                            >
                                {loading ? 'Mendaftar...' : 'Daftar'}
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
