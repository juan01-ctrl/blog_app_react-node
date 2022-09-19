import styled from 'styled-components'


export const Card = styled.div`
width:25em;
border-radius:12px;
display:flex;
flex-direction:column;
justify-content:flex-start;
box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.45);
cursor:pointer;
background-color:#fff;
min-width:15rem;
`
export const CardContent = styled.div`
padding:1.5em;
`
export const CardTitle = styled.h3`
color:#0c0d0c;
font-size:2em;
overflow-wrap:break-word;

`


export const CardImage = styled.img`
height:15em;
object-fit:cover;
border-radius:12px 12px 0 0;
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.45);
min-height:7rem;


`
export const CardInfo = styled.h5`
font-size:${({dark})=> dark ? '1em ': '.5em'};
color:${({dark})=> dark ? "#38403f" : "#b3b3b3"}
`
export const CardDescription = styled.p`
margin:.5em 0 0;
color:#0c0d0c;
overflow-wrap:break-word;

`

export const CardCategory = styled.span`
font-size:.8em;
color:#b3b3b3;
padding-left:.2em;
`