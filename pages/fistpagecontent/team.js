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
    src: 'elloh.png',
    name: "DR. Elloh ADJA",
    title: 'CEO',

  },
  {
    src: 'lauria.png',
    name: "Lauria Guenaman",
    title: 'Représentante',

},
{
  src: 'josias.png',
  name: "Josias Sehi",
  title: 'Dapps Developer',

},

{
  src: 'josias.png',
  name: "Nathan Digra",
  title: 'Sécurity Spécialiste',

},
{
  src: 'soul.jpeg',
  name: "Souleymane Ouattara",
  title: 'DEFI Developer',

},

];



export default function Team() {
  return (
    <>  
    <Box bg={useColorModeValue('gray.100', 'gray.700')} >
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>TEAM</Heading>
          <Text>Nous comptons parmi les start-ups les plus qualifiées de l'Afrique de l'Ouest dans le domaine de la blockchain.  </Text>
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

<Stack spacing={0} align={'center'} marginInline='2' borderRadius={"2xl"}>
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
