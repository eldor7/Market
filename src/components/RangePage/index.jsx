import React from 'react'
import { Bedroom, Containerr, Dining, Diningimg, Downpage, List, Living, Paragrif, Roomcon, Roomimg, Securelycon, Securelyimg, Textcon, Warehousecon, Warehouseimg, Workcon } from './style'
import diningimg from '../../assest/img/dining.png'
import living from '../../assest/img/living.png'
import bedroom from '../../assest/img/bedroom.png'
import securelyimg from '../../assest/img/securely.png'
import warehouseimg from '../../assest/img/warehouse.png'
import roomimg from '../../assest/img/room.png'




const RangePage = () => {
  return (
      <Containerr>
        <Dining>
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Downpage>
          <Diningimg src={diningimg} />
          <Living src={living} />
          <Bedroom src={bedroom}/>
          </Downpage>
          <Paragrif>
            <p>Dining</p>
            <p>Living</p>
            <p>Bedroom</p>
          </Paragrif>
        </Dining>
         <Workcon>
          <h1>How It Works</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Textcon>
             <Securelycon>
                <Securelyimg src={securelyimg}/>
                <h1>Purchase Securely</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit.</p>
             </Securelycon>
             <Warehousecon>
              <Warehouseimg src={warehouseimg}/>
              <h1>Ships From Warehouse</h1>
              <p>Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit.</p>
             </Warehousecon>
             <Roomcon>
              <Roomimg src={roomimg}/>
              <h1>Style Your Room</h1>
              <p>Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit.</p>
             </Roomcon>
             </Textcon>
         </Workcon>
         <List>
          <h1>Join Our Mailing List</h1>
          <p>Sign up to receive inspiration, product updates, <br />
           and special offers from our team.</p>
          <input type="text" placeholder='example@gmail.com'/>
          <button>Submit</button>
         </List>

      </Containerr>

  )
}

export default RangePage