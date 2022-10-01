import React from 'react';
import svg4 from '../../accets/success-tick-svgrepo-com.svg'
import img5 from '../../accets/grid (2).png'
const Less = () => {
    return (
        <div>
             <div class=" min-h-screen mt-10  lg:px-48 ">
                <img className='mb-4 px-10' src={img5} alt="" />
                <div class=" lg:flex justify-between items-center px-10 gap-10 ">
                   
                    <div>
                        <h1>Tools</h1>
                        <h1 class="text-4xl font-semibold">Seemless <br /> Intregation</h1>
                        <p class="py-6">Provident cupiditate voluptatem  <br /> et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
                        
                    </div>
                    <div >
                            <div className=''>
                                <div className='flex gap-4'>
                                    <img width={18} height={18}  src={svg4} className='text-green-600 ' alt="" />
                                    <p>Instant Transfers</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg4} alt="" />
                                    <p>Payment worldWide</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg4} alt="" />
                                    <p>Payment worldWide</p>
                                </div>
                            </div>
                            
                            
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Less;