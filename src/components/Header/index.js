import { Box, Image, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../assets/Logo.png'
const Header = () => {
    return (
        <React.Fragment>
            <Box position={'relative'} h='210px' w='100%'>
                <Box zIndex={'1'} top='0' w='100%' position={'absolute'} transform={'rotateY(180deg)'} bg={'#e9d023'} clipPath='polygon(100% 0%, 0% 0% , 0% 81.00%, 1% 80.96%, 2% 80.85%, 3% 80.67%, 4% 80.41%, 5% 80.08%, 6% 79.68%, 7% 79.21%, 8% 78.67%, 9% 78.06%, 10% 77.38%, 11% 76.64%, 12% 75.84%, 13% 74.97%, 14% 74.04%, 15% 73.06%, 16% 72.01%, 17% 70.92%, 18% 69.77%, 19% 68.58%, 20% 67.34%, 21% 66.06%, 22% 64.74%, 23% 63.38%, 24% 61.99%, 25% 60.56%, 26% 59.11%, 27% 57.64%, 28% 56.15%, 29% 54.63%, 30% 53.11%, 31% 51.57%, 32% 50.03%, 33% 48.48%, 34% 46.93%, 35% 45.39%, 36% 43.85%, 37% 42.33%, 38% 40.81%, 39% 39.32%, 40% 37.85%, 41% 36.40%, 42% 34.98%, 43% 33.58%, 44% 32.23%, 45% 30.91%, 46% 29.62%, 47% 28.39%, 48% 27.19%, 49% 26.05%, 50% 24.96%, 51% 23.92%, 52% 22.93%, 53% 22.01%, 54% 21.14%, 55% 20.34%, 56% 19.60%, 57% 18.92%, 58% 18.31%, 59% 17.78%, 60% 17.31%, 61% 16.91%, 62% 16.58%, 63% 16.33%, 64% 16.14%, 65% 16.03%, 66% 16.00%, 67% 16.04%, 68% 16.15%, 69% 16.34%, 70% 16.60%, 71% 16.93%, 72% 17.33%, 73% 17.80%, 74% 18.35%, 75% 18.96%, 76% 19.63%, 77% 20.38%, 78% 21.19%, 79% 22.05%, 80% 22.98%, 81% 23.97%, 82% 25.01%, 83% 26.11%, 84% 27.26%, 85% 28.45%, 86% 29.69%, 87% 30.97%, 88% 32.30%, 89% 33.66%, 90% 35.05%, 91% 36.47%, 92% 37.92%, 93% 39.40%, 94% 40.89%, 95% 42.41%, 96% 43.93%, 97% 45.47%, 98% 47.01%, 99% 48.56%, 100% 50.11%);' h='90%'>
                </Box>
                <Box zIndex={'0'} top='30px' w='100%' position={'absolute'} transform={'rotateY(180deg)'} bg={'#FBF7D4'} clipPath='polygon(100% 0%, 0% 0% , 0% 81.00%, 1% 80.96%, 2% 80.85%, 3% 80.67%, 4% 80.41%, 5% 80.08%, 6% 79.68%, 7% 79.21%, 8% 78.67%, 9% 78.06%, 10% 77.38%, 11% 76.64%, 12% 75.84%, 13% 74.97%, 14% 74.04%, 15% 73.06%, 16% 72.01%, 17% 70.92%, 18% 69.77%, 19% 68.58%, 20% 67.34%, 21% 66.06%, 22% 64.74%, 23% 63.38%, 24% 61.99%, 25% 60.56%, 26% 59.11%, 27% 57.64%, 28% 56.15%, 29% 54.63%, 30% 53.11%, 31% 51.57%, 32% 50.03%, 33% 48.48%, 34% 46.93%, 35% 45.39%, 36% 43.85%, 37% 42.33%, 38% 40.81%, 39% 39.32%, 40% 37.85%, 41% 36.40%, 42% 34.98%, 43% 33.58%, 44% 32.23%, 45% 30.91%, 46% 29.62%, 47% 28.39%, 48% 27.19%, 49% 26.05%, 50% 24.96%, 51% 23.92%, 52% 22.93%, 53% 22.01%, 54% 21.14%, 55% 20.34%, 56% 19.60%, 57% 18.92%, 58% 18.31%, 59% 17.78%, 60% 17.31%, 61% 16.91%, 62% 16.58%, 63% 16.33%, 64% 16.14%, 65% 16.03%, 66% 16.00%, 67% 16.04%, 68% 16.15%, 69% 16.34%, 70% 16.60%, 71% 16.93%, 72% 17.33%, 73% 17.80%, 74% 18.35%, 75% 18.96%, 76% 19.63%, 77% 20.38%, 78% 21.19%, 79% 22.05%, 80% 22.98%, 81% 23.97%, 82% 25.01%, 83% 26.11%, 84% 27.26%, 85% 28.45%, 86% 29.69%, 87% 30.97%, 88% 32.30%, 89% 33.66%, 90% 35.05%, 91% 36.47%, 92% 37.92%, 93% 39.40%, 94% 40.89%, 95% 42.41%, 96% 43.93%, 97% 45.47%, 98% 47.01%, 99% 48.56%, 100% 50.11%);' h='100%' >
                </Box>
                <Image src={Logo} alt='logo' w='200px' h='80px' position='absolute'
                    top={{ base: '130px', md: '100px' }}
                    left={{ base: '25%', sm: '35%', md: '42%', xl: '44%' }} />
            </Box>
            <Flex alignItems={'center'} justify='center' flexDirection={'column'} >
                <Box textAlign={'center'} my='20px'>
                    <Text fontSize={'30px'} color='#e9d023'>
                        Login
                    </Text>
                    <Text fontSize={'18px'} color='#474746c7' mt='10px'>
                        Add your details to login
                    </Text>
                </Box>

            </Flex>
        </React.Fragment>

    )
};

export default Header;
