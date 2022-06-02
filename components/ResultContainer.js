import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber, useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import ItemCard from "./ItemCard";


function StatsCard(props) {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            backgroundColor={'white'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    );
}
const ResultContainer = () => {
    return (
        <Box maxW="7xl"
             maxH={'75vh'}
             overflowX="auto"
             mx={'auto'}
             pt={5}

             px={{ base: 8, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}
                color={'white'}
            >
                Resultados
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                {/*<StatsCard title={'We serve'} stat={'50,000 people'} />*/}
                {/*<StatsCard title={'In'} stat={'30 different countries'} />*/}
                {/*<StatsCard title={'Who speak'} stat={'100 different languages'} />*/}
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </SimpleGrid>
        </Box>
    );
};

export default ResultContainer;





//
//
//
// <SimpleGrid minChildWidth='120px' spacing='40px' p={10}>
//     <ItemCard/>
// </SimpleGrid>