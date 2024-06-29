import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
      return (
            <div className="flex flex-col justify-center items-center px-4 h-full">
                  <div className="text-center">
                        <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4 mx-auto" />
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
                        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Halaman Tidak Ditemukan</h2>
                        <p className="text-gray-500 mb-8">
                              Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
                        </p>

                  </div>
            </div>
      );
};

export default NotFound;