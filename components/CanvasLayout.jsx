import React, { useRef ,useState, useEffect } from 'react';
import ReactToPrint from 'react-to-print';

const CanvasLayout = () => {
    const [localStorage, setLocalStorage] = useState(null);
    const problemEl = useRef();
    const solutionEl = useRef();
    const valueEl = useRef();
    const advantageEl = useRef();
    const customerEl = useRef();
    const costEl = useRef();
    const revenueEl = useRef();
    const componentRef = useRef();

    useEffect(() => {
        problemEl.current.value = window.localStorage.getItem('problem');
        solutionEl.current.value = window.localStorage.getItem('solution');
        valueEl.current.value = window.localStorage.getItem('uniqueValue');
        advantageEl.current.value = window.localStorage.getItem('advantage');
        customerEl.current.value = window.localStorage.getItem('customer');
        costEl.current.value = window.localStorage.getItem('cost');
        revenueEl.current.value = window.localStorage.getItem('revenue');
    }, []);

    const handleSaveLocally = () => {
    
        const { value: problem } = problemEl.current;
        const { value: solution } = solutionEl.current;
        const { value: uniqueValue } = valueEl.current;
        const { value: advantage } = advantageEl.current;
        const { value: customer } = customerEl.current;
        const { value: cost } = costEl.current;
        const { value: revenue } = revenueEl.current;

        window.localStorage.setItem('problem', problem);
        window.localStorage.setItem('solution', solution);
        window.localStorage.setItem('uniqueValue', uniqueValue);
        window.localStorage.setItem('advantage', advantage);
        window.localStorage.setItem('customer', customer);
        window.localStorage.setItem('cost', cost);
        window.localStorage.setItem('revenue', revenue);
    };

    const PrintingDiv = React.forwardRef((props, ref) => (
        <div ref={ref}>
            {props.children}
        </div>
    ));

    const ref = React.createRef();
    
    const handleOnBeforeGetContent = () => {
        const currentChildren = ref.current.children;
        currentChildren[0].className = 'grid grid-cols-5 grid-rows-2 gap-5 mb-8'
        currentChildren[1].className = 'grid grid-cols-2 gap-5'
    }

    const handleOnAfterPrint = () => {
        ref.current.children[0].className = 'grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-5 mb-8'
        ref.current.children[1].className = 'grid grid-cols-1 lg:grid-cols-2 gap-5'

        return
    }

    return (
        <div ref={ref} className="container mx-auto p-8 mb-8 text-gray-700 text-center">
            <div className='grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-5 mb-8'>
                <div className='row-span-2 bg-white shadow-lg rounded-lg p-4'>
                    <h3 className='text-xl font-semibold border-b pb-4'>PROBLEM</h3>
                    <textarea 
                    ref={problemEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Problem'
                    name='problem'
                    />
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4'>
                    <h3 className='text-xl font-semibold border-b pb-4'>SOLUTION</h3>
                    <textarea 
                    ref={solutionEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Solution'
                    name='solution'
                    />
                </div>
                <div className='row-span-2 bg-white shadow-lg rounded-lg p-4'>
                    <h3 className='text-xl font-semibold border-b pb-4'>UNIQUE VALUE PROPOSITION</h3>
                    <textarea 
                    ref={valueEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Value'
                    name='uniqueValue'
                    />
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4'>
                    <h3 className='text-xl font-semibold border-b pb-4'>UNFAIR ADVANTAGE</h3>
                    <textarea 
                    ref={advantageEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Advantage'
                    name='advantage'
                    />
                </div>
                <div className='row-span-2 bg-white shadow-lg rounded-lg p-4'>
                    <h3 className='text-xl font-semibold border-b pb-4'>CUSTOMER SEGMENT</h3>
                    <textarea 
                    ref={customerEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Customer'
                    name='customer'
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='bg-white shadow-lg rounded-lg p-4'>
                    <h3 className='text-xl font-semibold border-b pb-4'>COST STRUCTURE</h3>
                    <textarea 
                    ref={costEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Cost'
                    name='cost'
                    />
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4'>
                    <h3 className='text-xl font-semibold border-b pb-4'>REVENUE STREAMS</h3>
                    <textarea 
                    ref={revenueEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Revenue'
                    name='revenue'
                    />
                </div>
            </div>
            <div className='mt-8 flex flex-col justify-center items-center'>
                <button 
                type='button' 
                onClick={handleSaveLocally}
                className='transition duration-500 ease hover:bg-red-700 inline-block bg-red-500 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
                >
                    Save Locally
                </button>
            </div>
            <ReactToPrint
                trigger={() => <button>Print!</button>}
                content={() => ref.current}
                onBeforeGetContent = {handleOnBeforeGetContent}
                onAfterPrint = {handleOnAfterPrint}
            />
            <PrintingDiv ref={ref} />
        </div>
    );
};

export default CanvasLayout;