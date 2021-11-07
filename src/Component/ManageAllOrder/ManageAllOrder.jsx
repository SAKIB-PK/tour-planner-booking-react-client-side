import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Loading from '../Loading/Loading'
import TableRow from './TableRow'

const ManageAllOrder = () => {
    const [orders,setOrders]=useState([])
    const [loading,setLoading] =useState(true)
    
    useEffect(()=>{
        axios.get('https://secure-waters-99049.herokuapp.com/order-details')
        .then(res => {
            setOrders(res.data)
        })
        .catch(err=>{
            ///
        }).finally(()=>setLoading(false))
    },[])
    const hundleDelete =(id)=>{
        swal('Are you sure?','Are you sure to delete this booking ?','error',{
            dangerMode: true,
            buttons: true,
            })
        .then(res =>{
            if(res){
                axios.delete(`https://secure-waters-99049.herokuapp.com/order-details/${id}`)
                .then(res => {
                    if(res.data.deletedCount){
                        swal({
                            title:'Good Job!',
                            text:'Order Deleted Successfully.',
                            icon:'success'
                        })
                        const filterPost = orders.filter(item => item._id !== id)
                        setOrders(filterPost)
                    }
                }                       
            )}else{
                swal({
                    title:'Oopps!',
                    text:'Order Deleted Failed!',
                    icon:'warning'
                }) 
            }
        })
        .catch(err=>{
            //
        })
    }
    
    // loading is working or not
    if(loading){
        return <Loading/>
    }
    return (
       <>
            { orders.length>0?
                <section className="container mx-auto p-6 font-mono">
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Item</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {orders.map(item => (
                                    <TableRow item ={item} key={item?._id} hundleDelete={hundleDelete}/>
                                ))
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </section>
                :
                <div className=' text-center '>
                    <h2 className="text-red-500 text-2xl">Item Not Found</h2>
                    <button className='bg-green-500 p-2 rounded'> <Link to='/services'>Go Order</Link> </button>
                </div>
            }
       </>
        
    )
}

export default ManageAllOrder
