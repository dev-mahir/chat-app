import { useEffect, useRef, useState } from "react";

interface PropsType {
	initialState: boolean;
}

type RefType = React.RefObject<HTMLDivElement>;

const useModal = ({ initialState }: PropsType) => {
	const ref = useRef<RefType>(null);
	const [show, setShow] = useState<boolean>(initialState);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current?.contains(e.target as Node)) {
				setShow(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
	}, []);

	return [ref, show, setShow];
};

export default useModal;
