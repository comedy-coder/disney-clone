 import styled from "styled-components";
 import {auth , provider } from "../../firebase";
const Header = (props) => {
  const handleAuth = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        // In ra kết quả đăng nhập
        console.log(result);
  
        // Lấy thông tin người dùng sau khi đăng nhập
        const user = result.user;
        console.log("User UID: ", user.uid);
        console.log("User Name: ", user.displayName);
        console.log("User Email: ", user.email);
        console.log("User Photo URL: ", user.photoURL);
      })
      .catch((error) => {
        // Hiển thị thông báo lỗi
        alert(error.message);
        console.error("Error signing in: ", error);
      });
  };
  

       
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney +"/>
             </Logo>   
             <NavMenu>
                <a href="/home">
                <img src="./images/home-icon.svg" alt="HOME"/> 
                <span> HOME </span>
                </a> 
                <a href="/home">
                <img src="./images/search-icon.svg" alt="HOME"/> 
                <span> SEARCH </span>
                </a> 
                <a href="/home">
                <img src="./images/watchlist-icon.svg" alt="HOME"/> 
                <span> WATCHLIST </span>
                </a> 
                <a href="/home">
                <img src="./images/original-icon.svg" alt="HOME"/> 
                <span> ORIGINAL </span>
                </a> 
                <a href="/home">
                <img src="./images/movie-icon.svg" alt="HOME"/> 
                <span> MOVIE </span>
                </a> 
               
               
             </NavMenu>
             <Login onClick = {handleAuth}>Login</Login>
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
    
    img{
    display : block;
    width : 100% ;
    }
`
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end; 
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 20px;
  
  a {
    padding: 0 12px;
    display: flex;
    align-items: center;
    
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      margin-right : 5px;
    }
    
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        width: 100%; 
      }
      
      &:hover {
        &::before {
          transform: scaleX(1); /* Fixed typo here */
          opacity: 1;
        }
      }
    }
  }
`;
    const Login = styled.a`
    background-color : rgba(0,0,0,0.6);
    padding : 8px 16px;
    text-transform : uppercase;
    border: 1px solid #f9f9f9;
    letter-spacing: 1.5px;
    border-radius : 4px;
    transition : all 0.2s ease 0s;
    &:hover{
    background-color: #f9f9f9;
    color : #000;
    border-color : transparent;

    }
    `
;

export default Header;