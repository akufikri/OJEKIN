import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
export default function Login() {
    return (
        <>
            <section className="flex items-center h-[80vh] justify-center">
                <div className="w-full">
                    <div className="my-2 flex items-center justify-center">
                        <img className="w-40 drop-shadow-xl" src="https://ucarecdn.com/7a05217b-4ad0-448d-aba0-ac77246505d6/MemojiBoys911.png" alt="" />
                    </div>
                    <h1 className="text-center font-semibold mb-5 text-xl">Selamat datang!</h1>
                    {/* condition if not auth */}
                    <div className="mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="Email" id="email" />
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="Password" id="password" />
                    </div>
                    <Label>Belum punya akun ? <Link to='/register' className="hover:text-blue-400 hover:underline">Daftar</Link></Label>
                    <div className="mb-3 grid grid-cols-1">
                        <Button className="bg-blue-100 hover:bg-blue-100 text-blue-900 mt-2">Masuk</Button>
                    </div>
                </div>
            </section>
        </>
    )
}