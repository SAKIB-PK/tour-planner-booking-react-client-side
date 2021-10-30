import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="bg-gray-200 p-6">
            <div className="bg-white flex flex-col font-sans">
                <div className="container mx-auto px-8">
                    <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
                        <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                            <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">Feel Like a</h2>
                            <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">Bird</h1>
                            <p className="text-gray-600 leading-relaxed mb-12">
                                People have to travel for work, to move location, to study or attend family. People like to travel for many kinds of pleasure. They like to see beautiful places, explore cultures and cuisines. Some like to try activities in different locations or visit family and friends.</p>
                            <Link to='/services' className="bg-green-300 hover:bg-red-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Explore Place</Link>
                        </div>
                        <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
                            <img src="img/tour_banner.png" alt="banner hero " />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Banner
