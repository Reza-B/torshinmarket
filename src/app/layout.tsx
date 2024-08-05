import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import "./globals.css";
import { CssBaseline } from "@mui/material";

const vazir = Vazirmatn({ subsets: ["arabic"] });

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
		<html lang="fa">
			<body className={vazir.className}>
				<AppRouterCacheProvider options={{ key: "css" }}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
