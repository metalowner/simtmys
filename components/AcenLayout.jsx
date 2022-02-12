import React, { useRef ,useState, useEffect } from 'react';

const AcenLayout = () => {
    const [localStorage, setLocalStorage] = useState(null);
    const visionEl = useRef();
    const mainGoalEl = useRef();

    return (
        <div className='container mx-auto p-8 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-5 mb-8 text-white'>
                <div>
                    <h3>Vision</h3>
                    <div className='grid grid-cols-1 gap-4 mb-4'>
                        <textarea 
                        ref={visionEl} 
                        className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Describe how your best life looks like.'
                        name='comment'
                        />
                    </div>
                </div>
                <div>
                    <h3>Main Goal</h3>
                    <div className='grid grid-cols-1 gap-4 mb-4'>
                        <textarea 
                        ref={mainGoalEl} 
                        className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Describe how your best life looks like.'
                        name='comment'
                        />
                    </div>
                </div>
                <div>
                    <h3>Tasks</h3>
                </div>
                <div>
                    <h3>Values</h3>
                    <p>If you know your personal values please fill them here one at a time.</p>
                    <input 
                        type='text'
                        className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='What you value most?'
                        name='personalValue'
                    />
                    
                </div>
                <div>
                    <h3>Obstacles</h3>
                </div>
                <div>
                    <h3>Resources</h3>
                </div>
            </div>
        </div>
    );
};

export default AcenLayout;