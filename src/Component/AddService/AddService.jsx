import axios from 'axios';
import React, { useState } from 'react';

const AddService = () => {
    const [name,setName]= useState('')
    const [img,setImg]= useState('')
    const [desc,setDesc]= useState('')
    const [district,setDistrict]= useState('')

    const hundleName =(e)=>{
        setName(e.target.value)
    }
    const hundleImg =(e)=>{
        setImg(e.target.value)
    }
    const hundleDesc =(e)=>{
        setDesc(e.target.value)
    }
    const hundleDistrict =(e)=>{
        setDistrict(e.target.value)
    }
    const hundlePost = ()=>{
        const data = {
            title:name,
            photo:img,
            district:district,
            description:desc
        }
        // database insert post call 
        axios.post('http://localhost:5000/services',data)
        .then(result =>{
            if(result.data.insertedId){
                setDistrict('')
                setImg('')
                setName('')
                setDesc('')
                alert('Data Inserted Succesfully! ')
            }
        })
    }
    return (
        <>
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
            <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" onBlur={hundleName}/>
                <input className="img-link bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Image Link" type="text" onBlur={hundleImg}/>
                <input className="district bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Place District Name" type="text" onBlur={hundleDistrict}/>
                <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Short Describe  about this post here" onBlur={hundleDesc} ></textarea>
                
                {/* <!-- icons --> */}
                <div className="icons flex text-gray-500 m-2">
                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                </div>
                {/* <!-- buttons --> */}
                <div className="buttons flex">
                <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" onClick={hundlePost}>Post</div>
             </div>
        </div>

        </>
    )
}

export default AddService
