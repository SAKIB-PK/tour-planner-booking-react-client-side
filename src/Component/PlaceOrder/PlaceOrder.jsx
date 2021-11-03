import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { FirebaseContext } from '../../Context/FirebaseAuth';
import usePost from '../../Hooks/usePost';
import OrderItem from '../OrderItem/OrderItem';

const PlaceOrder = () => {
    const {id} = useParams()
    const {posts}  = usePost()
    const filterPost = posts.filter(value => value._id === id)
    const {user} = useContext(FirebaseContext)
    // const hundleDelete = (point)=>{
    //     const procced =window.confirm('Are you Sure?')
    //     if(procced){
    //          axios.delete(`https://secure-waters-99049.herokuapp.com/services/${point}`)
    //          .then(res=>{
    //              if(res.data.deletedCount >0 ){
    //                  alert('data Deleted Successfully.')
    //              }
    //              ///
    //          })
    //          const remainingPost = posts.filter(postsItem => postsItem._id !== point)
    //          setPosts(remainingPost)
    //     }
    //  }
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
                            <div className="form">
                                <div className="md:space-y-2 mb-3">
                                    <label className="text-xl font-semibold text-gray-600 py-2">Cart Item<abbr className="hidden" title="required">*</abbr></label>
                                    {/* Order item start */}
                                     <OrderItem item={filterPost[0]}/>
                                    </div>
                                    {/* Bellow Form Section  */}
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xl">
                                        <div className="mb-3 space-y-2 w-full text-xl">
                                            <label className="font-semibold text-gray-600 py-2">Name <abbr title="required">*</abbr></label>
                                            <input placeholder="Company Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" defaultValue={user?.displayName} id="integration_shop_name"/>
                                            <p className="text-red text-xl hidden">Please fill out this field.</p>
                                        </div>
                                        <div className="mb-3 space-y-2 w-full text-xl">
                                            <label className="font-semibold text-gray-600 py-2"> E-Mail <abbr title="required">*</abbr></label>
                                            <input placeholder="Email ID" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name" defaultValue={user?.email}/>
                                            <p className="text-red text-xl hidden">Please fill out this field.</p>
                                        </div>
                                    </div>
                                    
                                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xl">
                                            <div className="w-full flex flex-col mb-3">
                                                <label className="font-semibold text-gray-600 py-2"> Address</label>
                                                <input placeholder="Address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" />
                                            </div>
                                            <div className="w-full flex flex-col mb-3">
                                                <label className="font-semibold text-gray-600 py-2"> Phone Number</label>
                                                <input placeholder="Number" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text"/>
                                            </div>
                                        </div>
                                            <p className="text-xl text-red-500 text-right my-3">Required fields are marked with an
                                                asterisk <abbr title="Required field">*</abbr></p>
                                            <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                                <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button>
                                                <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            {/* <div
                    className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm"
                >
                    <div className="flex flex-row items-center">
                    <img
                        className="w-10 h-10 mr-3 rounded-full"
                        src="https://randomuser.me/api/portraits/lego/7.jpg"
                        alt=""
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-800">Xu Lin Bashir</p>
                        <p className="text-gray-400">table.co</p>
                    </div>
                    </div>
                    <h1 className="font-semibold text-red-400">Remove</h1>
                </div> */}



        </>
    )
}

export default PlaceOrder
