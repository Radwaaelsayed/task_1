import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';

const SocialMediaButton = ({ label, color, icon }) => {
    return (
        <Flex cursor={'pointer'} my='10px' p='10px' border={`1px solid ${color}`} borderRadius='30px' alignItems='center' justifyContent={'center'} width={{ base: '65%', md: '45%', xl: '350px' }}>
            <Icon as={icon} color={color} fontSize='25px' />
            <Text mx='7px'>{label}</Text>
        </Flex>
    )
};

export default SocialMediaButton;
