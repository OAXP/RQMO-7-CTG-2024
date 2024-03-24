import { AspectRatio, Flex, Text } from "@chakra-ui/react";
import { colors } from "@src/Theme";
import Navbar from "@src/layouts/navbar";


export default function Emergency() {
    return (
        <>
        <Navbar />
        <Flex
            display={'column'}
            backgroundColor={colors.background}
            w={'100%'}
            h={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Text fontSize="7xl" textAlign="center" mb={3} color={'#303030'} fontWeight={'600'}>
                Emergency
            </Text>
            <Text fontSize="3xl" textAlign="center" mb={5}>
                In case of emergency, please go to the nearest hospital as soon as possible.
                <br/>
                Select the nearest hospital in the map below and click on directions to obtain the shortest way there.
            </Text>
            <Flex justifyContent="center" mb={30}>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1e9x7_sT9CPVAPgQnLP1KwBEKitpDnm4&ehbc=2E312F" width={'80%'} height={'600px'}></iframe>
            </Flex>
        </Flex>
        </>
    );
};
