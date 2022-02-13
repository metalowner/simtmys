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
    const alternativesEl = useRef();
    const keyMetricsEl = useRef();
    const conceptEl = useRef();
    const channelsEl = useRef();
    const earlyAdoptersEl = useRef();

    useEffect(() => {
        problemEl.current.value = window.localStorage.getItem('problem');
        solutionEl.current.value = window.localStorage.getItem('solution');
        valueEl.current.value = window.localStorage.getItem('uniqueValue');
        advantageEl.current.value = window.localStorage.getItem('advantage');
        customerEl.current.value = window.localStorage.getItem('customer');
        costEl.current.value = window.localStorage.getItem('cost');
        revenueEl.current.value = window.localStorage.getItem('revenue');
        alternativesEl.current.value = window.localStorage.getItem('alternatives');
        keyMetricsEl.current.value = window.localStorage.getItem('keyMetrics');
        conceptEl.current.value = window.localStorage.getItem('concept');
        channelsEl.current.value = window.localStorage.getItem('channels');
        earlyAdoptersEl.current.value = window.localStorage.getItem('earlyAdopters');
    }, []);

    const handleSaveLocally = () => {
    
        const { value: problem } = problemEl.current;
        const { value: solution } = solutionEl.current;
        const { value: uniqueValue } = valueEl.current;
        const { value: advantage } = advantageEl.current;
        const { value: customer } = customerEl.current;
        const { value: cost } = costEl.current;
        const { value: revenue } = revenueEl.current;
        const { value: alternatives } = alternativesEl.current;
        const { value: keyMetrics } = keyMetricsEl.current;
        const { value: concept } = conceptEl.current;
        const { value: channels } = channelsEl.current;
        const { value: earlyAdopters } = earlyAdoptersEl.current;

        window.localStorage.setItem('problem', problem);
        window.localStorage.setItem('solution', solution);
        window.localStorage.setItem('uniqueValue', uniqueValue);
        window.localStorage.setItem('advantage', advantage);
        window.localStorage.setItem('customer', customer);
        window.localStorage.setItem('cost', cost);
        window.localStorage.setItem('revenue', revenue);
        window.localStorage.setItem('alternatives', alternatives);
        window.localStorage.setItem('keyMetrics', keyMetrics);
        window.localStorage.setItem('concept', concept);
        window.localStorage.setItem('channels', channels);
        window.localStorage.setItem('earlyAdopters', earlyAdopters);
    };

    const PrintingDiv = React.forwardRef((props, ref) => (
        <div ref={ref}>
            {props.children}
        </div>
    ));

    const ref = React.createRef();
    
    const handleOnBeforeGetContent = () => {
        ref.current.className="container mx-auto text-gray-700 text-center p-8"
        ref.current.children[0].className = 'grid grid-cols-5 grid-rows-2 gap-5 mb-8'
        ref.current.children[1].className = 'grid grid-cols-2 gap-5'
    }

    const handleOnAfterPrint = () => {
        ref.current.className=""
        ref.current.children[0].className = 'grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-5 mb-8'
        ref.current.children[1].className = 'grid grid-cols-1 lg:grid-cols-2 gap-5'
    }

    const handlePageStyle = () => {
        const width = window.screen.availWidth;
        const height = window.screen.availHeight;

        return ("@page { size: "+1920+"px "+1080+"px }")
    }

    function handleChange(event) {
        event.target.rows = (event.target.scrollHeight-80)/24+2
    }

    return (
        <div className="container mx-auto p-8 mb-8 text-gray-700 text-center">
            <div ref={ref} >
                <div className='grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-5 mb-8'>
                    <div className='row-span-2 bg-white shadow-lg rounded-lg p-4'>
                        <h3 className='pb-4 border-b border-gray-300'>PROBLEM</h3>
                        <textarea
                        onChange={handleChange}
                        ref={problemEl} 
                        className='p-4 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 border-b border-gray-300'
                        placeholder='Top 3 customers problems'
                        name='problem'
                        />
                        <h3 className='pb-4 border-b border-gray-300 mt-2'>ALTERNATIVES</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={alternativesEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Available solutions (competitors)'
                        name='alternatives'
                        />
                    </div>
                    <div className='row-span-2 bg-white shadow-lg rounded-lg p-4'>
                        <h3 className='pb-4 border-b border-gray-300'>SOLUTION</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={solutionEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Your solutions to them'
                        name='solution'
                        />
                        <h3 className='pb-4 border-b border-gray-300 mt-2'>KEY METRICS</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={keyMetricsEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Key numbers telling how your business is doing'
                        name='keyMetrics'
                        />
                    </div>
                    <div className='row-span-2 bg-white shadow-lg rounded-lg p-4'>
                        <h3 className='pb-4 border-b border-gray-300'>UNIQUE VALUE PROPOSITION</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={valueEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Your offer message'
                        name='uniqueValue'
                        />
                        <h3 className='pb-4 border-b border-gray-300 mt-2'>CONCEPT</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={conceptEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Write your vision here'
                        name='concept'
                        />
                    </div>
                    <div className='row-span-2 bg-white shadow-lg rounded-lg p-4'>
                        <h3 className='pb-4 border-b border-gray-300'>UNFAIR ADVANTAGE</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={advantageEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Something difficult to copy'
                        name='advantage'
                        />
                        <h3 className='pb-4 border-b border-gray-300 mt-2'>CHANNELS</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={channelsEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Paths to customers'
                        name='channels'
                        />
                    </div>
                    <div className='row-span-2 bg-white shadow-lg rounded-lg p-4'>
                        <h3 className='pb-4 border-b border-gray-300'>CUSTOMER SEGMENT</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={customerEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Target customers and users'
                        name='customer'
                        />
                        <h3 className='pb-4 border-b border-gray-300 mt-2'>EARLY ADOPTERS</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={earlyAdoptersEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Your first customers'
                        name='earlyAdopters'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='bg-white shadow-lg rounded-lg p-4'>
                        <h3 className='pb-4 border-b border-gray-300'>COST STRUCTURE</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={costEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Must have spendings'
                        name='cost'
                        />
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-4'>
                        <h3 className='pb-4 border-b border-gray-300'>REVENUE STREAMS</h3>
                        <textarea 
                        onChange={handleChange}
                        ref={revenueEl} 
                        className='p-4 border-b border-gray-300 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                        placeholder='Sources of revenue'
                        name='revenue'
                        />
                    </div>
                </div>
                <PrintingDiv ref={ref} />
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
            <div className='mt-8 flex flex-col justify-center items-center'>
                <ReactToPrint
                    pageStyle={handlePageStyle}
                    trigger={() => <button className='transition duration-500 ease hover:bg-red-700 inline-block bg-red-500 text-lg rounded-full text-white px-8 py-3 cursor-pointer'>Save PDF</button>}
                    content={() => ref.current}
                    onBeforeGetContent = {handleOnBeforeGetContent}
                    onAfterPrint = {handleOnAfterPrint}
                />
            </div>
        </div>
    );
};

export default CanvasLayout;