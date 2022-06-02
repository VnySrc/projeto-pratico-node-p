import styled from "styled-components"

export const mainContainer = styled.div`
width: 600px;
height: 75%;
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
padding: 15px;
overflow: auto;



::-webkit-scrollbar-thumb {
  background-color: blue;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid orange;  /* creates padding around scroll thumb */
}


input {
    border: none;
    width: 80%;
    background-color: none;
    color: black;
    margin-top: 20px;
    padding: 10px;
    border-radius: 16px;
    outline: none;
}

`
export const title = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 20px;
h3 {
    margin-left: 240px;
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

export const addBeneficiary = styled.section`
display: flex;
gap: 7px;

`

export const quantityInput = styled.input`
margin-bottom: 15px;
`

export const actionsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
;

i {
  margin: 15px 0px;
  padding: 3px;
  cursor: pointer;
  svg {
  width: 25;
  }
}

button {
    bottom: 20px;
    left: 255px;
    padding: 7px 20px;
    border-radius: 17px;
    background-color: white;
    transition: 0.9s;
    border: none;
    cursor: pointer;
    :hover {
        transition: 0.7s;
        color: white;
        background-color: black;
        border: 1px solid white;
    }
}

`