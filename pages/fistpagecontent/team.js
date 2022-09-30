import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    VStack, h3
} from '@chakra-ui/react';

export default function Team() {

    return (
        <>
            <Heading  textAlign='center' margin={'10'} paddingBottom={'10'} 
                _hover={{ bg: "", color: "pink.900" }}
            >

                TEAM

            </Heading>

            <Center padding={0} bg='pink.200' h='50px'  >

            <Stack direction='row' spacing={5}>
              <Avatar name='josias sehi' size='2xl' src='josias.png' />
              <Avatar name='Souleymane Ouattara' size='2xl' src='josias.png' />
              <Avatar name='Nathan Digra' size='2xl' src='josias.png' />
              <Avatar name='Nadia kareen' size='2xl' src='josias.png' />
              <Avatar name='Lauria Guenaman' size='2xl' src='josias.png' />
              
            </Stack>
          </Center>
          <Center       >   
          
          </Center>

               
        </>
    )
}