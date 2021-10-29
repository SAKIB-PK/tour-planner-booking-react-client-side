import React from 'react'
import Service from '../Service/Service'

const Services = () => {
    return (
        <div className="bg-gray-100">
            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                </div>
            </section>
        </div>
    )
}

export default Services
