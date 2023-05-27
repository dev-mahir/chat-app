import React from "react";
import { Link } from "react-router-dom";

const RegisterPage:React.FC = () => {
	return (
		<div className="bg-f7 h-screen flex justify-center items-center">
			<div className="w-[400px]">
				<div className="flex flex-col items-center">
					<h3 className="text-xl font-semibold">Sign in</h3>
					<p>Sign in to continue to Chatvia</p>
				</div>

				<div className="bg-white p-10 mt-5 rounded-md">
					<form className="space-y-4">
						<div>
							<label
								htmlFor="username"
								className="text-[15px] text-primary_text">
								Username
							</label>
							<div className="flex items-center border border-slate-200 h-10 rounded-sm">
								<span className="h-full shrink-0 w-10 bg-[#f5f7fb] border border-border_color inline-flex justify-center items-center">
									<i className="ri-user-2-line text-icon_color"></i>
								</span>
								<input
									type="text"
									id="username"
									className="w-full pl-2"
									placeholder="Enter username"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="text-[15px] text-primary_text">
								Email
							</label>
							<div className="flex items-center border border-slate-200 h-10 rounded-sm">
								<span className="h-full shrink-0 w-10 bg-[#f5f7fb] border border-border_color inline-flex justify-center items-center">
									<i className="ri-mail-line text-icon_color"></i>
								</span>
								<input
									type="email"
									id="email"
									className="w-full pl-2"
									placeholder="Enter email"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="password"
								className="text-[15px] text-primary_text">
								Password
							</label>
							<div className="flex items-center border border-slate-200 h-10 rounded-sm">
								<span className="h-full shrink-0 w-10 bg-[#f5f7fb] border border-border_color inline-flex justify-center items-center">
									<i className="ri-lock-2-line text-icon_color"></i>
								</span>
								<input
									type="password"
									id="password"
									className="w-full pl-2"
									placeholder="Enter password"
								/>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex items-center gap-x-1">
								<input type="checkbox" name="" id="remembar" />
								<label htmlFor="remembar">Remembar me</label>
							</div>
							<div>
								<Link to="/forgot-password">
									Forgot password
								</Link>
							</div>
						</div>
						<button className="bg-primary_bg  w-full py-2 text-white font-medium rounded-sm">
							Sign in
						</button>
					</form>
				</div>
				<div className="flex items-center gap-x-3 justify-center mt-5">
					<p>Don't have an account? </p>
					<Link to="/login" className="text-primary_bg">
						Signin
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
