import styled from 'styled-components'

export const TextFieldContainer = styled.div`
display:flex;
flex-direction:column;
padding: 0 0 1em 0;
position: relative;

`


export const LabelField = styled.label`
color:#000;
font-size:1em;
`

export const InputField = styled.input`
color: #000 ;
padding: .5em 0;
background-color: transparent;
border:none;
border-bottom: ${props=> props.invalid === "invalid" ?"1px solid hwb(0 11% 1%)" : "1px solid #000"};
outline: none;
font-size: 1em;

`

export const StyledErrorCircle = styled.div`
position: absolute;
top: .5em;
right:.2em;
`