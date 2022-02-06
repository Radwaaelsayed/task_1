import React from 'react';
import { Provider } from 'react-redux';
import { store } from './services/configurationStore';
import Login from './pages/auth/index';
import { theme } from './chakra.config';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <ChakraProvider theme={theme}>

                    <Login />
                </ChakraProvider>
            </Provider>
        </div>

    );
};

export default App;
