import React from 'react';

const OrderItem = ({item,hundleDelete}) => {
    const {_id,title,photo,district} = item
    return (
        <>
               {/* Items in cart */}
               <div className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm" >
                    <div className="flex flex-row items-center">
                    <img
                        className="w-10 h-10 mr-3 rounded-full"
                        src={photo}
                        alt={title}
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-800">{title}</p>
                        <p className="text-gray-400">{district}</p>
                    </div>
                    </div>
                    <h1 className="font-semibold text-red-400" onClick={()=>hundleDelete(_id)}>Remove</h1>
                </div>
                {/* Item Cart end */}

        </>
    )
}

export default OrderItem
