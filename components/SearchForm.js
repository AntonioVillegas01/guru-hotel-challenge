import { FormEvent, ChangeEvent, useState } from 'react';
import {
    Stack,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex,
} from '@chakra-ui/react';
import {CheckIcon, SearchIcon} from '@chakra-ui/icons';
import {useForm} from "../hooks/useForm";

export default function SearchForm() {

    const [ formValues, handleInputChange, reset ] = useForm( undefined );
    const { queryTerm } = formValues;


    return (

            <Container
                maxW={'lg'}
                bg={useColorModeValue('white', 'whiteAlpha.100')}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}
                direction={'column'}>
                <Heading
                    as={'h2'}
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    textAlign={'center'}
                    mb={5}>
                    Ingresa el termino de busqueda
                </Heading>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    as={'form'}
                    spacing={'12px'}>
                    <FormControl>
                        <Input
                            variant={'solid'}
                            borderWidth={1}
                            color={'gray.800'}
                            _placeholder={{
                                color: 'gray.400',
                            }}
                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                            required
                            placeholder={'Ejemplo: Hoteles en Cancún'}
                            aria-label={'Ejemplo: Hoteles en Cancún'}
                            name="title"
                            value={queryTerm}
                            disabled={false}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl w={{ base: '100%', md: '40%' }}>
                        <Button
                            colorScheme={'blue'}
                            isLoading={false}
                            w="100%"
                            >
                            Buscar  <SearchIcon marginLeft={2} />
                        </Button>
                    </FormControl>
                </Stack>
            </Container>

    );
}



// <input
//     type="text"
//     placeholder="Ingresa el termino de Busqueda"
//     autoComplete="off"
//     name="title"
//     value={ queryTerm }
//     onChange={ handleInputChange }
// />