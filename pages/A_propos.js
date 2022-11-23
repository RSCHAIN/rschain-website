import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from 'react-icons/io5';
import Nav from './Nav';
import Footer from './footer';


const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Apropo() {
    return (
        <>
            <Nav />
            <Container maxW={'5xl'} py={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            Notre Histoire
                        </Text>
                        <Heading>Rschain</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                        Fondé par le Dr. ADJA Elloh Yves Christian, enseignant-chercheur a l'EPITA, 
                        RSchain voit le jour en Octobre 2021 en FRANCE. Sis à Massy dans l'Essone,
                        RSchain entreprise axé sur la recherche et l'implémentation des nouvelles 
                        technologies dans le domaine de la blockchain.<br> </br>

                        Filiale
                        La première filiale d'RSCHAIN voit le jour en avril 2022 en Côte d'Ivoire dans la 
                        commune d'Abidjan. Sis à Cocody angré 8e tranche.
                        </Text>
                       
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'notrehistoire.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
            <Container maxW={'5xl'} py={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'notremission.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            Notre Mission
                        </Text>
                        <Heading>Rschain</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                        Rschain naît dans l'objectif premier de démocratiser la technologie Blockchain et en Côte d'Ivoire et dans toute l’Afrique.
                        Notre cœur de métier est la Blockchain dans toutes ses formes. Nous croyons fermement que
                        La Blockchain peut améliorer non seulement le quotidien des Ivoiriens, mais aussi celui de tous les Africains.

                        </Text>
                    
                    </Stack>

                </SimpleGrid>
            </Container>
            <Container maxW={'5xl'} py={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            Nos Valeurs
                        </Text>
                        <Heading>Rschain</Heading>
                    
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                                />
                            }>
                            <Feature
                                icon={
                                    <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                text={'Le travail acharné'}
                            />
                          
                            <Feature
                                icon={
                                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('purple.100', 'purple.900')}
                                text={'La recherche & la créativité'}  
                            />
                              <Feature
                                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('green.100', 'green.900')}
                                text={'Le respect des délais'}
                            />
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'nosvaleurs.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
            <Footer />
        </>
    );
}
