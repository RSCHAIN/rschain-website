import React from 'react';
import {
    Box,
    useBreakpointValue,
    Container,
    Stack,useColorModeValue,Heading,Image,Center,Text,
} from '@chakra-ui/react';
import Slider from 'react-slick';
// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};
import { useState } from 'react';

export default function Team() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState();
    const [sliderMessage, setSliderMessage] = useState();

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const cards = [

        {
            title: 'Dr Elloh Adja',
            text: "CEO",
            image: 'elloh.png',

        },
        {
            title: 'Lauria Guenaman',
            text: "Representante",
            image: 'lauria.png',

        },
        {
            title: 'Josias Sehi',
            text: "Dapps Developer",
            image: 'josias.png',
        },
        {
          title: 'Souleymane Ouattara',
          text: "DEFI Developer",
          image: 'soul.jpeg',
      },
      {
        title: 'Nathanael Digra',
        text: "Security Specialist",
        image: 'nathan.png',
    },

    ];


    return (
        <>


            <Box 
                centerContent overflow="hidden"
                position={'relative'}
                height={'xl'}
                width={'full'}
                >


                {/* CSS files for react-slick */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* Slider */}
          <Box bg={useColorModeValue('gray.100', 'gray.700')} borderRadius='2xl'>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
              <Stack spacing={0} align={'center'}>
                <Heading>TEAM</Heading>
                <Text textAlign={'center'}>Nous comptons parmi les start-ups les plus qualifiées de l'Afrique de l'Ouest dans le domaine de la blockchain.  </Text>
              </Stack>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 10, md: 4, lg: 10 }}>
              </Stack>
            </Container>
          </Box>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((card, index) => (
                        <Box
                           
                            key={index}
                            borderRadius={'full'}
                            boxSize={{base:'150px',xs:'150px'}}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            >
                            {/* This is the block you need to change, to customize the caption */}
                            <Container  position="relative" alignContent={'center'}>
                            <Center> 
                            <Image
                            alignItems={'center'}
                            borderRadius='full'
                            boxSize={{ base: 150, md:150, lg: 200 }}
                            src={card.image}
                            alt='LA Team Rschain'

                          /> 
                          
                          </Center>  
                          <Text fontFamily={'fantasy'} fontSize='sm'   textAlign={'center'}> {card.text}  </Text>
                          <Heading textAlign={'center'}>{card.title}</Heading>
                            </Container>
                        </Box>
                    ))}

                </Slider>
            </Box>

        </>
    );
}