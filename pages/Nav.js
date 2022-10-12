import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Image
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    ChevronRightIcon
} from '@chakra-ui/icons';
import { BsPiggyBank } from 'react-icons/bs';

export default function Nav() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box >
            <Flex
                bg={useColorModeValue('Background', 'white.400')}
                color={useColorModeValue('white,gray')}
                minH={'50px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
             
            
                
                align={'center'}>


                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Box w={'36'} h={'12'}
                    >
                        <Image src='logo.png' alt='RSCHAIN' />
                    </Box>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10} mt={'5'}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                <Stack
        ml={'20'}
          flex={{ base: 3, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            variant={'link'}
            href={'#'}
            _hover={{textDecoration:'none',color:'blackAlpha'}}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>

            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4} >
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={800}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const NAV_ITEMS = [
    {
        label: 'Accueil',
        href: '/',
    },
    {
        label: 'A propos',
        href: './A_propos',
    },
    {
        label: 'Services',

        children: [
            {
                label: 'Conseils',
                href:'./conseils',
               
            },
            {
                label: 'Audit & Securité',
                href:'./audit',
              
                
            },
            {
                label: 'Formation',
                href:'./formation',
              
            },
        ],
    },
    {
        label: 'Contact',
        href: './contact',
    },
];

