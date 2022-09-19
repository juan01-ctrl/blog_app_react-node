import { motion } from 'framer-motion';
import AuthSection from '../components/AuthComponents/AuthSection'
import {FormRegister} from '../components/AuthComponents/'

export const Register = () => {
  return (
    <motion.div
    
    initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{  opacity: 0 }}
      transition={{ duration: 1 }}
    
  >
    <AuthSection>
        <FormRegister/>
    </AuthSection>
    </motion.div>
  )
}

