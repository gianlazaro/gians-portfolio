import styled from 'styled-components'
import imgUrl from '../assets/images/portrait_avif.avif'

function Header() {
   return (
      <Wrapper>
         <FlexWrapper>
            <Image src={imgUrl}/> 
            <TextWrapper>
               <h1>Gian Lazaro</h1>
               <h2>Frontend Web Developer</h2>
            </TextWrapper>
         </FlexWrapper>
      </Wrapper>
   )
}

let Wrapper = styled.div`
grid-area: header;
`;

let FlexWrapper = styled.div`
display: flex;
align-items: center;
padding: 30px 24px;
gap: 14px;
   `

let Image = styled.img`
   width: 75px;
   height: 75px;
   border-radius: 50%;
   `;

let TextWrapper =styled.div`
line-height: 5px;

& h1 {
   color: hsl(227deg 94% 50% / 1);
}
`;

export default Header;