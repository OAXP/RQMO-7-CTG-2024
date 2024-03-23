import { Flex, Text, Image } from '@chakra-ui/react';
import { colors } from '@src/Theme';
import logo from '@assets/images/rqmo_logo.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
	const navigate = useNavigate();
	return (
		<Flex
			flexDirection={'row'}
			w={'100%'}
			h={'10vh'}
			alignItems={'center'}
			backgroundColor={colors.background}
		>
			<Image borderRadius={'2xl'} w={'10%'} h={'70%'} src={logo} _hover={{ cursor: 'pointer' }} />
			<Flex flexDirection={'column'} w={'100%'} alignItems={'center'}>
				<Flex flexDirection={'row'} alignItems={'center'} gap={'3vw'}>
					<Flex
						textColor={colors.button_text}
						_hover={{ cursor: 'pointer' }}
						onClick={() => {
							navigate('/game');
						}}
					>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Game
						</Text>
					</Flex>
					<Flex
						textColor={colors.button_text}
						_hover={{ cursor: 'pointer' }}
						onClick={() => {
							navigate('/services');
						}}
					>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Services
						</Text>
					</Flex>
					<Flex
						textColor={colors.button_text}
						_hover={{ cursor: 'pointer' }}
						onClick={() => {
							navigate('/search');
						}}
					>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Search
						</Text>
					</Flex>
					<Flex
						textColor={colors.button_text}
						_hover={{ cursor: 'pointer' }}
						onClick={() => {
							navigate('/activities');
						}}
					>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Activities
						</Text>
					</Flex>
					<Flex
						textColor={colors.button_text}
						_hover={{ cursor: 'pointer' }}
						onClick={() => {
							navigate('/help');
						}}
					>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Help
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				alignContent={'center'}
				w={'10%'}
				textColor={colors.button_text}
				_hover={{ cursor: 'pointer' }}
			>
				<Text
					fontWeight={'500'}
					fontSize={'2xl'}
					onClick={() => {
						navigate('/contact');
					}}
				>
					Contact us
				</Text>
			</Flex>
		</Flex>
	);
}
