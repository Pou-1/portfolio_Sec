import React from "react";

type ReactLogoProps = {
	size?: number | string;
	className?: string;
};

const ArrowLogo: React.FC<ReactLogoProps> = ({ size = 24, className = "" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			fill="currentColor"
			className={className}
			width={size}
			height={size}
		>
			<path d="M693.85-313.85 651.08-356l94-94H140v-60h605.08l-93.39-94 42.77-42.15L860-480 693.85-313.85Z" />
		</svg>
	);
};

export default ArrowLogo;
