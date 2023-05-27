import React, { useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Profile from "../components/Profile/Profile";

const HomePage: React.FC = () => {
	const [profileShow, setProfileShow] = useState<boolean>(false);

	return (
		<>
			<div className="flex min-h-screen">
				<div className="border-r text-center bg-[#f5f7fb] border-border_color  lg:w-[25%] md:px-5 py-5">
					<div
						onClick={() => setProfileShow(!profileShow)}
						className="mb-3 inline-flex  items-center gap-x-2 cursor-pointer">
						<Avatar alt="mahir" className="lg:w-10 lg:h-10" />
						<h4 className="hidden lg:block text-base font-semibold">
							Md Mahir Uddin
						</h4>
					</div>
					{profileShow && <Profile hide={setProfileShow} />}
					<Sidebar />
				</div>
				<div className=" md:flex-grow">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default HomePage;
