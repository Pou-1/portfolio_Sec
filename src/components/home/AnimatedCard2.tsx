import React, { forwardRef } from "react";
import GithubAvatars from "./GithubAvatars";

type AnimatedCardProps = {
	image: string;
	text: string;
	logos: React.ReactNode[];
	colorGradient: string;
	workers: string[];
};

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
	({ image, text, logos, colorGradient, workers }, ref) => {
		//const [cursorHover, setCursorHover] = useState<boolean>(false);

		return (
			<div className="w-full h-full relative" ref={ref}>
				<div
					className={`absolute z-20 w-full h-full flex items-end ${colorGradient} via-transparent via-70%`}
				>
					<div className="p-4 flex items-end justify-between w-full">
						<p className="text-white text-5xl w-full">{text}</p>
						<div className="w-full flex-center">
							<GithubAvatars usernames={workers} />
						</div>
						<div className="flex gap-5 w-full justify-end">
							{logos.map((logo, index) => (
								<span
									className="bg-white/10 hover:bg-white/20 trans-fast py-2 px-4 rounded-xl"
									key={index}
								>
									{logo}
								</span>
							))}
						</div>
					</div>
				</div>
				<div
					className={`bg-white group relative w-full h-full flex flex-col shadow-md z-10 
            transition-all duration-700 ease-in-out 
          `}
				>
					<div
						className="overflow-hidden h-[100vh] w-full relative bg-cover bg-fixed bg-center"
						style={{ backgroundImage: `url(${image})` }}
					></div>
				</div>
			</div>
		);
	}
);

export default AnimatedCard;
