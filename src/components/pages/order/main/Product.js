import React from 'react'
import PrimaryButton from '../../../reusable-ui/PrimaryButton'

export default function Product({imageSource, title, price}) {
  return (
    <div className=" shadow-card bg-white w-[240px] h-[330px] flex flex-col items-center">
          <div className=" w-[200px] h-[145px] mx-5 mt-[50px] mb-[15px]">
            <img src={imageSource} alt={title} className=" object-contain object-center w-full h-full"/>
          </div>
          <div className="w-[200px] h-[110px] flex flex-col space-y-5">
            <div className='w-full h-[46px]  text-[36px] text-dark leading-[45.4px] font-amatic font-bold'>{title}</div>
            <div className=' flex items-center justify-between px-[5px] pb-[5px]'>
                <span>{price}</span>
                <PrimaryButton label={"Ajouter"} className={"text-[11px] leading-[12px] text-white w-[95px] h-[38px] font-bold bg-primary border border-primary rounded-[5px] active:bg-white active:text-primary"}/>
            </div>
          </div>
        </div>
  )
}
