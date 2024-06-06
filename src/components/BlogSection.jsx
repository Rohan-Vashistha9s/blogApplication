import React from 'react'
import BlogCart from './BlogCart'

const BlogSection = () => {
    return (
        <div className='my-20 mx-10 md:mx-auto w-fit flex flex-col md:flex-row gap-3 lg:gap-8 justify-center items-center'>

            {/* second blog will be here */}
            <div className='py-3 flex mb-4 flex-col gap-3 w-fit rounded-2xl shadow-md mx-auto bg-white'>
                <h3 className='text-3xl font-bold mx-5'>say yes to vs code</h3>
                <img src="/image.webp" alt="thumbnail" className='md:w-[30vw] rounded-3xl shadow-lg' />

                <div className='flex gap-3 mx-5 py-2'>
                    <span className='px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold capitalize'>Coding</span>
                    <span className='px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold capitalize'>Programming</span>
                    <hr className='mx-5' />

                    <div className='mx-5 flex justify-start items-center gap-3'>
                        <img src="logo.jpg" alt="logo" className='rounded-full w-[40px] h-[40px] ' />
                        <div>
                            <h4 className='font-bold'>Rohan</h4>
                            <p className='font-bold'>06 june 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* rest all blog will be here */}
            <div className='grid grid-cols-1 gap-3 md:h-[80vh] md:overflow-y-scroll md:px-3 md:pb-2 scoll-hide'>

                <BlogCart />
                <BlogCart />
                <BlogCart />

            </div>
        </div>
    )
}

export default BlogSection