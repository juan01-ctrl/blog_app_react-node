import { FC } from 'react';
import { AuthWrapper } from './AuthSection';

type Props = {
    children:React.ReactElement
}

const AuthSection:FC<Props> = ({children}) => {
  return (
    <section className='section' style={{background:"#0f0f0f",padding:"0"}}>
    <AuthWrapper>
        {children}
    </AuthWrapper>
    </section>
  )
}

export default AuthSection