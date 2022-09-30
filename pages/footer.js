import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';

import {FaLinkedin, FaFacebook } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';





const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <>
            <chakra.button
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                rounded={'full'}
                w={8}
                h={8}
                cursor={'pointer'}
                as={'a'}
                href={href}
                display={'inline-flex'}
                alignItems={'center'}
                justifyContent={'center'}
                transition={'background 0.3s ease'}
                _hover={{
                    bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                }}>
                <VisuallyHidden>{label}</VisuallyHidden>
                {children}
            </chakra.button>
        </>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                        spacing={8}>
                        <Stack spacing={6}>

                            <Text fontSize={'sm'}>
                                © 2022 Rschain. All rights reserved
                            </Text>
                            <Stack direction={'row'} spacing={6}>
                                <SocialButton label={'Facebook'} href={'#'}>
                                    <FaFacebook/>
                                </SocialButton>
                                <SocialButton label={'linkedin'} href={'#'}>
                                    <FaLinkedin />
                                </SocialButton>
                               
                            </Stack>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader >Company</ListHeader>
                            <Link href={'./A_propos'} _hover={{ textDecoration: 'none', color: "green.600" }} >A propos</Link>
                            <Link href={'./contact'} _hover={{ textDecoration: 'none', color: "green.600" }}>Contact</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Support</ListHeader>
                            <Link href={'#'} _hover={{ textDecoration: 'none', color: "green.600" }}>Termes & Conditions</Link>
                            <Link href={'#'} _hover={{ textDecoration: 'none', color: "green.600" }}>Privacy Policy</Link>

                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>NewsLetters</ListHeader>
                            <Stack direction={'row'}>
                                <Input
                                    placeholder={'Your email address'}
                                    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                    border={0}
                                    _focus={{
                                        bg: 'whiteAlpha.300',
                                    }}
                                />
                                <IconButton
                                    bg={useColorModeValue('green.400', 'green.800')}
                                    color={useColorModeValue('white', 'gray.800')}
                                    _hover={{
                                        bg: 'green.600',
                                    }}
                                    aria-label="Subscribe"
                                    icon={<BiMailSend />}
                                />
                            </Stack>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </>

    );
}
