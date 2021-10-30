import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
            <div class="flex justify-center items-center my-4">
                <div
                    class="
                    loader
                    ease-linear
                    rounded-full
                    border-8 border-t-8 border-gray-200
                    h-32
                    w-32
                    "
                ></div>
            </div>
    )
}

export default Loading
