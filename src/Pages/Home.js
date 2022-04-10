import React from "react";

const Home = () => {
  return (
    <>
      <div className='h-[60vh] bg-orange-100 hero px-12'>
        <div className='hero-content p-0 flex-col lg:flex-row-reverse'>
          <div className='h-[60vh]'>
            <img
              src='https://thekingworld.com/cleanhub/wp-content/uploads/2022/02/hero-image.png'
              className='h-full'
              alt=''
            />
          </div>
          <div>
            <p className='ml-1 text-xl'>Best Quality</p>
            <h1 className='text-5xl font-bold'>
              Professional Cleaning Service
            </h1>
            <p className='py-6 max-w-xl'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
      <div className='rounded-md shadow-lg mx-auto py-10 px-12 w-5/6 mt-[-50px] bg-white z-10'>
        <h1 className='mb-5 text-2xl'>Get Free Estimate</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='input input-bordered w-full'
          ></input>
          <input
            type='text'
            placeholder='Phone Number'
            className='input input-bordered w-full'
          ></input>
          <input
            type='text'
            placeholder='Email'
            className='input input-bordered w-full'
          ></input>
          <select class='select select-bordered w-full max-w-xs'>
            <option disabled selected>
              Type of cleaning
            </option>
            <option>Standard cleaning</option>
            <option>Deep cleaning</option>
            <option>Move in/Move out cleaning</option>
          </select>
          <input
            type='text'
            placeholder='Number of bedrooms'
            className='input input-bordered w-full'
          ></input>
          <input
            type='text'
            placeholder='Number of bathrooms'
            className='input input-bordered w-full '
          ></input>
          <input
            type='text'
            placeholder='Square Foot'
            className='input input-bordered w-full'
          ></input>
          <select class='select select-bordered w-full max-w-xs'>
            <option disabled selected>
              Frequency of cleaning
            </option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Home;
