// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import {Image, Flex, Box, Link, Button,ListItem, UnorderedList } from '@chakra-ui/react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)
  const [activeNav, setActiveNav] = useState(1);
  const handleNavClick = (index) => {
    setActiveNav(index)
  }

  return (
    <>
      <Flex as="nav" align='center' marginTop='39px' className='justify-between py-2 px-7 mx-auto max-w-5xl max-h-[80px] md:w-[80%] bg-[#0d529c1a] shadow-sm overflow-hidden rounded-full '>
        <Box className='flex align-center justify-center'>
          <Image width={128} src="../wrap-icon.png"></Image>
        </Box>
        {/* Nav links */}
        <UnorderedList marginLeft='0' className='flex justify-center align-center nav-list text-md display-flex align-center space-x-8 md:space-x-4 md:text-sm'>
          {[
            {id:1, name: 'Home'},
            {id:2, name: 'About Us'},
            {id:3, name: 'Contact Us'},
            {id:4, name: 'Pricing'}
          ].map((item)=> (
            <ListItem key={item.id} cursor={'pointer'} onClick={()=> handleNavClick(item.id)} fontWeight={activeNav === item.id ? 'bold' : 'normal'} color={activeNav === item.id ?  '#0A3C70' :'black'} position='relative' className='flex column'>
              <Link position={'relative'}>{item.name}</Link>
              {activeNav === item.id && (
                <div className='absolute rounded-full bottom-0 left-1/2 w-5 h-2 transform -translate-x-1/2 top-6 bg-gradient-to-b from-blue-800 to-teal-300'></div>
              )}
            </ListItem>
          ))}
        </UnorderedList>
        <Button className='gradient-btn'>Get the APP</Button>
      </Flex>
    </>
    
  )
}
// bg-gradient-to-r from-[#0E5095CC] to-[#1786F9CC]

export default App

