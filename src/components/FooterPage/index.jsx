import React from 'react'
import { Footercon, Footerh, Footerleft, Footerright, Maincon, Rightimg1, Rightimg2, Rightimg3, Rightimg4 } from './style'
import rightimg1 from '../../assest/img/IG-1.jpg'
import rightimg2 from '../../assest/img/IG-2.jpg'
import rightimg3 from '../../assest/img/IG-3.jpg'
import rightimg4 from '../../assest/img/image4.png'






const FooterPage = () => {
  return (

    <Maincon>
        <Footercon>
            <Footerleft>
                <h1>Beauty Care</h1>
                <p>Do eiusmod tempor incididunt ut labore et <br />
                 dolore magna aliqua. Ut enim ad minim veniam, <br />
                 quis nostrud exercitation ullamco laboris.</p>
                 <h2>Follow Us</h2>
            </Footerleft>
            <Footerright>
                    <h1>Instagram Shop</h1>
                <Footerh>
                  <Rightimg1 src={rightimg1} />
                  <Rightimg2 src={rightimg2} />
                  <Rightimg3 src={rightimg3} />
                  <Rightimg4 src={rightimg4} />
                  </Footerh>
            </Footerright>
        </Footercon>
    </Maincon>

  )
}

export default FooterPage