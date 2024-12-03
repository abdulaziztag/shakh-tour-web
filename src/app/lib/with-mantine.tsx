import { createTheme, MantineProvider } from "@mantine/core"
import { ComponentType } from "react"

const theme = createTheme({
	/** Your theme override here */
	fontFamily: "TT Norms Pro, sans-serif",
})

export const WithMantine =
	<T extends object>(Component: ComponentType<T>) =>
	(props: T) => (
		<MantineProvider theme={theme}>
			<Component {...props} />
		</MantineProvider>
	)
