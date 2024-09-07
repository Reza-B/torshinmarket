"use client";

import {
	Box,
	Button,
	Dialog,
	FormControl,
	IconButton,
	InputAdornment,
	Typography,
	InputBase,
} from "@mui/material";

import styled from "@emotion/styled";
import React, { useState } from "react";
import CodeInput from "./CodeInput";

//
const CustomInput = styled(InputBase)(() => ({
	"& .MuiInputBase-input": {
		borderRadius: 10,
		backgroundColor: "#ECECED",
		padding: "10px 12px",
		"&:focus": {
			border: "1px solid",
			backgroundColor: "#FFFFFF",
		},
	},
}));

const LoginModal = ({
	open,
	handleClose,
}: {
	open: boolean;
	handleClose: any;
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const [code, setCode] = useState<string[]>(new Array(6).fill(""));
	const [phone, setPhone] = useState("");
	const [step, setStep] = useState(0);
	const [pass, setPass] = useState("");

	const handleEnterPhone = async () => {
		try {
			console.log(phone);
			const isRegistered = false;
			setPhone("");
			if (isRegistered) {
				setStep(2);
			} else {
				setStep(1);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleEnterRegister = async () => {
		try {
			console.log({
				code: code.toString().replaceAll(",", ""),
				phone,
				password: pass,
			});
			setCode(new Array(6).fill(""));
			setPhone("");
			setPass("");
			setStep(2);
		} catch (error) {
			console.log(error);
		}
	};
	const handleEnterLoginCode = async () => {
		try {
			console.log({ code: code.toString().replaceAll(",", "") });
			setCode(new Array(6).fill(""));
			setStep(3);
		} catch (error) {
			console.log(error);
		}
	};
	const handleEnterLoginPassword = async () => {
		try {
			console.log({ password: pass });
			handleClose();
		} catch (error) {
			console.log(error);
		}
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{
				"& .MuiDialog-paper": {
					maxWidth: 350,
					borderRadius: 5,
					p: 4,
					gap: 4,
				},
			}}>
			<Typography
				align="center"
				variant="h6"
				sx={{
					direction: "rtl",
				}}>
				{"به ترشین خوش اومدید!"}
			</Typography>
			<Box>
				{step === 0 && (
					<>
						<FormControl
							fullWidth
							sx={{
								mt: 3,
							}}>
							<Typography
								sx={{
									direction: "rtl",
									fontSize: "14px",
									mb: 1,
								}}
								variant="h6"
								fontWeight={500}>
								{"شماره موبایل خودتو وارد کن: "}
							</Typography>
							<CustomInput
								placeholder="09"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</FormControl>
						<Button
							onClick={handleEnterPhone}
							fullWidth
							sx={{
								mt: 7,
								bgcolor: "#129F85",
								"&: hover": {
									bgcolor: "#1a7463",
								},
								borderRadius: 3,
								px: 3.5,
							}}
							variant="contained">
							<Typography variant="subtitle1">{"ورود / ثبت نام"}</Typography>
						</Button>
					</>
				)}
				{step === 1 && (
					<>
						<FormControl
							fullWidth
							sx={{
								mt: 3,
							}}>
							<Typography
								sx={{
									direction: "rtl",
									fontSize: "14px",
									mb: 1,
								}}
								variant="h6"
								fontWeight={500}>
								{"نام"}
							</Typography>
							<CustomInput
								dir="rtl"
								placeholder="نام خود را وارد کنید."
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
							<Typography
								sx={{
									direction: "rtl",
									fontSize: "14px",
									mb: 1,
									mt: 1,
								}}
								variant="h6"
								fontWeight={500}>
								{"کلمه عبور"}
							</Typography>
							<CustomInput
								sx={{
									direction: "rtl",
								}}
								placeholder="کلمه عبور خود را وارد کنید."
								value={pass}
								onChange={(e) => setPass(e.target.value)}
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											onClick={handleClickShowPassword}
											edge="start">
											{showPassword ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="24"
													height="24">
													<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z" />
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="24"
													height="24">
													<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" />
												</svg>
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
							<Typography
								sx={{
									direction: "rtl",
									fontSize: "14px",
									mb: 1,
									mt: 3,
								}}
								variant="h6"
								fontWeight={500}>
								{"لطفا کد ارسال شده به شماره موبایلتان را وارد کنید"}
							</Typography>
							<CodeInput
								code={code}
								setCode={setCode}
							/>
						</FormControl>
						<Typography
							align="right"
							variant="subtitle2"
							sx={{
								mt: 5,
								fontSize: "12px",
							}}>
							{".ثبت نام شما به معنای پذیرش قوانین و مقررات ترشین است"}
						</Typography>
						<Button
							onClick={handleEnterRegister}
							fullWidth
							sx={{
								mt: 1,
								bgcolor: "#129F85",
								"&: hover": {
									bgcolor: "#1a7463",
								},
								borderRadius: 3,
								px: 3.5,
							}}
							variant="contained">
							<Typography variant="subtitle1">{"ثبت نام"}</Typography>
						</Button>
					</>
				)}
				{step === 2 && (
					<>
						<FormControl
							fullWidth
							sx={{
								mt: 3,
							}}>
							<Typography
								sx={{
									direction: "rtl",
									fontSize: "14px",
									mb: 1,
									mt: 3,
								}}
								variant="h6"
								fontWeight={500}>
								{"لطفا کد ارسال شده به شماره موبایلتان را وارد کنید"}
							</Typography>
							<CodeInput
								code={code}
								setCode={setCode}
							/>
						</FormControl>
						<Button
							onClick={handleEnterLoginCode}
							fullWidth
							sx={{
								mt: 7,
								bgcolor: "#129F85",
								"&: hover": {
									bgcolor: "#1a7463",
								},
								borderRadius: 3,
								px: 3.5,
							}}
							variant="contained">
							<Typography variant="subtitle1">{"ورود"}</Typography>
						</Button>
					</>
				)}
				{step === 3 && (
					<>
						<FormControl
							fullWidth
							sx={{
								mt: 3,
							}}>
							<Typography
								sx={{
									direction: "rtl",
									fontSize: "14px",
									mb: 1,
									mt: 1,
								}}
								variant="h6"
								fontWeight={500}>
								{"کلمه عبور"}
							</Typography>
							<CustomInput
								sx={{
									direction: "rtl",
								}}
								placeholder="کلمه عبور خود را وارد کنید."
								value={pass}
								onChange={(e) => setPass(e.target.value)}
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											onClick={handleClickShowPassword}
											edge="start">
											{showPassword ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="24"
													height="24">
													<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z" />
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="24"
													height="24">
													<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" />
												</svg>
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<Button
							onClick={handleEnterLoginPassword}
							fullWidth
							sx={{
								mt: 7,
								bgcolor: "#129F85",
								"&: hover": {
									bgcolor: "#1a7463",
								},
								borderRadius: 3,
								px: 3.5,
							}}
							variant="contained">
							<Typography variant="subtitle1">{"ورود"}</Typography>
						</Button>
					</>
				)}
			</Box>
		</Dialog>
	);
};

export default LoginModal;

/*
<FormControl
					fullWidth
					sx={{
						mt: 3,
					}}>
					<InputLabel shrink>
						<Typography
							variant="h6"
							fontWeight={700}>
							{"کلمه عبور"}
						</Typography>
					</InputLabel>
					<CustomInput
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={handleClickShowPassword}
									edge="end">
									{showPassword ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24">
											<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z" />
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24">
											<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" />
										</svg>
									)}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
 */
