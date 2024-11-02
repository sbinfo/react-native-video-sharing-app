import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({
	title,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
}) => {
	return (
		<TouchableOpacity
			className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
				isLoading ? 'opacity-50' : ''
			}`}
			disabled={isLoading}
			activeOpacity={0.8}
			onPress={handlePress}
		>
			<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
