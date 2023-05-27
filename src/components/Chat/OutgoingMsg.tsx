import { useState } from "react";
import Avatar from "../Avatar/Avatar";


const OutgoingMsg = () => {
	const [chatOption, setChatOption] = useState(false);
	return (
		<div className="flex justify-end">
			<div className="flex flex-row-reverse items-end gap-x-3">
				<div>
					<Avatar alt="User" />
				</div>
				<div className="flex gap-x-2 items-start">
					<div>
						<div className="relative">
							<button
								onClick={() => setChatOption(!chatOption)}
								className="text-primary_bg">
								<i className="ri-more-2-fill"></i>
							</button>
							<div
								className={`absolute top-6 -translate-y-2 right-0 bg-white rounded-[4px] shadow_1 duration-300 py-3 border border-border_color flex flex-col  ${
									chatOption
										? "translate-y-0 opacity-100 visible"
										: "opacity-0 invisible"
								}`}>
								<button className="flex px-4 py-1 hover:bg-gray-50 items-center justify-between gap-x-4">
									<span>Copy</span>
									<i className="ri-file-copy-line"></i>
								</button>
								<button className="flex px-4 py-1 hover:bg-gray-50 items-center justify-between gap-x-4">
									<span>Save</span>
									<i className="ri-save-line"></i>
								</button>
								<button className="flex px-4 py-1 hover:bg-gray-50 items-center justify-between gap-x-4">
									<span>Forward</span>
									<i className="ri-chat-forward-line"></i>
								</button>
								<button className="flex px-4 py-1 hover:bg-gray-50 items-center justify-between gap-x-4">
									<span>Delete</span>
									<i className="ri-delete-bin-line"></i>
								</button>
							</div>
						</div>
					</div>
					<div>
						<div className="px-3 py-2 bg-primary_bg rounded-tl-md rounded-tr-md rounded-br-md">
							<p className="text-white">Good moring</p>
							<p className="flex justify-end gap-x-1 text-gray-300 text-xs">
								<i className="ri-time-line"></i> 09:00
							</p>
						</div>
						<p className="font-medium text-right">Doris brown</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OutgoingMsg;
