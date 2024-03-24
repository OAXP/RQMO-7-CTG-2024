import { Flex, Text, Image } from '@chakra-ui/react';
import { colors } from '@src/Theme';
import logo from '@assets/images/rqmo_logo.png';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
	const handleFacebookClick = () => {
		window.location.href = 'https://www.facebook.com/RQMOrphelines/';
	};
	const handleYoutubeClick = () => {
		window.location.href = 'https://www.youtube.com/RQMOMalOrph';
	};
	const navigate = useNavigate();
	return (
		<Flex
			flexDirection={'row'}
			w={'100%'}
			h={'10vh'}
			alignItems={'center'}
			backgroundColor={'white'}
		>
			<Image
				borderRadius={'2xl'}
				w={'10%'}
				h={'70%'}
				src={logo}
				_hover={{ cursor: 'pointer' }}
				onClick={() => {
					navigate('/RQMO-7-CTG-2024/home');
				}}
			/>
			<Flex flexDirection={'column'} w={'100%'} alignItems={'center'}>
				<Flex flexDirection={'row'} alignItems={'center'} gap={'3vw'}>
					<Flex textColor={colors.button_text} _hover={{ cursor: 'pointer' }}>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Terms Of Service
						</Text>
					</Flex>

					<Flex textColor={colors.button_text} _hover={{ cursor: 'pointer' }}>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Privacy Policy
						</Text>
					</Flex>
					<Flex
						textColor={colors.button_text}
						_hover={{ cursor: 'pointer' }}
						onClick={handleFacebookClick}
					>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Facebook
						</Text>
					</Flex>
					<Flex
						textColor={colors.button_text}
						_hover={{ cursor: 'pointer' }}
						onClick={handleYoutubeClick}
					>
						<Text fontWeight={'700'} fontSize={'2xl'}>
							Youtube
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
						navigate('/RQMO-7-CTG-2024/contact');
					}}
				>
					Contact us
				</Text>
			</Flex>
		</Flex>
	);
}
