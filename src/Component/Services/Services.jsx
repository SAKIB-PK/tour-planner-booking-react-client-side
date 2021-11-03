import React from 'react';
import usePost from '../../Hooks/usePost';
import Loading from '../Loading/Loading';
import Service from '../Service/Service';

const Services = ({item}) => {
    const {posts} = usePost() 
    if(posts.length===0){
        return <Loading/>
    }
    const shortPost = posts.slice(0,item)   
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
                    { item ?
                        shortPost.map(post => <Service key={post._id} item ={post}/>):
                        posts.map(post => <Service key={post._id} item ={post} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default Services
