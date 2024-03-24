import { Flex, Text, UnorderedList, Link, Button, ListItem } from '@chakra-ui/react';
import { colors } from '@src/Theme';
import Navbar from '@src/layouts/navbar';
import Footer from '@src/layouts/footer';
import { useNavigate } from 'react-router-dom';

export default function Help() {
	const navigate = useNavigate();
	return (
		<Flex
			direction={'column'}
			justifyContent={'space-between'}
			backgroundColor={colors.background}
			minHeight="100vh"
		>
			<Navbar />
			<Flex
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				p={8}
				borderRadius="lg"
			>
				<Text fontSize="4xl" textAlign="center" color="dimgrey" fontWeight="bold" mb={10}>
					How Can You Make a Difference?
				</Text>
				<Flex justifyContent="center" flexDirection="column" textAlign="left">
					<Text color="dimgrey" fontSize="xl" fontWeight="semibold" mb={4}>
						Are you in good shape and willing to contribute ?
					</Text>
					<Text fontSize="lg" fontWeight="semibold" mb={4}>
						You can donate :
					</Text>
					<Text fontSize={'m'}>
						<UnorderedList mb={4}>
							<ListItem>Blood</ListItem>
							<ListItem>Plasma</ListItem>
							<ListItem>Stem Cells</ListItem>
							<ListItem>Umbilical Cord Blood</ListItem>
							<ListItem>Maternal Milk</ListItem>
						</UnorderedList>
					</Text>
					<Button colorScheme="blue" size="lg" mb={8}>
						<Link href="https://www.hema-quebec.qc.ca/index.en.html" isExternal>
							Click Here to Contact Héma-Québec and Explore Your Options
						</Link>
					</Button>
				</Flex>
				<Flex justifyContent="center" flexDirection="column" textAlign="center">
					<Text fontSize="xl" color="black" fontWeight="semibold" mb={4}>
						Want to do more?
					</Text>
					<Button colorScheme="blue" size="lg" mb={4}>
						<Link href="https://www.canadahelps.org/fr/dn/30850" isExternal>
							Donate on the Canadon Website
						</Link>
					</Button>
					<Button
						colorScheme="blue"
						size="lg"
						mb={4}
						onClick={() => navigate('/RQMO-7-CTG-2024/contact')}
					>
						Contact Us To Volunteer
					</Button>
				</Flex>
			</Flex>
			<Footer />
		</Flex>
	);
}
