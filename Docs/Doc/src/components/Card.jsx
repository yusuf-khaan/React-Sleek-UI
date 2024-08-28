    import React from 'react';
    import { FaFileAlt } from 'react-icons/fa';
    import { FaDownload } from "react-icons/fa6";
    import { IoClose } from "react-icons/io5";
    import { motion } from "framer-motion";

    function Card({data, reference}) {

        return (
            <motion.div drag dragConstraints = {reference} whileDrag ={{scale : 1.2}} dragTransition={{ bounceStiffness: 200, bounceDamping: 5 }} className ='relative w-[300px] h-[300px] bg-slate-400/50 rounded-[40px] text-white font-bolder p-[15px] overflow-hidden'>
                <FaFileAlt />
                <p className ='font-bold tracking-wide text-sm mt-5'>{data.desc}</p>
                <div className ='absolute footer bottom-0 w-full left-0'>
                    <div className='flex items-center justify-between px-4 py-0 mb-5'>
                            <h1 className ='font-semibold'>{data.size}</h1>
                        <div className= 'h-7 w-7 rounded-full flex items-center justify-center bg-zinc-900'>
                            {data.close === true ? <IoClose /> : <FaDownload className = 'h-5 w-5'/> }
                        </div>
                    </div>
                    {data.tag.isOpen === true ? <div className ={`tag flex items-center justify-center ${data.tag.tagColor === "green" ? "bg-green-700/90" : "bg-gray-900/90"} p-4 w-full`}>
                        <h1 className='font-semibold'>{ data.tag.tagTitle }</h1>
                    </div> : null} 
                    
                </div>
            </motion.div>
        );
    }

    export default Card;
