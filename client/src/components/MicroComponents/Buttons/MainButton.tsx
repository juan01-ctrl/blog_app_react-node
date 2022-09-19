import {FC} from 'react'
import { MainBtn } from './MainButtonElements'

type Props = {
    type?:"button" | "submit" | "reset" | undefined,
    text:string
    align?:string
    onClick?:()=>void
}

const MainButton:FC<Props> = ({type = "button",text,align="center",onClick}) => {


  return (
    <MainBtn onClick={onClick} type={type} >{text}</MainBtn>
  )
}

export default MainButton