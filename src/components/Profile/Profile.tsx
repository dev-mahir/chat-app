import React from "react";

interface PropsType {
	hide: (value?: React.SetStateAction<boolean>) => void;
}

const Profile: React.FC<PropsType> = ({ hide }) => {
	return (
		<div className="bg-black/30 z-50 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
			<div className="bg-[#f5f7fb] rounded-md shadow_1 px-5 py-10 w-[500px] relative">
				<button
					onClick={() => hide()}
					className="absolute top-2 right-2">
					<i className="text-xl ri-close-line"></i>
				</button>
				<div className="flex gap-5 items-center mt-3">
					<div className="w-[40%]">
						<div className="w-[100px] relative">
							<img
								className="w-full h-full rounded-full border-2 border-white"
								src="http://chatvia-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
								alt=""
							/>
							<button className="bg-[#f5f9f9] h-8 w-8 rounded-full absolute border border-border_color shadow-sm bottom-1 right-1">
								<i className="text-xl ri-pencil-fill"></i>
							</button>
						</div>
					</div>
					<div className="w-[60%]">
						<div className="flex gap-y-3 flex-col">
							<div className="bg-white rounded-sm border-border_color border px-3 py-1">
								<button className="flex w-full justify-between items-center font-medium">
									Personal Info
									<i className="text-2xl ri-arrow-drop-right-line"></i>
								</button>
							</div>
							<div className="bg-white rounded-sm border-border_color border px-3 py-1">
								<button className="flex w-full justify-between items-center font-medium">
									Privacy
									<i className="text-2xl ri-arrow-drop-right-line"></i>
								</button>
							</div>
							<div className="bg-white rounded-sm border-border_color border px-3 py-1">
								<button className="flex w-full justify-between items-center font-medium">
									Security
									<i className="text-2xl ri-arrow-drop-right-line"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
