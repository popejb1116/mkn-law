import styled from 'styled-components'

export const ContentLayout = styled.div`
   grid-area: c;
   background: transparent;   
   
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
`

export const Card = styled.div`
   background-color: ${ props => props.theme.secondary };
   max-width: 900px;
   margin: 2rem 0rem; 
   border: solid 5px white;
   border-radius: 10px;
`

export const BlurUpContainer = styled.div`
   position: relative;
   margin: 0 auto;
   padding-bottom: 28.222%;
   
   img{
      max-width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      -webkit-transition: opacity 0.4s ease-in-out;
      -moz-transition: opacity 0.4s ease-in-out;
      -o-transition: opacity 0.4s ease-in-out;
      transition: opacity 0.4s ease-in-out;
   }
`
export const PlaceholderImg = styled.img`
   opacity: ${props => props.opacity};
`

export const CardContent = styled.div`
   padding: 1rem 2rem;
`

export const CardTitle = styled.div`
   color: whitesmoke;   
   margin: 2rem;
   font-size: 2rem;
   font-weight: bold;   
   text-align: center;
`

export const CardText = styled.p`
   color: whitesmoke;
   font-size: 1rem;
   display: inline;
`

export const InlineLink = styled.div`
   color: whitesmoke;
   font-size: 1rem;
   font-weight: bolder;
   display: inline;
   &:hover{
      cursor: pointer;
   }
`