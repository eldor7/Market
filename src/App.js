import React from 'react'
import AboutPage from './components/AboutPage'
import FooterPage from './components/FooterPage'
import HomePage from './components/HomePage'
import RangePage from './components/RangePage'

const App = () => {
  return (
    <div>
      <HomePage/>
      <AboutPage/>
      <RangePage/>
      <FooterPage/>
    </div>
  )
}

export default App