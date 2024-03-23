import { Flex, Text, Image, Button } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import { colors } from '@src/Theme';
import zebra from '@assets/images/zebra.jpg';
import aboutus from '@assets/images/aboutus.png';

export default function Home() {
	return (
		<>
			<Navbar />
			<Flex display={'column'} backgroundColor={colors.background} w={'100%'} h={'100%'}>
				<Flex direction={'column'} alignItems={'center'}>
					<Flex marginTop={'10vh'} marginBottom={'10vh'} direction={'row'} justifyContent={'space-between'} w={'60%'}>
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
				<Flex marginTop={'10vh'} marginBottom={'10vh'} direction={'row'} justifyContent={'space-between'} w={'80%'}>
						<Flex direction={'column'} w={'50%'} gap={'5vh'}>
							<Text color={colors.Primary} fontWeight={'700'} fontSize={'6xl'}>
								About us
							</Text>
							<Flex direction={'column'}>
								
								<Text fontWeight={'400'} fontSize={'3xl'}>
									Our vision is to empower people living with rare diseases to manage their disease and to 
									participate in research so they don't feel so orphaned. Our values are based on <Text as="span" color= {colors.button_text}>engagement</Text> , 
									<Text as="span" color= {colors.button_text}>integrity</Text> , <Text as="span" color= {colors.button_text}>inclusion</Text> and  
									<Text as="span" color= {colors.button_text}> collaboration</Text>. 
								</Text>
							</Flex>
							
						</Flex>

						<Image borderRadius={'2xl'} w={'40%'} h={'100%'} src={aboutus} />
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
