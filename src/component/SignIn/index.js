import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1> Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required></FormInput>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormButton type="submit" >Submit</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
