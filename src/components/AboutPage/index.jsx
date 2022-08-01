import React from 'react'
import { Batleimg, Docconimg, Doctorcon, Ellipse, Lampimg, Leftimg, Maincontainer, Spacecon, Spaceconimg, Spaceleft, Spaceright } from './style'
import  leftimg from '../../assest/img/leftimg.png'
import batleimg from '../../assest/img/batleimg.png'
import lampimg from '../../assest/img/lampimg.png'
import spaceconimg from '../../assest/img/spaceconimg.png'







const AboutPage = () => {
  return (
                
        <Maincontainer>
            <Doctorcon>
                <h1>Inspiration Collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <Docconimg>
                <Leftimg src={leftimg}/>
                <Batleimg src={batleimg}/>
                <Lampimg src={lampimg}/>
                </Docconimg>
            </Doctorcon>
            <Spacecon>
                <Spaceleft>
                     <h1>Beautify Your Space</h1>   
                     <p>Do eiusmod tempor incididunt ut labore et <br />
                      dolore magna aliqua. Ut enim ad minim veniam, <br />
                       quis nostrud exercitation ullamco laboris.</p> 
                       <button>Learn More</button>              
                </Spaceleft>
                <Spaceright>
                    <Spaceconimg src={spaceconimg} />
                    <Ellipse></Ellipse>
                </Spaceright>
            </Spacecon>
        </Maincontainer>

  )
}

export default AboutPage