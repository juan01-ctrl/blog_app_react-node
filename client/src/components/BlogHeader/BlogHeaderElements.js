import styled from "styled-components"

export const Header = styled.header`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(274deg, rgba(0,0,0,0.6763480392156863) 0%, rgba(131,120,120,0.2679446778711485) 100%),url("/home-hero.jpg");
background-repeat:no-repeat;
background-size:cover;
background-attachment: fixed;
`

export const HeaderTitle = styled.h1`
font-size:15em;
color:#edebe4;
text-align:center;

`

export const HeaderSubtitle = styled.h2`
font-size:4.5em;
text-align:center;
color:#edebe4;
`