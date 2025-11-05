"use client"
import { useState } from "react";
import Image from "next/image";
import FullScreenButton from "@/components/FullScreenButton";
const projects = ["Residential", "Schools & colleges", "Churches"]

const data = [
    {
        id:"1",
        title:"Project Management",
        project:"Residential",
        imgUrl:"v1761721632/residential_1_laa9cg",
    },
        {
        id:"2",
        title:"Building Construction",
        project:"Residential",
        imgUrl:"v1761721644/residential_2_xieq1q",
    },
        {
        id:"3",
        title:"Interiors",
        project:"Residential",
        imgUrl:"v1761721622/residential_3_p9iv27",
    },
        {
        id:"4",
        title:"Renovation",
        project:"Residential",
        imgUrl:"v1761721621/residential_4_a9yeop",
    },
        {
        id:"5",
        title:"Built-in Furniture",
        project:"Residential",
        imgUrl:"v1761721620/residential_5_ehakmf",
    },
            {
        id:"6",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"v1761721622/Schools_1_itcmvt",
    },
                {
        id:"7",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"v1761721625/Schools_2_vp4t0h",
    },
                {
        id:"8",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"v1761721622/Schools_3_ysq2b4",
    },
                {
        id:"9",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"v1761721622/Schools_4_hqh4u6",
    },
                {
        id:"10",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"v1761721745/Schools_5_wzl1iu",
    },
                    {
        id:"11",
        title:"Built-in Furniture",
        project:"Churches",
        imgUrl:"v1761721619/church_5_rwotgu",
    },
                        {
        id:"12",
        title:"Built-in Furniture",
        project:"Churches",
        imgUrl:"v1761721609/church_2_ktyhgs",
    },
                        {
        id:"3",
        title:"Built-in Furniture",
        project:"Churches",
        imgUrl:"v1761721617/church_3_ovbsti",
    },                    {
        id:"14",
        title:"Built-in Furniture",
        project:"Churches",
        imgUrl:"v1761721619/church_4_sw9qga",
    },
                        {
        id:"15",
        title:"Built-in Furniture",
        project:"Churches",
        imgUrl:"v1761721606/church_1_vy7exp",
    }
]

export default function Gallery() {

    const [selected, setSelected] = useState('Residential');

  return (
    <>
<div className="max-w-4xl mx-auto">
  <div className="relative right-0">
    <ul className="relative flex flex-wrap gap-4 px-1.5 py-1.5 list-none rounded-md bg-neutral-100" data-tabs="tabs" role="list">
      {projects.map((item, index) => (

      <li key={index} className={`z-30 flex-auto text-center rounded transition ${selected === item? 'bg-primary text-neutral-100': 'bg-secondary-100 text-neutral-800'} `}>
        <button className="z-30 flex items-center justify-center w-full shadow-md px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer bg-inherit"
        onClick={(e) => setSelected(item)}
        data-tab-target="" role="tab" aria-selected="true" aria-controls="dashboard">
          {item}
        </button>
      </li>

      ))}
    </ul>
  </div>
</div>
    
                    <div className="flex flex-row gap-2 md:gap-4 flex-wrap justify-evenly max-w-7xl mx-auto mt-8">
                        {data && data.filter((i, index) => i.project === selected).map((item, i) => (
                        <FullScreenButton className={'basis-1/2 md:basis-1/6'} key={i} src={item.imgUrl} alt={item.title} >
                          <Image className="max-w-80 h-80 object-cover border border-secondary"  width={400} height={300} 
                          src={`https://res.cloudinary.com/dylffjde8/image/upload/c_fill,w_360,h_360/${item.imgUrl}.avif`} alt={item.title}/>
                        </FullScreenButton>
                        ))}
                
              
          </div>
    </>
  );
}
