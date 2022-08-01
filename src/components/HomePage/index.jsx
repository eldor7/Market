import React from 'react'
import { Authentic, Authenticimg, Con, Con1, Con2, Container, Delivery, Deliveryimg, Homecon, Homeleft, Homeright, Logo, Navbar, Navleft, Navright, Servicecon, Support, Supportimg } from './style'
import logo from '../../assest/img/logo.png'
import deliveryimg from '../../assest/img/delivery.png'
import supportimg from '../../assest/img/support.png'
import authenticimg from '../../assest/img/authentic.png'






const HomePage = () => {
  return (
       
    <Container>
      <Navbar>
        <Navleft>
          <Logo src={logo}/>
        </Navleft>
        <Navright>
          <p>Home</p>
          <p>Service</p>
          <p>Doctors</p>
          <p>Products</p>
          <p>Gallery</p>
        </Navright>
      </Navbar>
       <Homecon>
           <Homeleft></Homeleft>
           <Homeright>
                <h4>New Arrival</h4>
                <h1>Discover Our <br />
                 New Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
                 elit tellus, luctus nec ullamcorper mattis.</p>
                <button>BUY NOW</button>
           </Homeright>
       </Homecon>
       <Servicecon>
        <Delivery>
          <Deliveryimg src={deliveryimg} />
          <Con1>
          <h1>Free Delivery</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          </Con1>
        </Delivery>
        <Support>
          <Supportimg src={supportimg} />
          <Con>
          <h1>Support 24/7</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          </Con>
        </Support>
        <Authentic>
          <Authenticimg src={authenticimg} />
          <Con2>
          <h1>100% Authentic</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          </Con2>
        </Authentic>
       </Servicecon>
    </Container>


  )
}

export default HomePage