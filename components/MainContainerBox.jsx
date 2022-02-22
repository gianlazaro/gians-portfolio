import styled from 'styled-components'

function MainContainerBox({children}) {
   return (
      <Wrapper>
         <Box>
            {children}
         </Box>
      </Wrapper>
   )
}

let Wrapper = styled.div`
   background-color: white;
   border-radius: 15px;
   line-height: 1.75em;
   width: 100%;
   font-weight: 500;
   box-shadow: var(--shadow-elevation-low);
   `;

let Box = styled.div`
margin: 24px 0px;
padding: 8px 24px;
`;


export default MainContainerBox;