
import { data } from './Data'
import React, { useState } from 'react'
import { FcNext, FcPrevious, FcDoughnutChart } from "react-icons/fc";


function SlideShowDetails() {

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index > data.length -2) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }

    }

    const prevSlide = () => {
        if (index < 1) {
            setIndex(2)
        }
        else {
            setIndex(index - 1)
        }

    }

    const randomNumber=()=>{
        let rnd=Math.floor(Math.random() * (data.length-1))
        if(rnd===index){
            rnd++
        }
        setIndex(rnd);
    }


    return (
        <>
            <div>
                <div className='flex justify-center pb-3'>
                    <img src={data[index].image} className='rounded-full w-24 h-24'></img>
                </div>
                <div className='flex justify-center pb-4'>
                    <h3 className='text-xl font-bold text-gray-800' >{data[index].name}</h3>
                </div>
                <div className='flex justify-center pb-4'>
                    <h4 className='text-lg font-semibold text-gray-700' >{data[index].job}</h4>
                </div>
                <div className='flex justify-center'>
                    <p className='text-justify text-gray-600' >{data[index].text}</p>
                </div>
            </div>
            <div className='flex space-x-32 justify-center pt-16'>
                <FcPrevious className='cursor-pointer' onClick={nextSlide} />
                <FcDoughnutChart className='cursor-pointer' onClick={randomNumber} />
                <FcNext className='cursor-pointer' onClick={prevSlide} />
            </div>
        </>
    )
}

export default SlideShowDetails