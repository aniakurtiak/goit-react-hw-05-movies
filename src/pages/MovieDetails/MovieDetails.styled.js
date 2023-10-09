import styled from "styled-components"

export const MovieWrapp = styled.div`
display: flex;
gap: 15px;
padding-bottom: 10px;
border-style: none none ridge none
`;

export const AboutWrap = styled.div`
display: flex;
flex-direction: column;
`;

export const GenresList = styled.ul`
display: flex;
flex-direction: row;
gap: 10px;
`;

export const AdditionalWrap = styled.div`
list-style: square;
`

export const AdditionalList = styled.ul`
padding-left: 10px;
padding-bottom: 10px;
list-style: square;
border-style: none none ridge none
`

export const Btn = styled.button`
background-color: white;
border: none;
cursor: pointer;
margin: 5px;
`