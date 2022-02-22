import styled from "styled-components";

function Footer() {
   return (
      <Wrapper>
         <Content>
123
         </Content>
      </Wrapper>
   )
}

let Wrapper = styled.div`
   grid-area: footer;
   `;

let Content = styled.div`
   background-color: hsl(47deg 100% 68% /1 );
   border-radius: 15px 15px 0 0;
   height: 100%;
   box-shadow: var(--shadow-elevation-low);
`;

export default Footer;