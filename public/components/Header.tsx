
import React from 'react';
import { ADDON_NAME, ADDON_DESCRIPTION, INSTALL_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
        {ADDON_NAME}
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
        {ADDON_DESCRIPTION}
      </p>
      <div className="mt-10">
        <a
          href={INSTALL_URL}
          className="inline-block bg-purple-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          تثبيت الإضافة
        </a>
        <p className="mt-4 text-sm text-gray-500">يتطلب تثبيت تطبيق Stremio.</p>
      </div>
    </header>
  );
};

export default Header;
