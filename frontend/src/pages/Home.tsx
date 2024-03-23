import { Flex, Text, Image, Button } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import { colors } from '@src/Theme';
import zebra from '@assets/images/zebra.jpg';

export default function Home() {
	return (
		<>
			<Navbar />
			<Flex display={'column'} backgroundColor={colors.background} w={'100%'} h={'100vh'}>
				<Flex direction={'column'} alignItems={'center'}>
					<Flex marginTop={'15vh'} direction={'row'} justifyContent={'space-between'} w={'60%'}>
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
			</Flex>
		</>
	);
}
