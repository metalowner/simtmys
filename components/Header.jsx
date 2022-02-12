import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import { Categories } from './';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full border-white py-8 grid grid-cols-2 md:inline-block'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        SimtMys
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
                <Link href='/tools/selection'>
                    <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                        Tools
                    </span>
                </Link>
            </div>
            <div>
                <Categories />
            </div>
        </div>
    </div>
  );
};

export default Header;
