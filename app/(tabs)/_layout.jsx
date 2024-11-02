import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { colors, icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
	return (
		<View className="items-center justify-center gap-2">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={color}
				className="w-6 h-6"
			/>
			<Text
				className={` ${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
				style={{ color: color }}
			>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout = () => {
	const screens = [
		{ name: 'home', title: 'Home', icon: icons.home },
		{ name: 'bookmark', title: 'Bookmark', icon: icons.bookmark },
		{ name: 'create', title: 'Create', icon: icons.plus },
		{ name: 'profile', title: 'Profile', icon: icons.profile },
	];

	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: colors.secondary,
					tabBarInactiveTintColor: colors.gray100,
					tabBarStyle: {
						backgroundColor: colors.primary,
						borderTopWidth: 1,
						borderTopColor: colors.black200,
						height: 84,
					},
				}}
			>
				{screens.map(({ name, title, icon }) => (
					<Tabs.Screen
						key={name}
						name={name}
						options={{
							title: title,
							headerShown: false,
							tabBarIcon: ({ color, focused }) => (
								<TabIcon
									icon={icon}
									name={title}
									color={color}
									focused={focused}
								/>
							),
						}}
					/>
				))}
			</Tabs>
		</>
	);
};

export default TabsLayout;
