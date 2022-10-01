import React from 'react';
import img3 from '../../accets/transactions.png'
import svg2 from '../../accets/success-tick-svgrepo-com.svg'
const Send = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-emerald-50 lg:px-48 lg:mt-36 mt-10">
                <div class="hero-content flex-col lg:flex-row-reverse px-10 ">
                    <div className='mt-10 lg:mt-0'>
                        <img src={img3} class="max-w-sm rounded-lg shadow-2xl lg:-mb-24" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 class="text-4xl font-semibold">Send & Receive <br /> money instantly</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div >
                            <div className=''>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg2} className='text-green-600 ' alt="" />
                                    <p>Instant Transfers</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg2} alt="" />
                                    <p>Payment worldWide</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg2} alt="" />
                                    <p>Payment worldWide</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Send;