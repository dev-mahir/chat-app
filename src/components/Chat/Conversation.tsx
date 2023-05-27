import { useState } from "react";
import OutgoingMsg from "./OutgoingMsg";
import IngoingMsg from "./IngoingMsg";

const Conversation = () => {
	const [chatOption, setChatOption] = useState(false);
	const me = true;
	return (
		<>
			<div className="flex justify-between items-center border-b border-border_color p-5">
				<div className="flex gap-x-2 items-center">
					<img
						className="h-10 w-10 rounded-full"
						src="http://chatvia-light.react.themesbrand.com/static/media/avatar-4.b23e41d9c09997efbc21.jpg"
						alt=""
					/>
					<p className="font-semibold">Dorish Brown</p>
					<div className=" h-2 w-2 rounded-full border-emerald-400 p-[1px] border-4"></div>
				</div>
				<div className="flex items-center gap-x-7">
					<button>
						<i className="text-lg  text-[#7a7f9a] ri-search-line"></i>
					</button>
					<button>
						<i className="text-lg  text-[#7a7f9a] ri-phone-line"></i>
					</button>
					<button>
						<i className="text-lg  text-[#7a7f9a] ri-vidicon-line"></i>
					</button>
					<button>
						<i className="text-lg  text-[#7a7f9a] ri-user-2-line"></i>
					</button>
					<button>
						<i className="text-lg text-[#7a7f9a] ri-more-fill"></i>
					</button>
				</div>
			</div>

			{/* conversation section  */}

			<div className="h-[73%] p-5">
				<div className="space-y-4">
					{/* incoming msg  */}

					<IngoingMsg />

					{/* outgoing msg  */}

					<OutgoingMsg />
				</div>
			</div>

			<div className="flex items-center gap-x-10 px-3  border-t py-6 border-border_color ">
				<div className="bg-[#e6ebf5] py-2 px-2 flex items-center gap-x-3 rounded-md flex-grow">
					<input
						type="text"
						placeholder="Enter message..."
						className="bg-transparent w-full pl-2 placeholder:text-primary_text"
					/>
				</div>

				<div className=" flex items-center gap-x-6">
					<button>
						<i className="text-[#6159cb] ri-emotion-happy-line"></i>
					</button>
					<button>
						<i className="text-[#6159cb]  ri-attachment-line"></i>
					</button>
					<button>
						<i className="text-[#6159cb]  ri-image-fill"></i>
					</button>
					<button className="bg-[#6159cb] px-3 rounded-md py-2">
						<i className="text-white  ri-send-plane-2-fill"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default Conversation;
