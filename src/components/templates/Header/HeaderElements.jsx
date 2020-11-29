import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
  background: #00d8ff;
  height: 59px;
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin: 90px;
  cursor: pointer;

  &.active {
    color: black;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items:  right;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 155px;
  height : 50px;
  margin-top : 25px ;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Icon = styled.i`
  height : 10px;
`;

export const HT = styled.h1`
  padding: ;
  background-size: 50px;
  width : 5px;
  height : 5px;
  height:1rem;
  font-size: 2.75em;  
  
`

// export const Purpose = styled.div`
//   bacground-sizu: 5px;
//   background: #FFA500;
//   `


 
export const Inner = styled.div`
  display: flex;
  text-align:center;
   
`
export const Warp = styled.div`
   width: 100%;
   margin-top : 30px ;
  height: 300px;
  text-align: center;

`
export const Tagsli = styled.div`
  height: '150px',
  background: '#256ce1',
`