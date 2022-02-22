import styled from "styled-components";
import imgUrlAvif from "../assets/images/portrait.avif";
import imgUrlWebp from "../assets/images/portrait.webp";

function Header() {
  return (
    <Wrapper>
      <FlexWrapper>
          <picture>
             <source srcSet={imgUrlAvif} type="image/avif"/>
             <source srcSet={imgUrlWebp} type="image/webp"/>
            <Image src={imgUrlWebp} />
          </picture>
        <TextWrapper>
          <h1>Gian Lazaro</h1>
          <h2>Frontend Web Developer</h2>
        </TextWrapper>
      </FlexWrapper>
    </Wrapper>
  );
}

let Wrapper = styled.div`
  grid-area: header;
`;

let FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 24px;
  gap: 14px;
`;

let Image = styled.img`
  display: block;
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

let TextWrapper = styled.div`
  & h1 {
    color: hsl(227deg 94% 50% / 1);
    margin: 0;
  }

  & h2 {
     margin: 0;
  }
`;

export default Header;
