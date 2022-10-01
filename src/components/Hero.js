import React from 'react';
import img1 from "../accets/cards.png"
import svg1 from '../accets/success-tick-svgrepo-com.svg'
import icon from '../accets/arrow-thin-right-icon.svg'
const Hero = () => {

    return (
        <div>
            <div class="hero min-h-screen bg-base-100 lg:px-48 lg:mt-36 ">
                <div class="hero-content gap-12 flex-col lg:flex-row-reverse">
                    <img src={img1} alt='' class="max-w-sm rounded-lg " />
                    <div>
                        <h1 class="text-8xl font-bold">Banking <br /> Start Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div >
                            <div className='flex gap-4'>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg1} className='text-green-600' alt="" />
                                    <p>Instant Transfers</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg1} alt="" />
                                    <p>Payment worldWide</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex gap-4 '>
                                    <img width={18} height={18} src={svg1} alt="" />
                                    <p>Saving accounts</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img width={18} height={18} src={svg1} alt="" />
                                    <p>100% mobile banking</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='mt-4'>
                            <button class="btn btn-accent text-white">Open Account</button>
                            <button class="btn btn-ghost ml-4 text-accent">Compare Cards <span className='px-2'><img width={20} height={20} src={icon} alt="" /></span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;