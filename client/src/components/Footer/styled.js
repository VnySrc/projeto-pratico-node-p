import styled from "styled-components"

export const mainContainer = styled.div`
margin: auto;
text-align: center;
align-items: center;
margin-left: 110px;
position: fixed;
bottom: 10px;
z-index: 0;


button {
    background-color: black;
    color: white;
    padding:7px 11px;
    border: none;
    border-radius: 17px;
    cursor: pointer;
    transition: 0.5s;
    text-align: left;
    :hover {
        transform: scale(1.1);
       
        color: white;
        transition: 0.5s;
    }
}
`

export const buttonAdd = styled.button`
float: left;

`
export const buttonClear = styled.button`
margin-left: 410px;
`