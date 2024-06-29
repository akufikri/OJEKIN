import './App.css'
import BottomBar from './components/bottom'
import Navbar from './components/navbar'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'

function App() {
  return (
    <main className='bg-blue-100 h-screen'>
      <Navbar/>
      <div className="max-w-md mx-auto">
        <div className="bg-white w-full h-screen overflow-y-auto p-4">
            <h1 class="font-semibold text-center">Mau kemana hari ini ?</h1>
            <Card className="mt-2 bg-gradient-to-r from-blue-200 to-blue-300 border-0">
              <CardContent className="h-36 flex items-center">
                <div className="block w-56 space-y-2 mt-4">
                  <span className='block text-[12px] font-semibold'>
                    Ojekin adalah demo platform penyedia jasa antar
                  </span>
                  <Button className="bg-white hover:bg-white text-blue-500">Pesan Sekarang</Button>
                </div>
              </CardContent>
            </Card>
        </div>
        <BottomBar/>
      </div>
    </main>
  )
}

export default App
