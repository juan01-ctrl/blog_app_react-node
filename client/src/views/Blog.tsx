import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios'
import BlogHeader from '../components/BlogHeader'
import PostListContainer from '../components/PostComponents/PostListContainer'
import { IPost } from '../Interfaces/Post'

export const Blog = () => {

  const { search } = useLocation()

  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const fetchPosts = async()=>{
      setIsLoading(true)
        try {
       const {data}= await axios.get(process.env.REACT_APP_BASE_URL +'/posts'+search);
       setPosts(data)
      
    } catch (err) {
      console.log(err)
    }finally{
    setIsLoading(false)

    }

    }
    fetchPosts()
  }, [search])
  

  return (
    <motion.div

    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
        <BlogHeader/>
        <PostListContainer posts={posts} isLoading={isLoading}/>
    </motion.div>
  )
}

