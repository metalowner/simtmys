import React, { useRef } from 'react';
import Link from 'next/link';
import ReactToPrint from 'react-to-print';

const Tools = () => {
    const componentRef = useRef();

    return (
      <div className='container mx-auto px-10 mb-8'>
        <Link href='/tools/canvas'>
            <div className='rounded-lg w-2/3 bg-gray-100 mx-auto text-center p-8 shadow-lg cursor-pointer mb-8'>
                  <span className='mt-2 text-xl align-middle font-semibold'>Lean Startup Canvas</span>
                  <p className='mt-2 text-gray-700 border-t border-gray-700 pt-2'>The Lean Startup Canvas is a professional business and marketing tool that allows to develop your strategy on one page.</p>
            </div>
          </Link>
          <Link href='/tools/acen'>
            <div className='rounded-lg w-2/3 bg-gray-100 mx-auto text-center p-8 shadow-lg cursor-pointer mb-8'>
                  <span className='mt-2 text-xl align-middle font-semibold'>Artificial Coach</span>
                  <p className='mt-2 text-gray-700 border-t border-gray-700 pt-2'>The artificial coach is a reproduction of the professional results coaching process.</p>
            </div>
          </Link>
      </div>
    );
  };
  
export default Tools;