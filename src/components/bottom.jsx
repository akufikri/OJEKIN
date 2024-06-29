import React from 'react';
import { CgNotes } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BottomBar = () => {
    return (
        <div className="max-w-md w-full h-14 bg-white border-t border-gray-200 fixed bottom-0 px-4">
            <div className="flex items-center justify-between h-full px-2">
                <BottomBarIcon icon={<FiHome size="20" />} label="Beranda" href="/" />
                <BottomBarIcon icon={<CgNotes size="20" />} label="Pesanan" href="*" />
                <BottomBarIcon icon={<MdOutlineChatBubbleOutline size="20" />} label="Chat" href="*" />
                <BottomBarIcon icon={<FaRegUser size="20" />} label="Akun" href="/pengaturan" />
            </div>
        </div>
    );
};

const BottomBarIcon = ({ icon, label, href }) => (
    <Link to={href} className="flex flex-col items-center group">
        <div className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
            {icon}
        </div>
        <span className="text-xs mt-1 text-gray-500 group-hover:text-blue-500 transition-colors duration-200">{label}</span>
    </Link>
);

export default BottomBar;