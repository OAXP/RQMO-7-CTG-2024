import React, { useContext, useState } from 'react';
import {
	Box,
	Button,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	useToast,
} from '@chakra-ui/react';
import AuthenticationManager from '@services/authenticationService';
import Navbar from '@src/layouts/navbar';
import { colors } from '@src/Theme';
import { ViewIcon, ViewOffIcon } from '@saas-ui/react';
import RootContext from '@hooks/RootContext';
import { RootContextType } from '@src/interfaces/RootContextType';

export default function PasswordPage() {
	const { setIsPasswordValid } = useContext<RootContextType>(RootContext);
	const [passwordInput, setPasswordInput] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const toast = useToast();
	const authenticationManager = new AuthenticationManager();

	const handleSubmit = async () => {
		const res = await authenticationManager.validateAdminPassword(passwordInput);
		const isValid = res === 'Authentication successful';
		setIsPasswordValid(isValid);
		if (!isValid) {
			toast({
				title: 'Authentication failed',
				description: res,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: res,
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Box backgroundColor={colors.background} h={'100vh'}>
			<Navbar />
			<Box p={4} maxW="xl" mx="auto" mt={20}>
				<Text fontSize="xl" fontWeight="bold" mb={4}>
					Enter your password to continue
				</Text>
				<InputGroup>
					<Input
						type={showPassword ? 'text' : 'password'}
						placeholder="Enter password"
						value={passwordInput}
						backgroundColor={'white'}
						onChange={(e) => setPasswordInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								void handleSubmit();
							}
						}}
						pr="3rem"
					/>
					<InputRightElement width="3rem">
						<Button
							h="1.75rem"
							size="sm"
							onClick={() => setShowPassword((prev) => !prev)}
							bg="transparent"
							_hover={{ bg: 'transparent' }}
							_active={{ bg: 'transparent' }}
						>
							{showPassword ? <ViewOffIcon /> : <ViewIcon />}
						</Button>
					</InputRightElement>
				</InputGroup>
				<Button onClick={handleSubmit} colorScheme="blue" mt={3}>
					Submit
				</Button>
			</Box>
		</Box>
	);
}
