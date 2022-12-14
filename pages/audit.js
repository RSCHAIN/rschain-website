import React from 'react';
import { Box, Center,Stack, Heading,Text,Flex,VStack,
   Button,Icon,Arrow,useColorModeValue,
  Container,
      createIcon, Hide, Show } from '@chakra-ui/react';
import {BsArrowDownCircleFill} from "react-icons/bs";
import Footer from './footer';
import Nav from './Nav';



function audit(props) {
    
    const Arrow = createIcon({
        displayName: 'Arrow',
        viewBox: '0 0 72 24',
        path: (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
            fill="currentColor"
          />
        ),
      });
    return (
        <>
        <Nav/>
       
       <Flex
      centerContent overflow="hidden"
      w={'full'}
      minh={'2xl'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'5xl'} align={'center'} spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
          <Heading
            color={'white'}
            alignContent ='center'
            textAlign={'center'}
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
           >
            ENSEMBLE BATISSONS UN MONDE PLUS SECURISE
          </Heading>
          <Center> <Icon as={BsArrowDownCircleFill}  w={12} h={12} color='yellow' /> </Center>
        </Stack>
      </VStack>
    </Flex>
         
            <Box  
            centerContent overflow="hidden"
            height={'md'}
            backgroundPosition='center'
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            bg={'orange.200'}
            >  
           
                <Heading fontFamily={'fantasy'} paddingTop='14' textAlign={'center'} 
               
                >
                    Audits Informatique ?
                </Heading>

                <Center>
                    <Text fontFamily={'heading'}  textAlign='center'
                    > L???audit de s??curit?? est un diagnostic de l?????tat de s??curit?? de votre syst??me d???information pour en  <br></br>
                        r??v??ler d?????ventuels failles ou dysfonctionnements qui pourraient compromettre vos activit??s.</Text>
                </Center>  
                <Heading fontFamily={'fantasy'} paddingTop='24' textAlign={'center'} p={{ base: 2, md: 2, lg: 4 }} >
                    la blockchain,C'est Quoi ?
                </Heading> 
                <Center    >
                    <Text fontFamily={'heading'}   textAlign={'center'} p={{ base: -2, md: 2, lg: -4 }}> L???audit de s??curit?? est un diagnostic de l?????tat de s??curit?? de votre syst??me d???information pour en  <br></br>
                        r??v??ler d?????ventuels failles ou dysfonctionnements qui pourraient compromettre vos activit??s.</Text>
                </Center>  
              
            </Box>
            <Box 
            centerContent overflow="hidden"
            height={'md'}
            backgroundPosition='center'
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            bg={'teal.100'}
           
            >  
           
                <Heading fontFamily={'fantasy'} paddingTop='14' textAlign={'center'}>
                    les Smarts Contract?
                </Heading>

                <Center>
                    <Text fontFamily={'heading'}  textAlign={'center'} > L???audit de s??curit?? est un diagnostic de l?????tat de s??curit?? de votre syst??me d???information pour en  <br></br>
                        r??v??ler d?????ventuels failles ou dysfonctionnements qui pourraient compromettre vos activit??s.</Text>
                </Center>  
                <Heading fontFamily={'fantasy'} paddingTop='14' textAlign={'center'}>
                    Audits des Smarts Contract ?
                </Heading> 
                <Center>
                    <Text fontFamily={'heading'} textAlign={'center'} > L???audit de s??curit?? est un diagnostic de l?????tat de s??curit?? de votre syst??me d???information pour en  <br></br>
                        r??v??ler d?????ventuels failles ou dysfonctionnements qui pourraient compromettre vos activit??s.</Text>
                </Center>  

        {/**button with arrow icon */}
        <Hide below='md'   > 
        <Container maxW={'3xl'}  centerContent overflow="hidden">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 8 ,sm:2 }}
          py={{ base: 20, md: 6,sm:2}}>
         
         
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'orange.500',
              }}>
              Contatez un expert
            </Button>
          
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'pink.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Dr. Elloh ADJA
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
      </Hide>
      <Show below='md'>
        <Center>  
        <Button  
              size={{base:'xs',md:'sm'}}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'orange.500',
              }}>
              Contatez un expert
           
        </Button>
        </Center>
      </Show>
               
            </Box>
          
        <Footer/>
        </>
       
    );
}

export default audit;