import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  const [display, setDisplay ] = useState( 'none' );

  function handleMenuClick() {
    if ( display == 'none' ) {
      setDisplay( 'block' )
    } else {
      setDisplay( 'none' )
    };
  };

  return (
    <div onClick={handleMenuClick} className='z-50 absolute right-[7%] bg-gray-700 rounded-lg p-2 md:hidden'>
      <div className='relative h-8 w-8 mx-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute" viewBox="0 0 20 20" fill="white">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div style={{display:display}} className='text-center bg-white shadow-lg rounded-lg p-8'>
        <h3 className='text-xl font-semibold border-b border-black pb-2 mb-2'>
          Categories
        </h3>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block hover:bg-gray-200 rounded-lg p-3 border-b border-gray-500 shadow-lg'>
              {category.name}
            </span>
          </Link>
        ))}
        <Link href='/tools/selection'>
            <span className='cursor-pointer block hover:bg-gray-200 rounded-lg p-3 border-b border-gray-500 shadow-lg'>
                Tools
            </span>
        </Link>
      </div>
    </div>
  ) 
};

export default Categories;
