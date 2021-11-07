import axios from "axios"
import { useEffect, useState } from "react"


const usePost = ()=>{
    const [posts,setPosts] = useState([])
    const [homePost,setHomePost] = useState([])
    
    useEffect(()=>{
        axios.get('https://secure-waters-99049.herokuapp.com/home/services')
        .then(res => {
            setHomePost(res.data)
        })
        .catch(err=>{
            ///
        })
    },[])
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
        homePost,
        setPosts
    }

}

export default usePost