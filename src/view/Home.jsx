// src/pages/Home.jsx
import { Badge } from '@/components/ui/badge';
import { Button } from '../components/ui/button'
import { Card, CardContent, } from '../components/ui/card'
import { SiGooglegemini } from "react-icons/si";
const Home = () => {
      return (
            <>
                  <h1 className="font-semibold text-center">Mau kemana hari ini ? <Badge className="gap-1"><SiGooglegemini className='rotate-45' /> <span>Fulan Ahmad</span></Badge></h1>
                  <Card className="mt-5 bg-gradient-to-r from-blue-200 to-blue-300 border-0">
                        <CardContent className="h-36 flex items-center">
                              <div className="block w-56 space-y-2 mt-4">
                                    <span className='block text-[13px] font-semibold'>
                                          Ojekin adalah demo platform penyedia jasa antar
                                    </span>
                                    <Button className="bg-white hover:bg-white text-blue-500 mt-2">Pesan Sekarang</Button>
                              </div>
                              <div>
                                    <img src="https://ucarecdn.com/11ae503b-e379-4105-a407-e373ec6ba232/MemojiBoys815.png" alt="" className='w-36 drop-shadow-xl' />
                              </div>
                        </CardContent>
                  </Card>
                  <div className="my-4">

                        <Card className="border border-dashed">
                              <CardContent className="flex items-center justify-center">
                                    <h1 className='mt-5 font-semibold text-blue-500'>Akan datang fitur ini</h1>
                              </CardContent>
                        </Card>
                  </div>
            </>
      );
};

export default Home;