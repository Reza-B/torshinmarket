import React, { useEffect, useRef } from "react";
import { TextField, Grid } from "@mui/material";

const CodeInput = ({
	code,
	setCode,
}: {
	code: string[];
	setCode: Function;
}) => {
	const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

	useEffect(() => {
		inputsRef.current[0]?.focus();
	}, []);

	const handleChange = (element: HTMLInputElement, index: number) => {
		const value = element.value.replace(/[^0-9]/g, "");
		if (value.length > 1) return;

		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);

		if (value.length > 0 && index < 5) {
			inputsRef.current[index + 1]?.focus();
		} else if (value.length === 0 && index > 0) {
			inputsRef.current[index - 1]?.focus();
		}
	};

	return (
		<div style={{ maxWidth: "300px", margin: "auto" }}>
			<Grid
				container
				spacing={0.5}>
				{code.map((value, index) => (
					<Grid
						item
						xs
						key={index}>
						<TextField
							inputProps={{
								style: {
									textAlign: "center",
									fontSize: "1rem",
									fontWeight: "bold",
									width: "36px",
									height: "36px",
									padding: "0",
								},
								maxLength: 1,
								ref: (el: HTMLInputElement) => (inputsRef.current[index] = el),
							}}
							value={value}
							onChange={(e) =>
								handleChange(e.target as HTMLInputElement, index)
							}
							variant="outlined"
							required
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CodeInput;
