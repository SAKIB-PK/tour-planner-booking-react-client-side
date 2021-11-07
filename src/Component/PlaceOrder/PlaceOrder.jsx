import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import swal from 'sweetalert';
import { FirebaseContext } from '../../Context/FirebaseAuth';
import usePost from '../../Hooks/usePost';
import OrderItem from '../OrderItem/OrderItem';

const PlaceOrder = () => {
    const {id} = useParams()
    const history = useHistory()
    const {posts}  = usePost()
    const filterPost = posts.filter(value => value._id === id)
    const {user} = useContext(FirebaseContext)
    const { register, handleSubmit,reset } = useForm();

    const onSubmit=(data) =>{
        data.booking = filterPost
        data.status = 'Pending'
        data.email = user.email
        axios.post('https://secure-waters-99049.herokuapp.com/order-details',data)
        .then(res => {
            if(res.data.insertedId){
                swal({
                    title:'Good Job',
                    text:'Your Order Submitted!',
                    icon:'success'
                }).then(res =>{
                    if(res){
                        history.push('/manage-order')
                    }
                })
                reset()
            }
        })
        .catch(err=>{
            //
        })
        
    }
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-200 bg-no-repeat bg-cover  "
            >
            <div className="absolute bg-gray-300 opacity-60 inset-0 z-0"></div>
            <div className=" w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10"> 
            {/* max-w-md - box center and short*/} 
            <div className="grid  gap-8 grid-cols-1">
                <div className="flex flex-col ">
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-semibold text-lg mr-auto">Shop Info</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                        </div>
                        <div className="mt-5">
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="md:space-y-2 mb-3">
                                        <label className="text-xl font-semibold text-gray-600 py-2">Cart Item<abbr className="hidden" title="required">*</abbr></label>
                                        {/* Order item start */
                                            filterPost.length >0 && <OrderItem item={filterPost[0]}/>
                                        }
                                     
                                    </div>
                                    {/* Bellow Form Section  */}
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xl">
                                        <div className="mb-3 space-y-2 w-full text-xl">
                                            <label className="font-semibold text-gray-600 py-2">Name <abbr title="required">*</abbr></label>
                                            <input placeholder="Company Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text"  defaultValue={user?.displayName}   {...register("name",{ required: true})}/>
                                            <p className="text-red text-xl hidden">Please fill out this field.</p>
                                        </div>
                                        <div className="mb-3 space-y-2 w-full text-xl">
                                            <label className="font-semibold text-gray-600 py-2"> E-Mail <abbr title="required">*</abbr></label>
                                            <input placeholder="Email ID" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" value={user?.email} readOnly/>
                                            <p className="text-red text-xl hidden">Please fill out this field.</p>
                                        </div>
                                    </div>
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xl">
                                        <div className="mb-3 space-y-2 w-full text-xl">
                                            <label className="font-semibold text-gray-600 py-2">Price <abbr title="required">*</abbr></label>
                                            <input placeholder="Package Price" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text"  defaultValue={filterPost[0]?.price}   {...register("price",{ required: true})}/>
                                            <p className="text-red text-xl hidden">Please fill out this field.</p>
                                        </div>
                                        <div className="mb-3 space-y-2 w-full text-xl">
                                            <label className="font-semibold text-gray-600 py-2"> Date <abbr title="required">*</abbr></label>
                                            <input placeholder="Date of Tour" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="date" {...register("date",{ required: true})}/>
                                            <p className="text-red text-xl hidden">Please fill out this field.</p>
                                        </div>
                                    </div>
                                    
                                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xl">
                                            <div className="w-full flex flex-col mb-3">
                                                <label className="font-semibold text-gray-600 py-2"> Address</label>
                                                <input placeholder="Address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"  {...register("address",{ required: true})} defaultValue={filterPost[0]?.district} type="text" />
                                            </div>
                                            <div className="w-full flex flex-col mb-3">
                                                <label className="font-semibold text-gray-600 py-2"> Phone Number</label>
                                                <input placeholder="Number" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"  {...register("number",{ required: true})} type="text"/>
                                            </div>
                                        </div>
                                            <p className="text-xl text-red-500 text-right my-3">Required fields are marked with an
                                                asterisk <abbr title="Required field">*</abbr></p>
                                            <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                                <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button>
                                                <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500" type='submit'>Place Order</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default PlaceOrder
