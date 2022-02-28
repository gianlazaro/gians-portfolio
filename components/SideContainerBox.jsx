import styled from 'styled-components'

function SideContainerBox({children}) {
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
padding: 8px 24px 18px 24px;

// WEB TECHNOLOGIES PANEL
& .pills_container {
   margin-top: 25px; // margin collapse occurs
   padding: 0;
   list-style-type: none;
   font-size: 0.75rem;
   text-transform: uppercase;
   line-height: 1rem;
}

& .pill{
   display: inline-block;
   background-color: hsl(227deg 94% 0% / 1);;
   color: white;
   border-radius: 5px;
   padding: 1px 5px;
   margin: 0px 2px 2px 0px;
   vertical-align: baseline;
}
`;




export default SideContainerBox;