"use client";

import { Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const vazir = Vazirmatn({
	weight: ["300", "400", "500", "700"],
	subsets: ["arabic"],
	display: "swap",
});

const theme = createTheme({
	typography: {
		fontFamily: vazir.style.fontFamily,
	},
	palette: {
		background: {default: "#F7F9F2"},
	}
});

export default theme;
