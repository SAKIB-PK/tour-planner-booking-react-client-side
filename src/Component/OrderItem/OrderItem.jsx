import React from 'react'

const OrderItem = () => {
    return (
        <>
               {/* Items in cart */}
               <div className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm" >
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
                </div>
                {/* Item Cart end */}

        </>
    )
}

export default OrderItem
