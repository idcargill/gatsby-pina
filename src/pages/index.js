import * as React from "react"
import Box from "../Components/BoxComponent/Box";
import NavLink from "../Components/NavLink/NavLink";
import '../styles/main.css';


import { mockParagraphs } from '../Components/fakeData';

const IndexPage = () => {
  return (
    <main className='main-content'>
      <h1>Pina Land</h1>
      <NavLink href='/about' text="About"/>
      <NavLink href='/toshiPage' text="Toshi's Page"/>

    <div style={{ display: 'flex', marginTop: '20px', justifyContent:'center' }}>
      <Box title="Story Time">
        {mockParagraphs.paragraph}
      </Box>
      <Box title="Kittens!!!">
        {mockParagraphs.short}
      </Box>
      <Box title="POOP!">
        {mockParagraphs.long}
      </Box>

    </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Pina This</title>
