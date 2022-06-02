import React from 'react';
import {Button, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import SearchForm from "./SearchForm";

const FormContainer = () => {
    return (
        <>
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                <Text
                    marginTop={50}
                    color={'white'}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                    GuruHotel - Frontend Challenge
                </Text>
                    <SearchForm/>
            </Stack>
        </>
    );
};

export default FormContainer;
