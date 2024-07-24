import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

 


  return (
    <header className="bg-white text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <NavLink to="/"><img src="https://ies.ipsacademy.org/wp-content/uploads/2023/10/cropped-ies-logo-2023.png" alt="Institute Logo" className="md:h-24  md:mr-4" /></NavLink>
        
        
      </div>
      <div className="flex items-center gap-3">
        <NavLink  to="/signin" className='text-black px-6 py-2 rounded-xl bg border-2 hover:shadow-md' >Sign In with google</NavLink>
        <div className="relative">
          <button className="bg-blue-700 px-4 py-2 rounded">Menu</button>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded hidden">
            <a href="#" className="block px-4 py-2 text-gray-700">Page 1</a>
            <a href="#" className="block px-4 py-2 text-gray-700">Page 2</a>
            <a href="#" className="block px-4 py-2 text-gray-700">Page 3</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
