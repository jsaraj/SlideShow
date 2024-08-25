
import { data } from './Data'
import React from 'react'



function SlideShowDetails() {
    return (
        <>
            {
                data.map((item,index) => {
                    return (
                        <div key={index}>
                            <div className='flex justify-center pb-3'>
                                <img src={item.image} className='rounded-full w-24 h-24'></img>
                            </div>
                            <div className='flex justify-center pb-4'>
                                <h3 className='text-xl font-bold text-gray-800' >{item.name}</h3>
                            </div>
                            <div className='flex justify-center pb-4'>
                                <h4 className='text-lg font-semibold text-gray-700' >{item.job}</h4>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-justify text-gray-600' >{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
           


        </>
    )
}

export default SlideShowDetails