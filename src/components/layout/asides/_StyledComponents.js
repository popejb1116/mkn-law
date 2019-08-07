import React from 'react'
import styled from 'styled-components'

export const LinkCollection = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
`

export const ResponsiveLinkWrapper = styled.a`
   height: auto;
   max-width: 100%;
   margin: 0.5rem;
   padding: 0.5rem;
`

export const ResponsiveLinkImg = styled.img`
   height: auto;
   max-width: 100%;
   max-height: 8vh;   
   border-radius: 4px;
   
   /*RIGHT, DOWN*/
   box-shadow: 
   3px 3px 2px white,
   -3px 3px 2px white,
   3px -3px 2px white,
   -3px -3px 2px white
   ;
`

export const StaticLinkWrapper = styled.a`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 4.5vh;
   height: 4.5vh;

   img {
      width: inherit;
      height: inherit;
   }

   margin: 0.5rem;
`

export const CollectionPartition = styled.div`
   height: 90%;
   width: 2px;
   background: white;
`
