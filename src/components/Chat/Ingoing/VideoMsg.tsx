import React from "react";
import ReactPlayer from "react-player";
import video from "../../../assets/video/helicopter.mp4";

const VideoMsg = () => {
	return (
		<div className="mb-2">
			<p className="text-white font-medium pb-1">images</p>
			<div className="flex gap-x-2 flex-wrap">
				<div className="sm:w-[300px] h-[200px] border border-border_color rounded-[4px] overflow-hidden relative">
					<div className="h-full w-full relative">
						<ReactPlayer
							muted
							controls
							width="100%"
							height="100%"
							url={video}
						/>
					</div>
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
		</div>
	);
};

export default VideoMsg;
