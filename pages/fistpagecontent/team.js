
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,Center,
  useColorModeValue,src,title
} from '@chakra-ui/react';
import React from 'react';

function Testimonial (children ) {
  return ( <Box>{children}</Box> );
}


const Avatars = [

  {
      src: 'josias.png',
      name: "Josias Sehi",
      title: 'Developpeur Blockchain',

  },
  {
    src: 'josias.png',
    name: "Souleymane Ouattara",
    title: 'Developpeur Blockchain',

},
{
  src: 'josias.png',
  name: "Nathan Digra",
  title: 'Developpeur Blockchain',

},
{
  src: 'josias.png',
  name: "Nadia Zebato",
  title: 'Developpeur Blockchain',

},
{
  src: 'josias.png',
  name: "Lauria Guenaman",
  title: 'Developpeur Blockchain',

},

];



export default function Team() {
  return (
    <>  
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>TEAM</Heading>
          <Text>Nous avons la meilleur équipe qualifié de toute l'Afrique de l'Ouest dans le domaine de la blockchcain.  </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
        
          
        </Stack>
      </Container>
    </Box>
    <Center> 
    {Avatars.map((avat, index) => (
      <Box
      key={index}
>    
<Avatar src={avat.src} alt={avat.name} size={'2xl'} marginTop={'-10'} marginInline='2'/>

<Stack spacing={0} align={'center'} marginInline='2'>
<Text fontWeight={600}>{avat.name}</Text>
<Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
 {avat.title}
</Text>
</Stack>

     
 </Box>
  ))} 
  </Center>
  </>
  );
}
