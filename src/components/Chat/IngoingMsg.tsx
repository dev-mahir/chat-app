import React, { useState } from "react";
import VideoMsg from "./Ingoing/VideoMsg";

const IngoingMsg:React.FC = () => {
	const [chatOption, setChatOption] = useState(false);
	return (
		<>
			<div className="flex items-end gap-x-3">
				<div>
					<img
						className="h-9 w-9 rounded-full"
						src="http://chatvia-light.react.themesbrand.com/static/media/avatar-4.b23e41d9c09997efbc21.jpg"
						alt=""
					/>
				</div>
				<div className="flex gap-x-2 items-start">
					<div>
						<div className="__chat_box px-3 py-2 bg-primary_bg rounded-tl-md rounded-tr-md rounded-br-md">
							{/* when text msg  */}
							{/* <p className="text-white">Good moring</p> */}

							{/* when image msg  */}
							{/* <div className="mb-2">
								<p className="text-white font-medium pb-1">images</p>
								<div className="flex gap-x-2 flex-wrap">
									<div className="w-[130px] h-[90px] border border-border_color rounded-[4px] overflow-hidden relative">
										<img
											className="w-full h-full"
											src="http://chatvia-light.react.themesbrand.com/static/media/img-4.c7a84ad5058b9382090e.jpg"
											alt=""
										/>
										<div className="flex gap-x-2 absolute bottom-2 right-3">
											<button>
												<i className="text-lg text-white ri-download-2-line"></i>
											</button>
											<button>
												<i className="text-lg text-white ri-eye-line"></i>
											</button>
										</div>
									</div>
									<div className="w-[130px] h-[90px] border border-border_color rounded-[4px] overflow-hidden relative">
										<img
											className="w-full h-full"
											src="http://chatvia-light.react.themesbrand.com/static/media/img-4.c7a84ad5058b9382090e.jpg"
											alt=""
										/>
										<div className="flex gap-x-2 absolute bottom-2 right-3">
											<button>
												<i className="text-lg text-white ri-download-2-line"></i>
											</button>
											<button>
												<i className="text-lg text-white ri-eye-line"></i>
											</button>
										</div>
									</div>
								</div>
                            </div> */}

							{/* when typing  */}
							{/* <div className="flex items-center gap-x-2">
								<p className="text-white font-medium ">
									typing
								</p>
								<div className="_animate_typing">
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div> */}

							{/* files  */}
							{/* <div>
								<p className="text-white pb-1">Files</p>
								<div className="flex gap-x-6 items-center border border-border_color/50 px-3 py-2 rounded-md">
									<div className="flex gap-x-2 items-center">
										<div>
											<i className="text-2xl text-white ri-file-text-fill"></i>
										</div>
										<div>
											<p className="font-medium text-white">
												admin_v1.zip
											</p>
											<p className="text-xs text-gray-200">
												12.5 MB
											</p>
										</div>
									</div>
									<div className="flex text-white gap-x-2">
										<button>
											<i className="text-lg ri-download-2-line"></i>
										</button>
										<button>
											<i className="text-lg ri-share-line"></i>
										</button>
									</div>
								</div>
							</div> */}

                            {/* when video msg  */}

                            <VideoMsg/>
                            
						
							{/* when typing hide clock  */}
							{/* <p className="flex justify-end gap-x-1 text-gray-300 text-xs">
								<i className="ri-time-line"></i> 09:00
                            </p> */}
						</div>
						<p className="font-medium pt-3">Doris brown</p>
					</div>
					<div className="relative">
						<button
							onClick={() => setChatOption(!chatOption)}
							className="text-primary_bg">
							<i className="ri-more-2-fill"></i>
						</button>
						<div
							className={`absolute top-6 -translate-y-2 left-0 bg-white rounded-[4px] shadow_1 duration-300 py-3 border border-border_color flex flex-col  ${
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
			</div>
		</>
	);
};

export default IngoingMsg;
