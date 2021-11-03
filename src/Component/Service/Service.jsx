import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStroge from '../../Hooks/useLocalStorage.js'

const Service = ({item}) => {
    const {_id,title,photo,description,district}= item
    const {setLCStorage} = useLocalStroge()
    // console.log({title,photo,description});
    const shortDescription = description.slice(0,200)
    return (
        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-90">
                <img className="object-center object-cover w-full h-full" src={photo} alt={title}/>
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p className="text-xl text-gray-700 font-bold">{title}</p>
                <p className="text-base text-gray-400 font-normal">{district}</p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">{shortDescription}...</p>
                <div className="flex flex-between">
                    <button className="bg-emerald-500 text-white bg-green-400 hover:bg-green-600 active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >
                        <Link to={`/place-order/${_id}`}>
                            Booking Spot
                        </Link>
                    </button>
                    <button className="bg-emerald-500 text-white bg-green-400 hover:bg-green-600 active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={()=>setLCStorage(_id)} >
                        Add Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Service
