import React from 'react'
import {
    Center, Image, Box ,Container
} from '@chakra-ui/react'

export default function Partenaire() {
    return (
        <>   
         <Container maxW={'5xl'} py={12} marginTop="50px" centerContent overflow="hidden">  
          <Box textAlign={'center'} fontSize='2xl' fontWeight={'bold'}  fontFamily={'heading'}
            _hover={{ bg: "", color: "gray.500" }}
          >  Ils Nous Font Confiance    </Box>
            <Center bg='' h='100px' color='black' flexDirection={'row'} paddingTop="10">
                <Box m={'5'}>
                    <Image src='Epita(1).png' alt='EPITA' />
                </Box>
                <Box m={'5'}>
                    <Image src='psb(1).jpeg' alt='PSB' />
                </Box>
                <Box m={'5'}>
                    <Image src='orsys.png' alt='ORSYS' />
                </Box>
                <Box m={'5'}>
                    <Image src='esmeu.jpg' alt='ESMEU SUDRIA' />
                </Box>
                <Box m={'5'}>
                    <Image src='telecom_paristech(1).jpg' alt='TELECOM PARIS' />
                </Box>
            </Center>
            </Container>

        </>
    )
}
