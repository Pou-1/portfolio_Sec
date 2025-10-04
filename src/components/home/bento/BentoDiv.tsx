import React, { useEffect, useRef, useState } from "react";
import BentoGrid from "./BentoGrid";

const BentoDiv: React.FC = () => {
	const bentoDivRef = useRef<HTMLDivElement | null>(null);
	const [scrollPercent, setScrollPercent] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!bentoDivRef.current) return;

			const div = bentoDivRef.current;
			const rect = div.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			const scrollTop = -rect.top;

			const scrollableHeight = div.offsetHeight - windowHeight;

			const percent =
				Math.max(0, Math.min(1, scrollTop / scrollableHeight)) * 100;

			setScrollPercent(percent);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div ref={bentoDivRef} className="w-screen h-[180vh]">
			<div className="sticky top-0 w-screen h-screen flex-center px-28">
				<BentoGrid />
				<div className="absolute w-full flex-center bottom-5 px-36">
					<div className="w-full h-1 bg-gray-200" />
				</div>
				<div className="absolute w-full flex-center bottom-5 px-36">
					<div
						style={{ width: `${scrollPercent}%` }}
						className="h-1 bg-customRed"
					/>
				</div>
			</div>
		</div>
	);
};

export default BentoDiv;
