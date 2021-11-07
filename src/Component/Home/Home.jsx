import React from 'react'
import usePost from '../../Hooks/usePost'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Loading from '../Loading/Loading'
import Service from '../Service/Service'

const Home = () => {
    const {homePost} = usePost()
    return (
        <div>
            <Banner/>
            {/* Home Service section start */}
                <div className="bg-gray-100">
                    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="w-full text-center pb-8">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
                            Find some Tourist Spot services
                        </h1>
                        <p className="text-gray-400 font-normal text-base">Bangladesh Best Tourist Spot booking Service.Find your special one.</p>
                    </div>
                    
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {homePost.length>0?
                                homePost.map(post => <Service key={post._id} item ={post} />)
                                :
                                <Loading/>
                            }
                        </div>
                    </section>      
                </div>

            {/* Home Service section end */}
            <About/>
            <Contact/>
        </div>
    )
}

export default Home
