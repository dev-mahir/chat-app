type PropsType = {
	className?: string;
	alt: string;
};

const Avatar: React.FC<PropsType> = ({ className, alt }) => {
	return (
		<img
			className={`h-12 w-12 rounded-full object-cover ${className}`}
			src="https://avatars.githubusercontent.com/u/95497010?v=4"
			alt={alt}
		/>
	);
};

export default Avatar;
