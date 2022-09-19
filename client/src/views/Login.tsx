import { motion } from 'framer-motion';
import { FormLogin } from '../components/AuthComponents'
import AuthSection from '../components/AuthComponents/AuthSection'

export const Login = () => {
  return (
    <motion.div
    
    initial={{  opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{  opacity: 0 }}
      transition={{ duration: 1 }}
    
  >
    <AuthSection>
      <FormLogin/>
    </AuthSection>
    </motion.div>
  )
}

