import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import BlogCart from "../components/BlogCart"
import { MdAccountCircle, MdDelete, MdEdit } from 'react-icons/md'

const Blog = () => {

  const { id } = useParams();

  const [userAuthenticated, setUserAuthenticated] = useState(false);






  return (
    <section>
      <nav className='p-5 border-b-2 flex gap-2 bg-purple-500'>
        <Link to="/" className='font-semibold flex flex-col  justify-center items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 ease-out'>
          <AiFillHome /> <span>Home</span>
        </Link>
        / <span className='text-white cursor-pointer'>mern stack crash course</span>
      </nav>


      {/* blog */}

      <div className='flex mx-5 gap-3 md:gap-5 flex-col md:flex-row'>
        {/* selective blog section */}
        <div className='w-full md:w-[60vw] bg-white mx-auto p-5 rounded-lg my-10'>
          <h1 className='text-4xl font-bold my-5'>Mern stack crash cousre in hindi</h1>
          <img src="/image.webp" alt="blog thumbnail" className='w-full h-[40vh] object-cover rounded-2xl shadow-md' />
          <div className='flex gap-2 my-5 '>
            <span className='px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize'>Programming</span>
            <span className='px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize'>Coding</span>
          </div>
          <hr />
          <div className='my-5'>
            <p className='overflow-x-clip'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis eum quae voluptates, dolor earum! Id mollitia, laboriosam odit eaque nisi, rem modi molestiae, magnam ex quisquam iure consequatur quos nesciunt nulla neque dicta natus! Perferendis culpa iusto earum veniam debitis, labore at aut corporis! Vero ad numquam ea ducimus quas esse, maiores rerum nulla dignissimos fugiat! Quas earum molestiae, dolor ab nihil dicta officiis corrupti ullam facere corporis reiciendis atque perspiciatis aliquid sunt illo cum tempore nemo quae quaerat minima consequatur omnis ratione dolorum id! Iusto, eum. Provident quisquam blanditiis natus ea autem alias magnam sapiente obcaecati qui impedit!
            </p>
          </div>

          <div className='flex justify-start items-center gap-3 text-base'>
            <img src="/logo.jpg" alt="mylogo" className='rounded-full w-[40px] h-[40px]' />
            <div>
              <h4 className='font-bold'>Rohan</h4>
              <p className='font-bold'>05 june 2024</p>
            </div>
          </div>
        </div>


        {/* sidebar for blog */}
        <div className='my-10'>
          <h3 className='text-3xl font-semibold text-gray-600 ml-3'>More Blogs</h3>
          <div className='grid grid-cols-1 gap-3 md:h-[80vh] md:overflow-y-scroll md:px-3 md:pb-2 scroll-hide my-3'>
            <BlogCart />
            <BlogCart />
            <BlogCart />
            <BlogCart />
            <BlogCart />
          </div>

          {/* comment section */}
          <h3 className='text-3xl font-semibold text-gray-600 ml-3 mt-10'>Comments</h3>

          <div>
            <div className='flex justify-between items-start gap-3 my-5'>
              {userAuthenticated ? (<img src="/logo.jpg" alt="profile" className='w-[50px] rounded-full' />) : (<MdAccountCircle className='text-5xl text-gray-600' />)}

              <div>
                <textarea name="message" id="message" rows="2" className='md:w-[35vw] rounded-lg py-2 outline-none shadow-md text-base px-3'></textarea>
                <div className='flex gap-3 '>
                  <button className='text-white bg-purple-500 hover:bg-purple-400 px-5 py-1 text-base font-semibold transition-all duration-300 ease-linear rounded-md
                  w-fit'>Add</button>
                  <button>
                    {!userAuthenticated ? "Sign In With Google" : "Sign Out"}
                  </button>
                </div>
              </div>
            </div>


            <div>
              <div className='flex flex-col md:flex-row justify-start items-center md:gap-3 my-3 '>
                <img src="/logo.jpg" alt="" className='rounded-full hidden md:block w-[50px] text-gray-600' />
                <div className='bg-white w-full md:w-[35vw] rounded-lg py-2 text-sm md:text-base px-3 shadow-md'>
                  <div className='flex justify-between'>
                    <span className='text-xs md:text-sm font-semibold'>Rohan</span>
                    <div className='flex gap-1'>
                      <MdEdit className='text-gray-50 hover:text-purple-500 hover:scale-105 transition-all ease-in-out cursor-pointer' />
                      <MdDelete className='text-gray-50 hover:text-purple-500 hover:scale-105 transition-all ease-in-out cursor-pointer' />
                    </div>
                  </div>
                  <p className={'outline-none bg-gray-100 shadow-inner pl-1 rounded-md my-3 transition-all duration-500 ease-in-out'}>
                    Your video was just good.
                  </p>
                  <button className='bg-purple-500 hover:bg-purple-600 px-3 py-1 text-white text-sm rounded-lg'>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog