import React from 'react'
import Navbar from './Navbar'
import{Table, Tr, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Contact = () => {
  return (
    <div>
         <Navbar/>
         <Table  className='contact-table'>
          <Tr>
            <Td className='contact-table-row'>
            
            </Td>
          </Tr>
          <Tr>
            <Td>
              
            </Td>
          </Tr>

         </Table>
        
    </div>
  )
}

export default Contact