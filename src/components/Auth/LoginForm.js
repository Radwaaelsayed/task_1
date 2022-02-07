import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Field, Formik, Form, useFormik } from 'formik';
import { Button, FormLabel, Text, Input, Flex, Box } from '@chakra-ui/react';
import * as Yup from 'yup';
import { loginUserAction } from '../../modules/auth/Actions';
const LoginForm = (props) => {
    const isLoading = useSelector((state) => state.auth.isLoading)
    const dispatch = useDispatch()

    const loginSchema = () => {
        return Yup.object().shape({
            email: Yup.string().email('not valid email').required('required').default(''),
            password: Yup.string()
                .required('Mandatory filed')
                .min(6, 'Password is too short - should be 8 characters minimum.')
                .max(32, 'Password is too long.'),

        });
    };

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: loginSchema(),

        onSubmit: values => {
            dispatch(loginUserAction(values));
        },
    });


    return (

        <Flex
            bg="whiteAlpha.700"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100%"
            h="100%">
            <form onSubmit={formik.handleSubmit} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Flex flexDirection={'column'} alignItems='center' justifyContent={'space-between'} width={{ base: '65%', md: '45%', xl: '350px' }}>
                    <Input size='md' id="email"

                        name="email"
                        type="email"
                        placeholder='Your email'
                        borderRadius={'30px'}
                        w='100%'
                        onChange={formik.handleChange}

                        value={formik.values.email} />

                    {
                        formik.errors['email'] && <Text alignSelf={'flex-start'} mt='4px' color='red'>{formik.errors['email']}</Text>
                    }

                    {console.log(formik.errors)}
                    <Input size='md'
                        borderRadius={'30px'}
                        w='100%'
                        mt='20px'
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {
                        formik.errors['email'] && <Text alignSelf={'flex-start'} color='red'>{formik.errors['email']}</Text>
                    }
                    <Button mt='20px' borderRadius={'30px'} w='100%' isLoading={isLoading} type="submit" bg={Object.keys(formik.errors).length > 0 ? '#e6e6e6' : '#e9d023'} >Login</Button>
                </Flex>




            </form>
        </Flex >


    );
};

export default LoginForm;
