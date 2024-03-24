import {
	Text,
	Flex,
	Image,
	UnorderedList,
	ListItem,
	VStack,
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	Box,
	Heading,
	Select,
} from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import Footer from '@src/layouts/footer';
import { colors } from '@src/Theme';
import jumelage from '@assets/images/Jumelage.png';
import { useRef } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

export default function Pairing() {
	const form = useRef<HTMLFormElement>(null);
	return (
		<>
			<Flex direction={'column'} backgroundColor={colors.background}>
				<Navbar />
				<Flex
					display={'column'}
					backgroundColor={colors.background}
					justifyContent="center"
					alignItems="center"
				>
					<Text fontSize="7xl" textAlign="center" mb={10} color={'dimgrey'} fontWeight={'600'}>
						Pairing Service
					</Text>
					<Text
						fontSize="3xl"
						textAlign="center"
						color={colors.button_text}
						fontWeight={'500'}
						mb={50}
					>
						Pairing for individuals with the same rare disease
					</Text>
					<Flex flexDirection={'row'} justifyContent={'center'}>
						<Text fontSize={'xl'} textAlign={'center'} mr={10} mt={10}>
							Do you want to find an individual or family dealing with the same
							<br />
							rare disease as you or your child to share experiences
							<br />
							or exchange advice?
							<br />
							<br />
							Sign up for our pairing service.
						</Text>
						<Image src={jumelage} />
					</Flex>
					<Text fontSize={'xl'} textAlign={'center'} mt={10} mb={10}>
						We may already have someone with your disease in our contact bank of individuals
						affected in Quebec. Fill out the
						<br />
						form below and we will check our bank. If we don't have anyone, we'll look for you
						through other sources.
						<br />
						<br />
						If we still don't find anyone immediately, we'll contact you as soon as we have a
						registration with the same rare disease.
					</Text>
					<Flex fontSize={'xl'} justifyContent={'center'} mb={10}>
						<UnorderedList>
							<ListItem>
								Please note that we keep your information confidential and never give out your name
								or email address without your permission.
							</ListItem>
							<ListItem>
								If we can pair you with another person, we will ask for your permission each time it
								arises.
							</ListItem>
						</UnorderedList>
					</Flex>
					<Text mb={10}>.</Text>
				</Flex>
				<Flex justifyContent="center" alignItems="center" marginBottom={'10vh'}>
					<Box
						bg={'primary'}
						borderRadius={'20px'}
						p={8}
						backgroundColor={'white'}
						shadow={'base'}
						w={{ base: '100%', lg: '60%' }}
					>
						<Heading mb={10}>Form to Complete for Pairing Service</Heading>
						<form ref={form}>
							<VStack spacing={5}>
								<FormControl isRequired>
									<FormLabel textColor={'palette.black'}>Name</FormLabel>
									<Flex alignItems="flex-start" gap={4}>
										<InputGroup>
											<InputLeftElement color={'palette.primary'} children={<BsPerson />} />
											<Input
												type="text"
												name="first_name"
												placeholder="First Name"
												focusBorderColor={'palette.primary'}
												textColor={'palette.black'}
											/>
										</InputGroup>

										<InputGroup>
											<InputLeftElement color={'palette.primary'} children={<BsPerson />} />
											<Input
												type="text"
												name="last_name"
												placeholder="Last Name"
												focusBorderColor={'palette.primary'}
												textColor={'palette.black'}
											/>
										</InputGroup>
									</Flex>
								</FormControl>

								<FormControl isRequired>
									<FormLabel textColor={'palette.black'}>Email</FormLabel>

									<InputGroup>
										<InputLeftElement color={'palette.primary'} children={<MdOutlineEmail />} />
										<Input
											type="email"
											name="user_email"
											placeholder="Your Email"
											focusBorderColor={'button'}
											textColor={'palette.black'}
										/>
									</InputGroup>
								</FormControl>

								<FormControl isRequired>
									<FormLabel textColor={'palette.black'}>Disease</FormLabel>

									<InputGroup>
										<Input
											placeholder="Your Disease"
											focusBorderColor={'button'}
											textColor={'palette.black'}
										/>
									</InputGroup>
								</FormControl>

								<FormControl isRequired>
									<FormLabel color={'palette.black'}>I am</FormLabel>
									<Select focusBorderColor={'button'} color={'palette.black'}>
										<option>Adult</option>
										<option>Teenager</option>
										<option>Child</option>
										<option>Caregiver</option>
									</Select>
								</FormControl>

								<FormControl isRequired>
									<FormLabel color={'palette.black'}>Language</FormLabel>
									<Select focusBorderColor={'button'} color={'palette.black'}>
										<option>French</option>
										<option>English</option>
										<option>French or English</option>
										<option>Other</option>
									</Select>
								</FormControl>

								<FormControl isRequired>
									<FormLabel textColor={'palette.black'}>Message</FormLabel>

									<Textarea
										name="message"
										placeholder="Your Message"
										rows={6}
										resize="none"
										focusBorderColor={'button'}
										textColor={'palette.black'}
									/>
								</FormControl>

								<Button background={'skyblue'} w={'full'} type={'submit'}>
									Send Message
								</Button>
							</VStack>
						</form>
					</Box>
				</Flex>
				<Footer />
			</Flex>
		</>
	);
}
