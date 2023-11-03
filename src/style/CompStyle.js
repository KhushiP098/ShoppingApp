import styled from "styled-components";

export const Container2=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:50px;

`

export const Div=styled.div`

width:300px;
height:300px;

display:flex;
flex-direction:column;
// justify-content:center;
align-items:center;
box-shadow: 2px 2px 10px grey;
border-radius:10px;

`
export const Button=styled.button`

background-color:rgb(195, 186, 186);
font-family:sans-mono;
font-weight:bold;
font-size:16px;
padding:8px;
border-radius:8px;
margin:5px;
cursor:pointer;

&:hover{
  background-color:white;
  color:black;
}
`

export const Container=styled.div`
display:inline-block;
margin:20px;

`

export const Img=styled.img`
  width:150px;
  height:150px;
`

export const Box=styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 flex-wrap:wrap;
 margin-top:10px;
 padding:5px;

`
export const Box3=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:flex-end;
  width:80%;
`
export const Input=styled.div`
  margin:15px;
`
export const Label=styled.label`
font-weight:bold;
margin-bottom:5px;
font-family:sans-mono;
font-size:20px;
  
`
export const ButtonBox=styled.div`
display:flex;
width:50%;
justify-content:center;
margin-bottom:30px;
margin:10px;

`

export const Box2=styled.div`
display:flex;
justify-content:space-between;
width:200px;
padding:8px;

`

export const Para=styled.div`
   
   font-size:${(props)=>props.variant==="big"?"20px":"16px"};
   font-weight:bold;
   margin-bottom:5px;
   font-family:sans-mono;
   padding:6px;
   border-radius:5px;  
   background-color:${(props)=>props.color==="grey"?"rgb(195, 186, 186)":"white"};

`

export const Navbar=styled.div`
  width:100%;
  height:80px;
  background-color:rgb(2, 2, 36);
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  flex-wrap:wrap;
  font-size:18px;

  p{
   margin:5px;
   font-family:sans-mono;
   cursor:pointer;
   padding:6px;
   border-radius:8px;

   &:hover{
    background-color:white;
    color:rgb(2, 2, 36);
   }

  }

`



