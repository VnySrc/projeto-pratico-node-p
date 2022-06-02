import styled from "styled-components"

export const mainContainer = styled.div`
width: 400px;
height: 35%;
background-color: black;
box-shadow: 7px 7px 16px black;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  color: white;
align-items: center;
text-align: center;
gap: 10px;
border-radius: 10px;
z-index: 999;

button {
    background-color: white;
        color: black;
    padding:7px 11px;
    border: none;
    border-radius: 17px;
    cursor: pointer;
    transition: 0.5s;
    :hover {
        transform: scale(1.1);

        transition: 0.5s;
    }
}
`
export const title = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 20px;
h3 {
    margin-left: 150px;
}
span {
 cursor  :pointer ;
 transition: 0.3s;
 :hover {
    transform: scale(1.1);
    transition: 0.3s;
 }
}
`