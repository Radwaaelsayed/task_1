import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import { Box, chakra, Flex, Text } from '@chakra-ui/react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AiFillApple, AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import SocialMediaButton from '../../components/SocialmediaLoginButtons';
const Login = () => {
    const socialMediaButtons = [
        {
            label: 'Login with Facebook',
            Icon: AiFillFacebook,
            color: '#425892'
        },
        {
            label: 'Login with Google',
            Icon: FcGoogle,
            color: 'red'
        },
        {
            label: 'Login with Apple',
            Icon: AiFillApple,
            color: 'black'
        }
    ]
    return (
        <React.Fragment>

            <Header />

            <LoginForm />

            <Flex alignItems='center' flexDirection={'column'} justifyContent='center'>
                <Text my='20px' color='#474746'>Forgot your password?</Text>
                <Text mt='70px' color='##7c7d7e'>or Login With</Text>
                <Flex alignItems='center' flexDirection={'column'} w='100%'>
                    {
                        socialMediaButtons.map((elem, index) => {
                            return <SocialMediaButton key={index} icon={elem.Icon} color={elem.color} label={elem.label} />
                        })
                    }
                </Flex>
                <Box w='50%' textAlign={'center'}>
                    <Text mt='30px' color='#474746'>Don't have an Account?<chakra.span color='#474746' mx='4px' cursor={'pointer'} fontWeight={'500'}>Sign Up</chakra.span> </Text>
                    <Text mt='50px' color='#474746'>
                        By proceeding, you agree to our Terms of Use and confirm
                        you have read our Privacy and Cookie Statement.
                    </Text>
                </Box>

            </Flex>
            <Footer />

        </React.Fragment>
    )
};

export default Login;
