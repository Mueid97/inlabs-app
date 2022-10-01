import React from 'react';
import img4 from '../../accets/grid (1).png'
import svg3 from '../../accets/success-tick-svgrepo-com.svg'
import icon from '../../accets/arrow-thin-right-icon.svg'
const Notify = () => {
    return (
        <div>
            <div class="hero min-h-screen  lg:px-48  lg:mb-10 px-10 mt-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={img4} class="max-w-sm rounded-lg shadow-2xl lg:-mb-24" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1>Notifications</h1>
                        <h1 class="text-4xl font-semibold">Stay Notified</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div >
                            <div className=''>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg3} className='text-green-600 ' alt="" />
                                    <p>Instant Transfers</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg3} alt="" />
                                    <p>Payment worldWide</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg3} alt="" />
                                    <p>Payment worldWide</p>
                                </div>
                            </div>

                            <button class="btn btn-ghost -ml-4 mt-4 text-accent">Compare Cards <span className='px-2'><img width={20} height={20} src={icon} alt="" /></span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notify;