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
    VStack,
} from '@chakra-ui/react';
import Footer from './footer';

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
                        <Button as={'a'} rounded={'full'} px={6} href='#smartcontract'>
                            En savoir Plus
                        </Button>
                    </Stack>
                    <Flex w={'full'}>
                        <Image src='conseils.webp' alt='Conseils' />
                    </Flex>
                </Stack>
                <Box
                    height={'xs'}
                    backgroundPosition='center'
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    bg={'cyan.50'}

                >
                    {/** Smart contract section */}
                    <Center id='smartcontract' size='md' as='span' m={'2'} padding='8'   >
                        <Box padding={'5'} >
                            <Link as={'a'} textDecorationLine='none' _hover={{ textDecoration: 'none', }}>

                                <Image src='smartcontract.png' alt='Rschain' borderRadius={'xl'}
                                />

                            </Link>
                        </Box>
                        {/** test box section */}
                        <Box padding={'5'} >
                            <Link as={'a'} textDecorationLine='none' _hover={{ textDecoration: 'none' }}>

                                <Image src='test.png' alt='Rschain' borderRadius={'2xl'} />

                            </Link>
                        </Box>
                        {/** Deploy box section */}
                        <Box padding={'5'} >
                            <Link as={'a'} textDecorationLine='none' _hover={{ textDecoration: 'none' }}>

                                <Image src='deploy.png' alt='Rschain' borderRadius={'3xl'} />

                            </Link>
                        </Box>
                    </Center>
                </Box>

            
            </Container>
            {/**testimonial section */}

           

            <Footer />
        </VStack>
       

    );
}