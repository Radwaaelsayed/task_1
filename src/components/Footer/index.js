import { Box } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box transform={'rotateY(180deg)'} h='300px' >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#EAD023" fill-opacity="0.75" d="M0,32L80,58.7C160,85,320,139,480,138.7C640,139,800,85,960,101.3C1120,117,1280,203,1360,245.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

        </Box>
    )
};

export default Footer;
