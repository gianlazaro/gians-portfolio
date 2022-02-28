import Header from "../components/Header"
import styled, {keyframes} from "styled-components"
import MainContainerBox from "../components/MainContainerBox"
import SideContainerBox from "../components/SideContainerBox"
import Footer from "../components/Footer"
function App() {

  return (
    <Wrapper>
      <Header/>
      <div className="navigation">

      </div>
      <div className="mainContent">
        <MainContainerBox>
          <h2>Hello! <span className="wave">👋🏼</span></h2>
          <p>I'm Gian.</p>
          <p>I am a front-end web developer looking for opportunities to learn and grow. I enjoy the small, but neccesary, details from <em>accessibility</em> to <em>performance metrics</em>. </p>
          <p>Let us connect! <a href="mailto:hello@gianlazaro.com">Send an e-mail.</a></p>
        </MainContainerBox>
        <MainContainerBox>
          <h2>Projects</h2>
        </MainContainerBox>

        <MainContainerBox>
          <h2>Writing</h2>
        </MainContainerBox>
      </div>
      <div className="rightPane">
        <SideContainerBox className="webtechologies">
          <h2>Web Technologies</h2>
          <ul className="pills_container">
            <li className="pill">HTML</li>
            <li className="pill">CSS</li>
            <li className="pill">Javascript</li>
            <li className="pill">ReactJS</li>
            <li className="pill">styled-components</li>
          </ul>
        </SideContainerBox>
      </div>
      <Footer/>
    </Wrapper>
  )
}

const wavingAnimation =   keyframes`
  0% { transform: rotate( 0.0deg) }
 10% { transform: rotate(14.0deg) }  
 20% { transform: rotate(-8.0deg) }
 30% { transform: rotate(14.0deg) }
 40% { transform: rotate(-4.0deg) }
 50% { transform: rotate(10.0deg) }
 60% { transform: rotate( 0.0deg) }  
100% { transform: rotate( 0.0deg) }
`;

let Wrapper = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  padding: 0px 16px; 
  display: grid;
  gap: 32px;
  grid-template: 'header header navigation' min-content
                       'main main rightPane' 1fr
                       'footer footer footer' 10%;
  grid-template-columns: 1fr 1fr 30%;

 @media (max-width: 650px) {
  grid-template: 'header header header' min-content
                       'main main main' 1fr
                       'footer footer footer' min-content;
    }

  & > .navigation {
    grid-area: navigation;
    @media (max-width: 650px) {
      display: none;
    }
  }

  & > .mainContent {
    grid-area: main;
  }

  & > .rightPane {
    grid-area: rightPane;

    @media (max-width: 650px) {
      display: none;
    }

  }

  & > .footer {
    grid-area: footer;
  }


  & .wave {
    animation: ${wavingAnimation} 2.5s;
    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
    display: inline-block;
    animation-delay: 1s;
  }

`



export default App
