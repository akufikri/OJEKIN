import React from 'react';
import { FaMotorcycle } from 'react-icons/fa';

const ServiceGrid = () => {
      const services = [
            { icon: <FaMotorcycle />, name: 'Antar dulu' },
            { icon: '', name: 'Akan datang' },
            { icon: '', name: 'Akan datang' },
            { icon: '', name: 'Akan datang' },
      ];

      return (
            <div className="grid grid-cols-4 gap-3 p-4">
                  {services.map((service, index) => (
                        <ServiceCard
                              key={index}
                              icon={service.icon}
                              name={service.name}
                              isDisabled={!service.icon}
                        />
                  ))}
            </div>
      );
};

const ServiceCard = ({ icon, name, isDisabled }) => (
      <div
            className={`
      bg-white rounded-lg shadow-sm border h-20 flex flex-col items-center justify-center
      ${isDisabled
                        ? 'opacity-50 cursor-not-allowed'
                        : 'transition-all duration-300 hover:shadow-md cursor-pointer'
                  }
    `}
      >
            <div className="text-2xl text-blue-500 mb-1">{icon}</div>
            <span className="text-xs font-medium text-gray-700">{name}</span>
      </div>
);

export default ServiceGrid;