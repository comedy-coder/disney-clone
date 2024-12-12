import styled from "styled-components";

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney +"/>
             </Logo>   
             <NavMenu>
                <a href="/home">
                <img src="./images/home-icon.svg" alt="HOME"/> 
                
                </a> 
                <span> HOME </span>
             </NavMenu>
        </Nav>
    )
}
const Nav = styled.nav`
    display : flex;
    justify-content : space-beetween;
    align-items : center;
    position : fixed;
    top 0;
    right : 0;
    left :0;
    background-color : #090b13;
    height : 70px;
    padding : 0 36px;
    letting-spacing : 16 px;
    z-index: 3;

`
 const Logo = styled.a`
    padding = 0 ;
    width : 80px;
    margin-top : 4px;
    max-height : 70px;
    font-size : 0;
    display : inline-block ;
    &:hover {
    cursor : pointer ;
    }
    img{
    display : block;
    width : 100% ;
}

 `
 const NavMenu = styled.div`
 align-items : center;
 display : flex ;
 flex-flow : row nowrap;
 height : 100%;
 justìy-content : flex-end ;
 margin: 0 ;
 padding : 0 ;
 margin-right : auto ;
 margin-left : 20px;
 a{
    padding: 0 12px;
    display : flex;
    align-items : center;
    img {
    height : 20px;
    min-width : 20px;
    width : 20px;
    z-index : auto ;
  }
span{
        color : rgb(249,249,249);
        font-size : 13px;
    }
 }
 @media (max-width : 768px){
 display : none ;
 }
`
;

export default Header;