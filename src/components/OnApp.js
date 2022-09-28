import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React from 'react';
import img2 from '../accets/app.svg'
import OneAppCard from './oneapp card/OneAppCard';
const OnApp = () => {
    const card1=[
        {
            "id": 1,
        "name": "Instant transection",
        "para": "Easy to transing any amount Easy to transing any amount Easy to transing any amount",
        
        },
        {
            "id": 2,
        "name": "Instant transection",
        "para": "Easy to transing any amount Easy to transing any amount Easy to transing any amount",
        
        },
        {
            "id": 3,
        "name": "Instant transection",
        "para": "Easy to transing any amount Easy to transing any amount Easy to transing any amount",
    
        },
        {
            "id": 4,
        "name": "Instant transection",
        "para": "Easy to transing any amount Easy to transing any amount Easy to transing any amount",
        
        },
        {
            "id": 5,
        "name": "Instant transection",
        "para": "Easy to transing any amount Easy to transing any amount Easy to transing any amount",
        
        },
        {
            "id": 6,
        "name": "Instant transection",
        "para": "Easy to transing any amount Easy to transing any amount Easy to transing any amount",
        
        },
       
    ]
    return (
        <div>
            <div>
                <div class=" min-h-screen bg-base-100 px-48 mt-36 ">
                    <div class="flex justify-between gap-12">

                        <div>
                            <h1 class="text-5xl font-semibold">One App</h1>
                            <h1 class="text-5xl font-semibold">One Banking</h1>
                            <div>
                                <div className='mt-4 '>
                                
                                    <div  className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                                        {
                                            card1.map(cd => <OneAppCard key={cd.id} cd={cd}></OneAppCard>)
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                        <img src={img2} alt='' class="max-w-sm rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnApp;