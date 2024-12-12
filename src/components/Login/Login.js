import styled from 'styled-components';


const Login = (props) => {
    return (
        <Container>
        <Content>
            <CTA>
                <CTALogoOne src="images/cta-logo-one.svg" alt=""/> 
                <SignUp >  GET ALL THERE</SignUp >
                <Description> "Passionate about creating innovative solutions, I specialize in web development and design, focusing on user experience, responsive interfaces, and clean, efficient code for modern digital projects.</Description>
                <CTALogoTwo src="images/cta-logo-two.png"/>
            </CTA>

            <BgImage />
        </Content>
        </Container >   
    )
    

};
const Container = styled.section`
  overflow: hidden;
  display: flex;
  text-align: center;
  height : 100vh;
  flex-direction : columnn;

  
`;
const Content = styled.div`
    display : flex;
    justify-content : center;
    min-height : 100vh;
    align-items: center;
    height : 100%;
    width : 100%;
   box-sizing: border-box;
    margin-bottom : 10vw;
    padding : 80px 40px;
    position : relative;
`
const BgImage = styled.div`
    height : 100%;
    background-image : url("images/login-background.jpg");
    background-repeate : no-repeat;
    background-position : top;
    position : absolute;
    background-size : cover;
    top : 0;
    left: 0;
    right: 0;
    z-index : -1;
`
const SignUp = styled.a `
    font-weight : bold ;
    color : #f9f9f9;
    background-color : #0063e5;
    margin-bottom : 12px;
    width : 100%;
    letter-spacing : 1.5px;
    font-size : 18px;
    padding : 16.5px;
    border-radius : 4px;
    border : 1px solid transparent;
    max-width : 650px;
    min-height : 100%;
    &:hover{
    background-color : #0483ee;}

`
const CTA = styled.div`
    display : flex;
    flex-direction = column;
    flex-wrap : wrap ;
    justify-content : center;
    max-width : 650px;
    margin-bottom : 2vw;
    align-items : center;
    text-align : center;
    margin-top : 0;
    margin-right: auto ;
    margin-left : auto;
    transition-timing-function: ease-out;
    transition : opacity 0.2s;
    width : 100% ; 

`
const CTALogoOne = styled.img`
   
    margin-bottom : 12px;
    
    display : block;
    width : 100%;
    max-width : 650px;
    min-height : 1px; 
`   
const Description = styled.p`
    color : hsla(0, 0%, 95.3%,1)
    font-size : 11px;
    margin : 0 0 24px;
    line-height : 1.5;
    letting-space : 1.5px;

`
const CTALogoTwo = styled.img`
    max-width : 650px;
    width : 100%;
    margin-bottom : 20px;
    display-inline : block;
    vertical-align : bottom;

`
;
export default Login;