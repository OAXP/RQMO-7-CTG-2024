import { Flex, Text, Image, Button, List, ListItem } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import Footer from '@src/layouts/footer';
import { colors } from '@src/Theme';
import zebra from '@assets/images/zebra.jpg';
import aboutus from '@assets/images/aboutus.png';
import target from '@assets/images/target.jpg';
import pratt from '@assets/images/pratt.png';
import fleury from '@assets/images/fleury.png';
import joseph from '@assets/images/joseph.png';
import ouellette from '@assets/images/ouellette.png';
import younes from '@assets/images/younes.png';
import yergeau from '@assets/images/yergeau.png';
import donation from '@assets/images/donation.jpg';
import gameHome from '@assets/images/game-homepage.jpg';
import { useNavigate } from 'react-router-dom';


export default function Home() {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<Flex display={'column'} backgroundColor={colors.background} w={'100%'} h={'100%'}>
				<Flex direction={'column'} alignItems={'center'}>
					<Flex
						marginTop={'10vh'}
						marginBottom={'10vh'}
						direction={'row'}
						justifyContent={'space-between'}
						w={'60%'}
					>
						<Flex direction={'column'} w={'50%'} justifyContent={'space-between'}>
							<Text color={colors.Primary} fontWeight={'700'} fontSize={'6xl'}>
								Welcome to RQMO
							</Text>
							<Flex direction={'column'}>
								<Text fontWeight={'700'} fontSize={'6xl'}>
									Orphan disease ?
								</Text>
								<Text fontWeight={'400'} fontSize={'4xl'}>
									There are more than
									<span style={{ color: colors.button_text }}> 700 000 </span>
									Quebecers like you
								</Text>
							</Flex>
							<Button
								_hover={{ backgroundColor: 'transparent' }}
								backgroundColor={'white'}
								width={'35%'}
								borderColor={colors.Primary}
								borderWidth={'2px'}
								borderRadius={'20px'}
								marginBottom={'20px'}
								onClick={() => {
									navigate('/RQMO-7-CTG-2024/search');
								}}
							>
								<Text color={colors.Primary} fontWeight={'400'} fontSize={'3xl'}>
									Learn more
								</Text>
							</Button>
						</Flex>

						<Image borderRadius={'2xl'} w={'40%'} h={'100%'} src={zebra} />
					</Flex>
				</Flex>
				<Flex direction={'column'} alignItems={'center'}>
					<Flex
						marginTop={'10vh'}
						marginBottom={'10vh'}
						direction={'row'}
						justifyContent={'space-between'}
						w={'80%'}
					>
						<Flex direction={'column'} w={'50%'} gap={'5vh'}>
							<Text color={colors.Primary} fontWeight={'700'} fontSize={'6xl'}>
								About Us
							</Text>
							<Flex direction={'column'}>
								<Text fontWeight={'400'} fontSize={'3xl'}>
									Our vision is to empower people living with rare diseases to manage their disease
									and to participate in research so they don't feel so orphaned. Our values are
									based on{' '}
									<Text as="span" color={colors.button_text}>
										engagement
									</Text>{' '}
									,
									<Text as="span" color={colors.button_text}>
										integrity
									</Text>{' '}
									,{' '}
									<Text as="span" color={colors.button_text}>
										inclusion
									</Text>{' '}
									and
									<Text as="span" color={colors.button_text}>
										{' '}
										collaboration
									</Text>
									.
								</Text>
							</Flex>
						</Flex>

						<Image borderRadius={'2xl'} w={'40%'} h={'100%'} src={aboutus} />
					</Flex>
				</Flex>
				<Flex direction={'column'} alignItems={'center'}>
				<Flex marginTop={'10vh'} marginBottom={'10vh'} direction={'row'} justifyContent={'space-between'} w={'80%'}>
						<Image borderRadius={'2xl'} w={'40%'} h={'100%'} src={target} />
						<Flex direction={'column'} w={'50%'} gap={'5vh'} >
							<Text color={colors.Primary} fontWeight={'700'} fontSize={'6xl'}>
								Our Mission
							</Text>
							<Flex direction={'column'}>
								
								<List styleType="disc" fontWeight={'400'} fontSize={'3xl'}>
									<ListItem>IRARE information and assistance center </ListItem> 
									<ListItem>Share information on rare diseases and their challenges </ListItem>
									<ListItem>Raise awareness among the general population and within the medical system </ListItem>
									<ListItem>Promote research and contact between patients and researchers </ListItem>
								</List>
							</Flex>
							
						</Flex>

						
					</Flex>
				</Flex>
				<Flex marginTop={'10vh'} marginBottom={'10vh'} direction={'column'} alignItems={'center'}>
						<Flex direction={'column'} w={'100%'} gap={'5vh'} alignItems={'center'} >
							<Text color={colors.Primary} fontWeight={'700'} fontSize={'6xl'}>
								Our Team
							</Text>
							<Flex direction={'row'} gap={'3vw'} >
								<Flex direction= {'column'} alignItems={'center'} gap={'10px'}>
									<Text fontWeight={'500'} fontSize={'3xl'}>Jonathan Pratt</Text>
									<Image borderRadius={'2xl'}  src={pratt} />
									<Text fontWeight={'400'} fontSize={'2xl'}>Executive Director</Text>
								</Flex>
								<Flex direction= {'column'} alignItems={'center'} gap={'10px'}>
									<Text fontWeight={'500'} fontSize={'3xl'}>Christine Yergeau</Text>
									<Image borderRadius={'2xl'}  src={yergeau} />
									<Text fontWeight={'400'} fontSize={'2xl'}>Research and Partnerships</Text>
								</Flex>
								<Flex direction= {'column'} alignItems={'center'} gap={'10px'}>
									<Text fontWeight={'500'} fontSize={'3xl'}>Marie-Ève Fleury</Text>
									<Image borderRadius={'2xl'}  src={fleury} />
									<Text fontWeight={'400'} fontSize={'2xl'}>Research and Partnerships</Text>
								</Flex>
								<Flex direction= {'column'} alignItems={'center'} gap={'10px'}>
									<Text fontWeight={'500'} fontSize={'3xl'}>Ingrid Younes</Text>
									<Image borderRadius={'2xl'}  src={younes} />
									<Text fontWeight={'400'} fontSize={'2xl'}>Patient Engagement</Text>
								</Flex>
								<Flex direction= {'column'} alignItems={'center'} gap={'10px'}>
									<Text fontWeight={'500'} fontSize={'3xl'}>Caroline Joseph</Text>
									<Image borderRadius={'2xl'}  src={joseph} />
									<Text fontWeight={'400'} fontSize={'2xl'}>Administrative Assistant </Text>
								</Flex>
								<Flex direction= {'column'} alignItems={'center'} gap={'10px'}>
									<Text fontWeight={'500'} fontSize={'3xl'}>Gail Ouellette</Text>
									<Image borderRadius={'2xl'}  src={ouellette} />
									<Text fontWeight={'400'} fontSize={'2xl'}>Special Projects</Text>
								</Flex>													
							</Flex>
							
						</Flex>
				</Flex>
				<Flex direction={'column'} alignItems={'center'}>
					<Flex
						marginTop={'10vh'}
						marginBottom={'10vh'}
						direction={'row'}
						justifyContent={'space-between'}
						w={'80%'}
					>
						<Flex direction={'column'} w={'50%'} gap={'5vh'}>
							<Text color={colors.Primary} fontWeight={'700'} fontSize={'6xl'}>
								Donations
							</Text>
							<Flex direction={'column'}>
								<Text fontWeight={'400'} fontSize={'3xl'}>
									Help us make a difference to people with a rare disease !
									Donating to the RQMO helps us pursue our mission which is 
									to support and inform all people affected by rare diseases in Quebec
								</Text>
							</Flex>
							<Button
								_hover={{ backgroundColor: 'transparent' }}
								backgroundColor={'white'}
								width={'35%'}
								borderColor={colors.Primary}
								borderWidth={'2px'}
								borderRadius={'20px'}
								marginBottom={'20px'}
								onClick={() => {
									navigate('/RQMO-7-CTG-2024/help');
								}}
							>
								<Text color={colors.Primary} fontWeight={'400'} fontSize={'3xl'}>
									Make a Donation
								</Text>
							</Button>
						</Flex>

						<Image borderRadius={'2xl'} w={'40%'} h={'100%'} src={donation} />
					</Flex>
				</Flex>
				<Flex direction={'column'} alignItems={'center'}>
				<Flex marginTop={'10vh'} marginBottom={'15vh'} direction={'row'} justifyContent={'space-between'} w={'80%'}>
						<Image borderRadius={'2xl'} w={'40%'} h={'100%'} src={gameHome} />
						<Flex direction={'column'} w={'50%'} gap={'5vh'} >
							<Text color={colors.Primary} fontWeight={'700'} fontSize={'6xl'}>
								Game
							</Text>
							<Flex direction={'column'}>
								<Text fontWeight={'400'} fontSize={'3xl'}>
									Do you want to know what does the reality of a rare disease diagnosis looks like ? <br/>
									Try our interactive game !

								</Text>
							</Flex>
							<Button
								_hover={{ backgroundColor: 'transparent' }}
								backgroundColor={'white'}
								width={'35%'}
								borderColor={colors.Primary}
								borderWidth={'2px'}
								borderRadius={'20px'}
								marginBottom={'20px'}
								onClick={() => {
									navigate('/RQMO-7-CTG-2024/game');
								}}
							>
								<Text color={colors.Primary} fontWeight={'400'} fontSize={'3xl'}>
									Play here
								</Text>
							</Button>
						</Flex>

						
					</Flex>
				</Flex>
				
			</Flex>
			<Footer/>
		</>
	);
}
