import React from 'react';

const OneAppCard = ({cd}) => {
    const {name,para,img}= cd;
    return (
        <div>
            <div class=" bg-base-100 shadow-xl my-2 rounded-md">
                <figure className='px-4'>
                    <img style={{width: '30px', height: '30px'}} src={img}  alt="" class="rounded-xl" />
                </figure>
                <div class="px-4">
                    <h2 class="font-semibold">{name}</h2>
                    <p>{para}</p>
                   
                   
                </div>
            </div>
        </div>
    );
};

export default OneAppCard;