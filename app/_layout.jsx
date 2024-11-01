import { Stack } from 'expo-router'
import '../assets/css/global.css'
import useLoadFonts from '../hooks/useLoadFonts'

const RootLayout = () => {
	const fontsLoaded = useLoadFonts()

	if (!fontsLoaded) {
		return null
	}

	return (
		<>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
			</Stack>
		</>
	)
}

export default RootLayout
