import { header_icon } from '@/data/header-data'
import React from 'react'


const Header = () => {
//usestate
//use query
//custom hook
//useeffetch
//custom funtion

    return (
        <div className='w-full bg-white h-[86px] py-4'>
            <div className='w-[1200px] mx-auto flex items-center justify-between'>
                <h1 className='text-2xl text-blue-300'>Brand</h1>
                <div className='border-1 border-blue flex w-1/2 border-gray-400  rounded-lg justify-between items-center'>
                    <input className='w-2/3 border-none outline-none py-0 px-1' placeholder='Search' />
                    <button className='border-1 border-white py-2 px-3 rounded-lg'>All Category</button>
                    <button className='bg-blue-500 text-white py-2 px-3 rounded-lg'>Search</button>
                </div>
                <div className='flex items-center gap-4'>
                    {
                        header_icon.map((item) => (
                            <div className='flex flex-col items-center gap-1' key={item.id}>
                                {
                                    item.icon && (
                                        <item.icon fontSize={18} />

                                    )
                                }
                                <span>{item.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header