import styled from 'styled-components'

export const PostFormContainer = styled.div`
padding: 2em 0;
display:flex;
gap:2em;
flex-direction:column;
`



export const Form = styled.form`
display:flex;
gap:2em;
flex-direction:column;
align-items:center;

`

export const FormFieldsContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
gap:2em;
`


export const FormInputFile = styled.input`
font-size:2em;

`
export const FormInputText = styled.input`
font-size:3em;
opacity:${({opacity})=> opacity? ".7":"1"};
width:100%;
margin-bottom:.3em;
`

export const FormTextArea = styled.textarea`
resize:none;
height:8em;
font-size:1.8em;
margin:.5em 0;
opacity:${({opacity})=> opacity? ".7":"1"}

`


export const FormInputTextSmall = styled.input`
font-size:1.3em;
margin:0 .5em;
`
