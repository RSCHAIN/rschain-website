import { ReactNode } from 'react';
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image, Box, Center, Link, Avatar,
    useColorModeValue,
    VStack, Wrap, WrapItem, Head, List, ListItem, ListIcon, MdCheckCircle, MdSettings, UnorderedList,
    useBreakpointValue,
    Icon,
} from '@chakra-ui/react';
import Footer from './footer';
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import Nav from './Nav';

const Testimonial = (children) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = (children) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = (children) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = (children) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = (
    src,
    name,
    title,) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};


export default function Conseils() {
    return (

        <>
            <Nav />

            <VStack>
                <Container maxW={'5xl'}>
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}>
                            FAITES VOUS ACCOMPAGNER{' '}
                            <Text as={'span'} color={'red.600'}>
                                PAR NOS EXPERTS
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} maxW={'3xl'}>
                            Never miss a meeting. Never be late for one too. Keep track of your
                            meetings and receive smart reminders in appropriate times. Read your
                            smart “Daily Agenda” every morning.
                        </Text>
                        <Stack spacing={6} direction={'row'}>
                            <Button
                                rounded={'full'}
                                px={6}
                                colorScheme={'yellow'}
                                bg={'red.300'}
                                _hover={{ bg: 'yellow' }}>
                                Commencer
                            </Button>
                            <Button as={'a'} rounded={'full'} px={6} href='#Nous developpons'>
                                En savoir Plus
                            </Button>
                        </Stack>
                        <Flex w={'full'}>
                            <Image src='conseils.webp' alt='Conseils' />
                        </Flex>
                    </Stack>


                </Container>
                {/**smart contract section*/}
                <Box colorScheme='yellow' bg={'orange.300'} w='100%' color='white' h={'auto'} direction='row' borderRadius={'2xl'} centerContent overflow="hidden">

                    <Center size='md' as='span' m={'2'} padding='2' mt={'4'}>
                        <Box padding={{ base: '2', md:2 , lg: 5 }} bg='orange.500' w={{ base: 'auto', md:150, lg: 200 }} h='auto' borderRadius={'2xl'}>
                            <Text align={'center'} pb='4'  >   Nous developpons </Text>
                            <UnorderedList>
                                <ListItem> Smart contract</ListItem>
                                <ListItem> Actifs Numériques</ListItem>
                                <ListItem>Portefeuils numeriques </ListItem>
                                <ListItem> DAPPs (Application decentralisées)</ListItem>
                                <ListItem> DEFI (Finance Decentralisée)</ListItem>
                                <ListItem> Intégration Front</ListItem>
                            </UnorderedList>

                        </Box>

                        <Stack align={'center'} m='12'>

                            <Icon as={AiFillCaretRight} w={{ base: '', md:10 , lg: 16 }} h={{ base: 'auto', md:10 , lg: 16 }}/>

                        </Stack>


                        <Box padding={{ base: '2', md:2 , lg: 5 }} bg='orange.500'  h= {{ base: 'auto', md:'auto' , lg: 'auto' }} ml={'5'} borderRadius={'2xl'} 
                         
                         w={{ base: 'auto', md:150, lg: 200 }} 
                        >
                            <Text align={'center'}> Usage </Text>
                            <UnorderedList>
                                <ListItem>Certification et Tracabikité </ListItem>
                                <ListItem>Automatisation des processus</ListItem>
                                <ListItem>Gestion des droits numeriques</ListItem>
                                <ListItem>sécurisation des processus</ListItem>
                                <ListItem>sécurisation des processus</ListItem>
                              
                            </UnorderedList>

                        </Box>

                    </Center>

                    <Stack align={'center'} m='2'>

                        <Icon as={AiFillCaretDown} w={{ base: '', md:10 , lg: 16 }} h={{ base: 'auto', md:10 , lg: 16 }} />

                    </Stack>

                    <Center size='auto' as='span'  mt={{ base: 0, md:0 , lg: 16 }} >
                        <Box  bg='orange.500'padding={{ base: '2', md:2 , lg: 5 }}   h= {{ base: 'auto', md:'auto' , lg: 'auto' }} ml={'5'} borderRadius={'2xl'} 
                         mb={{ base: 2, md:2, lg: 4 }}
                         w={{ base: 'auto', md:150, lg: 200 }} >
                            <Text align={'center'}> Les protocols </Text>
                            <UnorderedList textAlign={'justify'}>
                                <ListItem> Ethereum </ListItem>
                                <ListItem>UniSwap</ListItem>
                                <ListItem>SushiSwap</ListItem>
                            </UnorderedList>

                        </Box>

                    </Center>



                </Box>

                <Footer />
            </VStack>

        </>
    );
}