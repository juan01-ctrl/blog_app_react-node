import React from 'react'
import Post from '../components/PostComponents/Post'
import { motion } from 'framer-motion';

export const PostPage = () => {
  return (
     <motion.div
     initial={{ x: 300, opacity: 0 }}
     animate={{ x: 0, opacity: 1 }}
     exit={{ x: -300, opacity: 0 }}
  
  >
      <Post/>
    </motion.div>
  )
}

