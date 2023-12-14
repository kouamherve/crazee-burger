import React from 'react'

export default function Product({imageSource, title}) {
  return (
    <div className=" w-[240px] h-[330px] border border-gray-300 flex flex-col items-center">
          <div className="border-2 border-yellow-950 w-[200px] h-[145px] mx-5 mt-[50px] mb-[15px]">
            <img src={imageSource} alt={title} className=" object-contain object-center w-full h-full"/>
          </div>
          <div className="w-[200px] h-[110px] flex flex-col space-y-5">
            <div className='w-full h-[46px] border border-gray-900 text-[36px] text-dark leading-[45.4px] font-amatic font-bold'>{title}</div>
            <div className='border border-gray-900'>Description</div>
          </div>
        </div>
  )
}
