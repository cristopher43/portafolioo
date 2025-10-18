import { title } from 'process'
import React from 'react'
const ervice = [
    {
    id: 1,
    title: "web Design",
    description:"creating visually appealing and user-friendly web desing" 
    }

]
export const Service = () => {
    return (
        <div className='bg-black text-white py-20' id='servicios'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Servicios</h2>
                <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'> 

                </div>
            </div>
        </div>
    )
}

export default Service