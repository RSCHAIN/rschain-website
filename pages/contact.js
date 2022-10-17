import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea
} from '@chakra-ui/react';
import Footer from './footer';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsPerson, BsLinkedin } from 'react-icons/bs';
import Nav from './Nav';

export default function Contact() {
   
    return (
        <>
            <Nav />
            <Container bgImage={'apropos1..png'} maxW="full" mt={0} centerContent overflow="hidden">

                <Flex>
                    <Box
                        bg="#02054B"
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}>
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading>Contact</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                            Remplissez le formulaire ci-dessous pour nous contacter
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <VStack pl={0} spacing={3} alignItems="flex-start">
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="170px"
                                                    variant="ghost"
                                                   
                                                    _hover={{}}
                                                 
                                                 
                                                    leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                                   +225 27 22 23 77 89
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="250px"
                                                    variant="gost"
                                                    color="#DCE2FF"
                                                    _hover={{}}
                                                    
                                                 
                                                    leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                    lauria.guenaman@rschain.net
                                                </Button>
                                                <Button
                                                    size='xs'
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{}}
                                                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                                    Angré, carrefour prière, Abidjan
                                                </Button>
                                            </VStack>
                                        </Box>
                                        <HStack
                                            mt={{ lg: 10, md: 10 }}
                                            spacing={5}
                                            px={5}
                                            alignItems="flex-start">
                                            <IconButton
                                                aria-label="facebook"
                                                variant="outline"
                                                as={'a'}
                                                href="https://www.facebook.com/Rschain-104533535649455/"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<MdFacebook size="28px" />}
                                            />
                                            <IconButton
                                                aria-label="github"
                                                variant="outline"
                                                as={'a'}
                                                href="https://github.com/RSCHAIN/"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsGithub size="28px" />}
                                            />
                                            <IconButton
                                                aria-label="linkedin"
                                                variant="outline"
                                                as={'a'}
                                                href="https://www.linkedin.com/company/86048991/admin/"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsLinkedin size="28px" />}
                                            />
                                        </HStack>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5}>
                                                
                                                <FormControl id="name">
                                                    <FormLabel>Nom</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<BsPerson color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlineEmail color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="message"
                                                    />
                                                </FormControl>
                                                <FormControl id="name" float="right">
                                                    <Button
                                                        variant="solid"
                                                        bg="#0D74FF"
                                                        color="white"
                                                        _hover={{}}>
                                                        Envoyer
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>
            <Footer />
        </>

    );
}
