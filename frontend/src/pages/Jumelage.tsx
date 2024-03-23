import { Text, Flex, Image, UnorderedList, ListItem, VStack, Button, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, Box, Heading, Select } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import { colors } from '@src/Theme';
import jumelage from '@assets/images/Jumelage.png';
import { useRef } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

export default function Jumelage() {
    const form = useRef<HTMLFormElement>(null);
    return (
        <>
            <Navbar />
            <Flex display={'column'} backgroundColor={colors.background} justifyContent="center" alignItems="center">
                <Text fontSize="7xl" textAlign="center" mb={10} color={'dimgrey'} fontWeight={'600'}>
                    Service de jumelage
                </Text>
                <Text fontSize="3xl" textAlign="center" color={colors.button_text} fontWeight={'500'} mb={50}>
                    Jumelage de personnes atteintes de la même maladie rare
                </Text>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'center'}
                >
                    <Text fontSize={'xl'} textAlign={'center'} mr={10} mt={10}>
                        Voulez-vous trouver un individu ou une famille aux prises avec la même 
                        <br/>
                        maladie rare que vous ou votre enfant dans le but de partager sur votre vécu 
                        <br/>
                        ou d’échanger des conseils? 
                        <br/>
                        <br/>
                        Inscrivez-vous à notre banque de jumelage.
                    </Text>
                    <Image src={jumelage} />
                </Flex>
                <Text fontSize={'xl'} textAlign={'center'} mt={10} mb={10}>
                    Nous avons peut-être déjà quelqu’un avec votre maladie dans notre banque de contact de personnes atteintes au Québec. Remplissez le
                    <br/>
                    formulaire ci-dessous et nous consulterons notre banque. Si nous n’avons personne, nous chercherons pour vous via d’autres sources.
                    <br/>
                    <br/>
                    Si nous ne trouvons toujours pas dans l’immédiat, nous vous contacterons aussitôt que nous aurons une inscription avec la même maladie rare.
                </Text>
                <Flex fontSize={'xl'} justifyContent={'center'} mb={10}>
                    <UnorderedList>
                        <ListItem>Notez que nous conservons vos informations de façon confidentielle et que nous ne donnons jamais votre nom ou votre adresse courriel sans votre autorisation.</ListItem>
                        <ListItem>Si nous pouvons vous jumeler avec une autre personne, nous vous demanderons votre autorisation à chaque fois que cela se présente.</ListItem>
                    </UnorderedList>
                </Flex>
                <Text mb={10}>.</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
                <Box
                    bg={'primary'}
                    borderRadius={'dg'}
                    p={8}
                    backgroundColor={'white'}
                    shadow={'base'}
                    w={{ base: '100%', lg: '60%' }}
                >
                    <Heading mb={10}>
                        Formulaire à compléter pour le service de jumelage
                    </Heading>
                    <form ref={form}>
                        <VStack spacing={5}>
                            <FormControl isRequired>
                                <FormLabel textColor={'palette.black'}>Nom</FormLabel>
                                <Flex alignItems="flex-start" gap={4}>
                                    <InputGroup>
                                        <InputLeftElement
                                        color={'palette.primary'}
                                        children={<BsPerson />}
                                        />
                                        <Input
                                        type="text"
                                        name="first_name"
                                        placeholder="Prénom"
                                        focusBorderColor={'palette.primary'}
                                        textColor={'palette.black'}
                                        />
                                    </InputGroup>

                                    <InputGroup>
                                        <InputLeftElement
                                        color={'palette.primary'}
                                        children={<BsPerson />}
                                        />
                                        <Input
                                        type="text"
                                        name="last_name"
                                        placeholder="Nom"
                                        focusBorderColor={'palette.primary'}
                                        textColor={'palette.black'}
                                        />
                                    </InputGroup>
                                </Flex>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel textColor={'palette.black'}>Courriel</FormLabel>

                                <InputGroup>
                                    <InputLeftElement
                                        color={'palette.primary'}
                                        children={<MdOutlineEmail />}
                                    />
                                    <Input
                                        type="email"
                                        name="user_email"
                                        placeholder="Votre courriel"
                                        focusBorderColor={'button'}
                                        textColor={'palette.black'}
                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel textColor={'palette.black'}>Maladie</FormLabel>

                                <InputGroup>
                                    <Input
                                        placeholder="Votre maladie"
                                        focusBorderColor={'button'}
                                        textColor={'palette.black'}
                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel color={'palette.black'}>Je suis</FormLabel>
                                <Select
                                    focusBorderColor={'button'}
                                    color={'palette.black'}
                                >
                                    <option>Adulte</option>
                                    <option>Adolescent</option>
                                    <option>Enfant</option>
                                    <option>Proche aidant</option>
                                </Select>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel color={'palette.black'}>Langue</FormLabel>
                                <Select
                                    focusBorderColor={'button'}
                                    color={'palette.black'}
                                >
                                    <option>Francais</option>
                                    <option>Anglais</option>
                                    <option>Francais ou Anglais</option>
                                    <option>Autre</option>
                                </Select>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel textColor={'palette.black'}>Message</FormLabel>

                                <Textarea
                                    name="message"
                                    placeholder="Votre Message"
                                    rows={6}
                                    resize="none"
                                    focusBorderColor={'button'}
                                    textColor={'palette.black'}
                                />
                            </FormControl>

                            <Button
                                background={'skyblue'}
                                w={'full'}
                                type={'submit'}
                            >
                                Envoyer Message
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Flex>
        </>
    );
}
