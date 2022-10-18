import React from 'react';
import {
    Box, Flex, Hide, Show
} from '@chakra-ui/react';

import Banniere from './fistpagecontent/banniere';
import Apropos from './fistpagecontent/apropos';
import Team from './fistpagecontent/team';
import Partenaire from './fistpagecontent/partenaire';
import { Container } from 'postcss';


export default function Content() {

    return (
        <>
            <Box  overflow='hidden'>
                <Banniere />
            </Box>
            
            <Box overflow='hidden'>
                <Apropos />
            </Box>
          
            <Box overflow='hidden'>
                <Team />
            </Box>
            <Box overflow='hidden'>
                <Partenaire />
            </Box>
          
         
        </>
    );
}



