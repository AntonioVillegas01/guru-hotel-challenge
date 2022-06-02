import React from 'react';
import {Flex, useBreakpointValue, VStack} from "@chakra-ui/react";
import Footer from "./Footer";


export default  function  Layout  ({children}) {
    return (
        <>

            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://images5.alphacoders.com/437/437294.jpg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'flex-start'}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    {children}
                    <Footer/>
                </VStack>
            </Flex>
        </>

    );
};

