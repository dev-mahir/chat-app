import React from "react";
import UserCard from "../User/UserCard";
import RecentMsgUserCard from "../User/RecentMsgUserCard";

import { User } from "../../types.ts";

const Sidebar: React.FC = () => {
	const recentUser: User[] = [
		{ id: 0, name: "mahir" },
		{ id: 1, name: "mannan" },
		{ id: 2, name: "jobber" },
	];

	return (
		<div>
			<div className="rounded-md">
				<div className="flex justify-center   bg-[#e6ebf5] py-2 px-2 mx-5 md:mx-0 items-center gap-x-3 rounded-md overflow-hidden">
					<i className="ri-search-line"></i>
					<input
						type="text"
						placeholder="Search users"
						className="hidden lg:block w-full bg-transparent text-sm placeholder:text-primary_text"
					/>
				</div>
			</div>
			<div className="hidden lg:flex gap-x-1 mt-5  items-center">
				<button className="bg-gray-200  h-6 !w-6 flex items-center justify-center rounded-full">
					<i className="text-3xl ri-arrow-drop-left-line"></i>
				</button>
				<div className="flex gap-x-5 items-center overflow-x-clip">
					<UserCard />
					<UserCard />
					<UserCard />
					<UserCard />
					<UserCard />
					<UserCard />
					<UserCard />
					<UserCard />
				</div>
				<button className="bg-gray-200  h-6 !w-6 flex items-center justify-center rounded-full">
					<i className="text-3xl ri-arrow-drop-right-line"></i>
				</button>
			</div>
			<div className="py-5">
				<h4 className="text-base text-primary_text font-semibold">
					Recent
				</h4>
				<div className="mt-2 space-y-2">
					<RecentMsgUserCard data={recentUser} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
