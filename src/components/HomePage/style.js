import styled from "styled-components";
import Rectangle from '../../assest/img/Rectangle.png'

export const Container = styled.div`
`

export const Navbar = styled.div`
height: 122px;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Navleft = styled.div`
flex: 1;
`

export const Logo = styled.img`
margin-left: 120px;

`

export const Navright = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 120px;
flex: 1;
p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #333333;
    cursor: pointer;
}
`

export const Homecon = styled.div`
background-image: url(${Rectangle});
height: 749px;
display: flex;
background-size: cover;
background-position: center;
`

export const Homeleft = styled.div`
flex: 1;
`

export const Homeright = styled.div`
border-radius: 5px;
width: 543px;
height: 400px;
background: #DFE9F4;
margin-top: 150px;
padding: 40px;
margin-right: 80px;
h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 3px;
    color: #333333;
}
h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 65px;
    color: #054C73;
}
p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 39px;
    color: #333333;
}
button{
    width: 229px;
    height: 70px;
    background: #054C73;
    border-radius: 50px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
}
`


export const Servicecon = styled.div`
height: 150px;
background: #F2F5FF;
display: flex;
align-items: center;
justify-content: space-between;
h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
}
p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
}

` 

export const Delivery = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 60px;
`

export const Deliveryimg = styled.img`
width: 75px;
`

export const Con1 = styled.div`
margin-left: 30px;
`


export const Support = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Supportimg = styled.img`
width: 60px;
`

export const Con = styled.div`
margin-left: 30px;
`

export const Authentic = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 60px;

`

export const Authenticimg = styled.img`
`

export const Con2 = styled.div`
margin-left: 30px;

`