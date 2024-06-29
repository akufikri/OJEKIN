import React from 'react';
import { FaUser, FaHome, FaChat, FaHeart } from 'react-icons/fa';
import { CgNotes } from "react-icons/cg";

const BottomBar = () => {
    return (
        <div className="max-w-md w-full h-14 bg-white border-t border-gray-200 fixed bottom-0 px-4">
            <div className="flex items-center justify-between h-full">
                <BottomBarIcon icon={<FaHome size="20" />} label="Beranda" />
                <BottomBarIcon icon={<CgNotes size="20" />} label="Pesanan" />
                <BottomBarIcon icon={<FaHeart size="20" />} label="Favorit" />
                <BottomBarIcon icon={<FaUser size="20" />} label="Akun" />
            </div>
        </div>
    );
};

const BottomBarIcon = ({ icon, label }) => (
    <button className="flex flex-col items-center group">
        <div className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
            {icon}
        </div>
        <span className="text-xs mt-1 text-gray-500 group-hover:text-blue-500 transition-colors duration-200">{label}</span>
    </button>
);

export default BottomBar;