import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";

import {
	Box,
	Container,
	CssBaseline,
	ThemeProvider,
	Toolbar,
} from "@mui/material";
import theme from "@/theme";
import Appbar from "@/components/Appbar";

export const metadata: Metadata = {
	title: "torshin market",
	description: "یک سایت برای خرید انواع ترشیجات و لواشک",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa-IR">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Appbar />
						<Box
							sx={{
								mt: 8,
								height: "100vh",
								widows: "100vw",
								bgcolor: "#F7F9F2",
							}}>
							{children}
						</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
