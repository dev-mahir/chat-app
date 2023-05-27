import React from "react";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import { User } from "../../types";

interface PropsType {
	data: User[];
}

const RecentMsgUserCard: React.FC<PropsType> = ({ data }: PropsType) => {
	return (
		<>
			{data.map((user, index: number) => (
				<Link to={`/${user.name}`} key={index}>
					<div className="flex justify-between hover:bg-slate-200 px-3 py-2 rounded-sm">
						<div className="flex gap-x-2 items-end">
							<Avatar alt="mahir" />
							<div>
								<h4 className="hidden md:hidden font-medium">
									Patrick Hendirss
								</h4>
								<p className="hidden lg:block text-xs">okay sure😋😊😊😉 </p>
							</div>
						</div>
						<div className="hidden lg:block">
							<span className="text-gray-400">02.50</span>
							<span className="h-4 w-4 text-[10px] font-semibold rounded-full flex items-center justify-center bg-red-300 text-red-700">
								2
							</span>
						</div>
					</div>
				</Link>
			))}
		</>
	);
};

export default RecentMsgUserCard;
