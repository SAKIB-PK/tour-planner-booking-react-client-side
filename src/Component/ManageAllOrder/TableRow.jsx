import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'

const TableRow = ({item,hundleDelete}) => {
    const [option ,setOption ] = useState(item?.status)


    //hundle option select group 
    const hundleOption =(e)=>{
        setOption(e.target.value)
    }
    // hundle Update function api 
    const hundleUpdate =(id)=>{
            const newItem = {...item,status:option}
            axios.put(`https://secure-waters-99049.herokuapp.com/order-details/${id}`,newItem)
            .then(res => {
                if(res.data.matchedCount){
                    //swal alert 
                    swal({
                        title:'Good Job!',
                        text :"Order Updated Successfully!",
                        icon:'success'
                    })

                }
            })
    }
    return (
        <tr className="text-gray-700" key={item?._id}>
            <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img className="object-cover w-full h-full rounded-full" src={item?.booking[0]?.photo} alt={item?.booking[0]?.title} loading="lazy" />
                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                    <p className="font-semibold text-black">{item?.booking[0]?.title}</p>
                    <p className="text-xs text-gray-600">{item?.booking[0]?.district}</p>
                </div>
                </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">{item?.name}</td>
            <td className="px-4 py-3 text-ms font-semibold border">{item?.email}</td>
            <td className="px-4 py-3 text-sm border">{item?.price}</td>
            <td className="px-4 py-3 text-sm border">{item?.date}</td>
            <td className="px-4 py-3 text-xs border">
                    <select className='outline-none bg-green-500 text-white text-lg p-2 rounded' value={option} onChange={(e)=> hundleOption(e)} >
                        <option value='pending'>Pending</option>
                        <option value='cancel'>Cancel</option>
                        <option value='approved'>Approved</option>
                    </select>
            </td>
            <td className="px-4 py-3 text-sm border">
                <button className="bg-red-500 focus:outline-none font-bold p-2 rounded text-center text-white" onClick={()=>hundleDelete(item?._id)}>Delete</button>
                <button className="bg-green-500 focus:outline-none font-bold p-2 rounded text-center text-white ml-2" onClick={()=>hundleUpdate(item?._id)}>Update</button>
            </td>
        </tr>
    )
}

export default TableRow
