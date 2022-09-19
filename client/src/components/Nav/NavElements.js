import styled from 'styled-components'

export const NavContainer = styled.div`
width: 100%;
display:flex;
padding:1em;
align-items: center;
justify-content: space-between;
box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.45);
position:fixed;
top:0;
background:#00000080;
z-index:999;
backdrop-filter:blur(20px) saturate(200%);

@media screen and (min-width: 640px){
padding:1em 3em;
  
}
`


export const Navbar = styled.nav`
width:100%;
display: flex;
align-items: center;
justify-content:space-between;
`


export const NavLinkContainer = styled.div`

`


export const NavLink = styled.span`
font-size:1.3em;
color: #fff;
transition: color .3s ease;
padding:0 1em;

&:hover{
color:#a0a0a0;
}

}
`