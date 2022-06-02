import styled from "styled-components";

export const mainContainer = styled.div`
transform: translate(0, 200px);
height: 100vh;
width: 91%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-47%, -39%);
`

export const title = styled.h2`
font-weight: bold;
text-align: left;
margin-left: 15px;
`

export const resultGrid = styled.div`
display: grid;
grid-template-columns: 60% 35%;
gap: 33px;


`

export const clientesHeader = styled.div`
text-decoration: none;
border-collapse: separate;
border-spacing: 17px;
text-align: center ;
height: 900px;
border-right: 1px solid rgba(0,0,0,0.1);

h3 {
    font-size: 23px;
    transform: translateY(20px);
    margin-bottom: 55px;
}

table {
    border-collapse: separate;
    border-spacing: 17px;
}

svg {
   transition: 1s;
   :hover {
      transform: scale(1.1);
      transform: rotate(360deg);
      transition: 0.7s;
   }
}

 th {
  border:1px solid rgba(0,0,0,0.3);
  background-color: black;
  padding: 7px 17px;
  color: white;
  border-radius: 14px;
 }
 td {
    border:1px solid rgba(0,0,0,0.1);
    background-color: rgba(0,0,0,0.2);
    padding: 10px 13px;
    border-radius: 14px;
 }
`

export const searchArea = styled.div`
display: flex;
flex-direction: row;

 input{
   transform: translate(490px,0px);
  padding: 1px 15px;
  height: 45px;
  width:430px;
  font-size: 13px;
  border: 1px solid rgb(200,200,200, 0.7);
  border-radius: 1px;
  outline: rgb(200,200,200, 1);
  border-radius: 5px;
}
button {
        transform: translate(475px,-0px);
        padding: 4px 21px;
        margin-left: -22px;
        height: 49px;
        align-items: center;
        text-align: center;
        border: 1px solid rgb(200,200,200, 0.7);
        cursor: pointer;
        svg{

            width:15px;
            height: 15px;
            color: gray;
        }
        img {
            height: 20px;
            width: 20px;
        }
    }
`

export const planData = styled.div`
width: 100%;
height: 100%;
text-align: center;
align-items: center;

h3 {
    font-size: 23px;
    transform: translateY(20px);
    margin-bottom: 60px;
}
h2 {
    font: 19px;
}
h4 {
    transform: translateY(11px);
    margin-bottom: 39px;
}

button {
    margin-top: 25px;
    border-radius: 17px;
    background-color: black;
    color: white;
    padding: 5px 11px;
    transition: 0.7s;
    border: none;

    :hover {
        background-color: white;
        color: black;
        transform: scale(1.1);
        transition: 0.7s;
        border: 1px solid black;
    }

}
`

export const planBeneficiary = styled.section`
text-align: center;
margin: 15px 0px;

p {
    margin-top: 35px;
}
`