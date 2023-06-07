import React from 'react'
import { Table,  Tr,  Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Navbar from './Navbar'
import natash from '../Components/Assets/natasha.JPG'
import banking from '../Components/Assets/mobile_banking_app.jpg'
import food from '../Components/Assets/food.jpg'
import greens from '../Components/Assets/green.jpg'
import background from '../Components/Assets/Home-background.jpg'


const Home = () => {

  const style = {backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  width: '100%',
  height: '100vh'
 
};


 

  return (
   
    <div style={style}>
    <Navbar/>
    <Table className='center'>
      <Tr>
        <Td >
          <div className='rotate-bold'>
          <p>my process  </p>
          <p>client reviews </p>
          <p>download cv</p>

           </div>
        </Td>
      <Td>
        <div className="home-image-section">
          <img src={natash} alt='No Picture' className='image1' />
        </div>
        </Td>
        <Td >
        <div className='rotate'>
         <p><button className='blueline'></button></p>
         <p>missied advice my it no sister</p>
         </div>
        </Td>

        <Td>
    <div className="home-text-section">
          <h1 className="primary-heading">
            Why Me
          </h1>
          <p className="primary-text">
            Whether article spirits new her coverd hastily sitting her.<br/>
            Money witty books nor son add. Chicken age had evening <br></br>
            belive but proceed pretend mrs.
          </p>

          <p className="primary-text">
            At missed advice my it no sister. Miss told ham dull knew <br></br>
            see she spot mear can. Spirit her entire her called. Detract<br></br>
            yet delight written farther his general.
          </p>
          <button className='schedule'>
           schedule a call 
          </button>

          <h1 className="primary-heading">
            Latest Work
          </h1>

          <div>
            <img src={banking} alt='No picture' className='image'/>
            <img src={food} alt='No Picture' className='image'/>
            <img src={greens} alt='No Picture' className='image'/>

          </div>

          <div className='view'>
          view all
          </div>
          
        </div>
        </Td>
        
        </Tr>
        </Table>
    </div>
  );
}

export default Home