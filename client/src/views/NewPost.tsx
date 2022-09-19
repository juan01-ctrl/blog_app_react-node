import { motion } from 'framer-motion';
import BackArrow from "../components/MicroComponents/BackArrow"
import PostForm from "../components/PostComponents/PostForm"

export const NewPost = () => {
  return (
    <motion.div
    
    initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    
  >
    <section className="section">
      <BackArrow/>
      <h1 style={{fontSize:"4em"}}>Create a new Post:</h1>
      <PostForm/>
    </section>
    </motion.div>
  )
}

