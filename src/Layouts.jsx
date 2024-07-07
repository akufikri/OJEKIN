// src/components/Layout.jsx
import BottomBar from './components/bottom'


const Layout = ({ children }) => {
      return (


            <main className='bg-blue-100 h-screen'>
                  <div className="max-w-md mx-auto">
                        <div className="bg-white w-full h-screen overflow-y-auto p-4">
                              {children}

                        </div>
                        <BottomBar />
                  </div>
            </main>
      );
};

export default Layout;