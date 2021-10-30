import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Service from '../Service/Service'

const Services = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://secure-waters-99049.herokuapp.com/services')
        .then(res => {
            const shortPosts = res.data?.splice(0,6)
            setPosts(shortPosts)
        })
        .catch(err=>{
            ///
        })
    },[])
    return (
        <div className="bg-gray-100">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="w-full text-center pb-8">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
                    Find some Tourist Spot services
                </h1>
                <p className="text-gray-400 font-normal text-base">Bangladesh Best Tourist Spot booking Service.Find your special one.</p>
            </div>
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        posts.map(post => <Service key={post._id} item ={post} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default Services
