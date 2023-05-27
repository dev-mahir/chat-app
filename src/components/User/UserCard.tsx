import React from "react";

const UserCard = () => {
	return (
		<div className="w-[50px] flex justify-center flex-col items-center">
			<div className="relative h-9 w-9">
				<img
					className=" w-full h-full rounded-full"
					src="http://chatvia-light.react.themesbrand.com/static/media/avatar-4.b23e41d9c09997efbc21.jpg"
					alt=""
				/>
				<div className=" absolute right-[0px] bottom-[2px] h-3 w-3 rounded-full bg-emerald-400 border-2 border-white"></div>
			</div>
			<div className="bg-[#e6ebf5] px-3 py-2 -mt-4 rounded-md">
				<p className="pt-2 font-semibold text-[13px]">Doris</p>
			</div>
			
		</div>
	);
};

export default UserCard;
