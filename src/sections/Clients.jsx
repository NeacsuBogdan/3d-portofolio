import React from 'react'
import {clientReviews} from "../constants/index.js";

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">
                Hear from my Clients
            </h3>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-12'>
                {clientReviews.map(({id, name, review, img, position}) => (
                    <div key={id} className='rounded-lg md:p-10 p-5 col-span-1 bg-black-200 bg-opacity-50'>
                        <div>
                            <p className='text-white bg-black-200'>
                                {review}
                            </p>

                            <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7'>
                                <div className='flex gap-3'>
                                    <img src={img} alt={name} className='w-12 h-12 rounded-full'/>

                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-white-800'>
                                            {name}
                                        </p>
                                        <p className='text-white-500 md:text-base text-sm'>
                                            {position}
                                        </p>
                                    </div>
                                </div>

                                <div className='flex self-end items-center gap-2'>
                                    { Array.from({length: 5}).map((_, i) => (
                                        <img
                                            key={i}
                                            src='/assets/star.png'
                                            alt='star'
                                            className='w-5 h-5'/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Clients
