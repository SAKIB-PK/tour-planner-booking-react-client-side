import React from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover  "
            style={{backgroundImage:" url(https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80);"}}>
            <div className="absolute bg-gray-300 opacity-60 inset-0 z-0"></div>
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div className="grid  gap-8 grid-cols-1">
                <div className="flex flex-col ">
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-semibold text-lg mr-auto">Shop Info</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                        </div>
                        <div className="mt-5">
                            <div className="form">
                                <div className="md:space-y-2 mb-3">
                                    <label className="text-xs font-semibold text-gray-600 py-2">Company Logo<abbr className="hidden" title="required">*</abbr></label>
                                    <div className="flex items-center py-6">
                                        <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                                            <img className="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload"/>
                            </div>
                                            <label className="cursor-pointer ">
                            <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                            {/* <input type="file" className="hidden" :multiple="multiple" :accept="accept"/> */}
                            </label>
                                        </div>
                                    </div>
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2">Company  Name <abbr title="required">*</abbr></label>
                                            <input placeholder="Company Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name"/>
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                        </div>
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2">Company  Mail <abbr title="required">*</abbr></label>
                                            <input placeholder="Email ID" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name"/>
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                        </div>
                                    </div>
                                    <div className="mb-3 space-y-2 w-full text-xs">
                                        <label className=" font-semibold text-gray-600 py-2">Company  Website</label>
                                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <div className="flex">
                                                <span className="flex  leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center   rounded-lg text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </span>
                                            </div>
                                            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://"/>
                            </div>
                                        </div>
                                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                            <div className="w-full flex flex-col mb-3">
                                                <label className="font-semibold text-gray-600 py-2">Company Address</label>
                                                <input placeholder="Address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address"/>
                        </div>
                                                <div className="w-full flex flex-col mb-3">
                                                    <label className="font-semibold text-gray-600 py-2">Location<abbr title="required">*</abbr></label>
                                                    <select className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="integration[city_id]" id="integration_city_id">
                            <option value="">Seleted location</option>
                            <option value="">Cochin,KL</option>
                            <option value="">Mumbai,MH</option>
                            <option value="">Bangalore,KA</option>
                            </select>
                                                    <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                                </div>
                                            </div>
                                            <div className="flex-auto w-full mb-1 text-xs space-y-2">
                                                <label className="font-semibold text-gray-600 py-2">Description</label>
                                                <textarea required="" name="message" id="" className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block  bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter your comapny info" spellcheck="false"></textarea>
                                                <p className="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
                                            </div>
                                            <p className="text-xs text-red-500 text-right my-3">Required fields are marked with an
                                                asterisk <abbr title="Required field">*</abbr></p>
                                            <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                                <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button>
                                                <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Save</button>
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
