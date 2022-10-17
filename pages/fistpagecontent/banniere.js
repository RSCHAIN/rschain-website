import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Container,
    Stack,
    Heading,
    Text,
    Center,
    Hide
} from '@chakra-ui/react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
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

export default function Banniere() {
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
            title: '',
            text: "",
            image: 'banner1.png',

        },
        {
            title: '',
            text: "",
            image: 'banner2.png',

        },
        {
            title: '',
            text: "",
            image: 'banner3.png',
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
                {/* Left Icon */}
                <IconButton
                    
                    aria-label="left-arrow"
                    colorScheme="pink"
                    borderRadius="full"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiChevronLeft size="40px" /> 
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    colorScheme="pink"
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiChevronRight size="40px" />

                </IconButton>
               
                {/* Slider */}
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((card, index) => (
                        <Box
                           
                            key={index}
                            height={{ base: 'xs', md: 'md', lg: 'xl' }}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundImage={`url(${card.image})`}>
                            {/* This is the block you need to change, to customize the caption */}
                            <Container size="container.lg" height="600px" position="relative" >
                                <Stack
                                    spacing={6}
                                    w={'full'}
                                    maxW={'lg'}
                                    position="absolute"
                                    top="20%"
                                    transform="translate(0, -50%)">
                                </Stack>
                            </Container>
                        </Box>
                    ))}

                </Slider>
            </Box>

        </>
    );
}

