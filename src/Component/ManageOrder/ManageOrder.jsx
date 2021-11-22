import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { FirebaseContext } from '../../Context/FirebaseAuth'
import Loading from '../Loading/Loading'

const ManageOrder = () => {
    const [order,setOrder] = useState([])
    const [loading,setLoading] = useState(true)
    const {user} = useContext(FirebaseContext)
    useEffect(() => {
        axios.get('https://secure-waters-99049.herokuapp.com/order-details')
        .then(res => {
            const filterPost = res?.data.filter(item => user.email === item.email)

            setOrder(filterPost)
        })
        .catch(err=>{
            ///
        }).finally(()=>setLoading(false))
    
    }, [user])

    const hundleCancel = (id)=>{
        swal('Are you sure?','Are you sure to Cancel this booking ?','error',{
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
                            text:'Order Cancel Successfully.',
                            icon:'success'
                        })
                        const filterPost = order.filter(item => item._id !== id)
                        setOrder(filterPost)
                    }
                }                       
            )}else{
                swal({
                    title:'Oopps!',
                    text:'Order Cancelled Failed!',
                    icon:'warning'
                }) 
            }
        })
        .catch(err=>{
            //
        })
    }
    // loading check component render 
    if(loading ){
        return <Loading/>
    }
    return (
        <>
            { order.length>0?
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
                            {order.map(item => (
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
                                                <span className='outline-none bg-green-500 text-white text-lg p-2 rounded' >
                                                  {item?.status}
                                                </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">
                                            <button className="bg-red-500 focus:outline-none font-bold p-2 rounded text-center text-white" onClick={()=>hundleCancel(item?._id)}>Cancel</button>
                                        </td>
                                </tr>
                                ))
                            }
                            
                        </tbody>
                        </table>
                    </div>
                    </div>
                </section>
                :
                <div className=' text-center my-12 '>
                    <h2 className="text-red-500 text-2xl pb-2">Item Not Found</h2>
                    <button className='bg-green-500 p-2 rounded'> <Link to='/services'>Go Order</Link> </button>
                </div>
            }
       </>
    )
}

export default ManageOrder
