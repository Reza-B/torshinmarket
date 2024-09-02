import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";

import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { Appbar } from "@/components/Layout";

export const metadata: Metadata = {
	title: "Torshin Market",
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
						<Container
							maxWidth="xl"
							sx={{
								px: 0,
								pt: 9,
							}}>
							{children}
						</Container>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
