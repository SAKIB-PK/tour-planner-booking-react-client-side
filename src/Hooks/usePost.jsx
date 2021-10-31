import axios from "axios"
import { useEffect, useState } from "react"


const usePost = ()=>{
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://secure-waters-99049.herokuapp.com/services')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err=>{
            ///
        })
    },[])
    return {
        posts,
        setPosts
    }

}

export default usePost