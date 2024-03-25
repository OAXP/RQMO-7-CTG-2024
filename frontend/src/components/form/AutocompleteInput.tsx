import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';

interface Props {
	options: string[];
	onChange?: (value: string) => void;
	onSelect?: (value: string) => void;
	placeholder: string;
	w: number | string;
}

function AutocompleteInput({ options, onChange, onSelect, placeholder, w }: Props) {
	const [showList, setShowList] = useState(false);
	const [value, setValue] = useState('');
	const [currentOptions, setCurrentOptions] = useState<string[]>(options);

	const onSelectClick = (value: string) => {
		setValue(value);
		setShowList(false);
		if (onSelect) onSelect(value);
		if (onChange) onChange(value);
	};

	return (
		<Box w={w} onFocus={() => setShowList(true)}>
			<Input
				value={value}
				placeholder={placeholder}
				onChange={(event) => {
					setValue(event.target.value);
					setCurrentOptions(
						options.filter(
							function (option) {
								if (
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-ignore
									this.count < 5 &&
									option.toLowerCase().includes(event.target.value.toLowerCase())
								) {
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-ignore
									this.count++;
									return true;
								}
								return false;
							},
							{ count: 0 },
						),
					);
					if (onChange) onChange(event.target.value);
				}}
				borderWidth={'2px'}
				borderRadius={'20px'}
				w={w}
				p={5}
			/>
			<Box
				position={'absolute'}
				bg={'lightgray'}
				zIndex={'modal'}
				w={showList ? w : 0}
				h={showList ? 'full' : 0}
				borderWidth={'1px'}
				borderRadius={'20px'}
				overflow={'hidden'}
			>
				{currentOptions.map((option, index) => (
					<Box
						key={option + index}
						p={5}
						cursor={'pointer'}
						_hover={{ bg: 'gray' }}
						onClick={() => {
							onSelectClick(option);
						}}
					>
						{option.charAt(0).toUpperCase() + option.slice(1)}
					</Box>
				))}
			</Box>
		</Box>
	);
}

export default AutocompleteInput;
