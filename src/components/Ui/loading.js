import { Spinner, Flex } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
    return (
        <Flex position={'fixed'} w='100%' h='100%' top='0' left='0' alignItems={'center'} justifyContent={'center'} bg='#0000002e'>
            <Spinner size='xl' />
        </Flex>
    )
}

export default Loading
