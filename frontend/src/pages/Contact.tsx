import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BsPerson, BsFillTelephoneFill, BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import Navbar from '@src/layouts/navbar';
import Footer from '@src/layouts/footer';
import { colors } from '@src/Theme';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);
	return (
		<>
			<Navbar />
			<Flex
				direction={'column'}
				id={'contact'}
				minH={'100vh'}
				bgSize={'100% auto'}
				bgRepeat={'no-repeat'}
				backgroundColor={colors.background}
			>
				<VStack pt={5}>
					<Flex
						m={{ base: 5, md: 16, lg: 10 }}
						p={{ base: 5, lg: 16 }}
						w={'100%'}
						justify={'center'}
					>
						<Box
							bg={'primary'}
							borderRadius={'lg'}
							p={8}
							backgroundColor={'white'} // Modified background color
							shadow={'base'}
							w={{ base: '100%', lg: '60%' }}
						>
							<Heading fontSize={{ base: '4xl', md: '5xl' }} paddingBottom={5}>
								Contact Us
							</Heading>
							<Flex align="center">
								<BsFillTelephoneFill />
								<Text fontSize={{ base: 'lg' }} fontWeight="500" ml={2}>
									Toll-free: 1-888-822-2854
								</Text>
							</Flex>
							<Flex align="center">
								<BsFillTelephoneFill />
								<Text fontSize={{ base: 'lg' }} fontWeight="500" ml={2}>
									Sherbrooke Region, Qc: (819) 943-2854
								</Text>
							</Flex>
							<Flex align="center" mb={3}>
								<MdOutlineEmail />
								<Text fontSize={{ base: 'lg' }} fontWeight="500" ml={2}>
									info@rqmo.org
								</Text>
							</Flex>
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
										<FormLabel textColor={'palette.black'}>Telephone</FormLabel>
										<InputGroup>
											<InputLeftElement color={'palette.primary'} children={<BsTelephone />} />
											<Input
												type="tel"
												name="user_tel"
												placeholder='Phone Number'
												focusBorderColor={'button'}
												textColor={'palette.black'}
											/>
										</InputGroup>
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

									<Button colorScheme="blue" background={'skyblue'} w={'full'} type={'submit'}>
										Send Message
									</Button>
								</VStack>
							</form>
						</Box>
					</Flex>
				</VStack>
			</Flex>
			<Footer />
		</>
	);
}
