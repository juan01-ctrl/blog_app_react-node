import styled from 'styled-components'

export const PostContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
`

export const PostImage = styled.img`
width:100%;
max-height:60vh;
object-fit:cover;
border-radius:1em;
box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.45);
margin-bottom:2em;
`
export const PostTitle = styled.h1`
font-size:6em;
display:inline;
overflow-wrap:break-word;

`
export const SettingsPost = styled.div`
float:right;
margin-top:2em;
`
export const PostInfoContainer = styled.div``

export const PostInfo = styled.h5`
font-size:${({dark})=> dark ? '1em ': '.9em'};
color:${({dark})=> dark ? "#38403a" : "#b3b3b3"}
`
export const PostDescription = styled.p`
font-size:1.7em;
margin:.8em 0 1.4em;
overflow-wrap:break-word;

`
