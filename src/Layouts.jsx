// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BottomBar from './components/bottom'
import Navbar from './components/navbar'


const Layout = ({ children }) => {
      return (
            // <div>
            //       <nav>
            //             <ul>
            //                   <li><Link to="/">Beranda</Link></li>
            //                   <li><Link to="/about">Tentang</Link></li>
            //                   <li><Link to="/services">Layanan</Link></li>
            //                   <li><Link to="/contact">Kontak</Link></li>
            //             </ul>
            //       </nav>
            //       <main>{children}</main>
            //       <footer>© 2024 Aplikasi Saya</footer>
            // </div>

            <main className='bg-blue-100 h-screen'>
                  <Navbar />
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