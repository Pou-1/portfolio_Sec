import React, { useContext } from "react";
import Picrew from "../../assets/imgs/picrew_no_bg.png";
import ArrowLogo from "../../assets/logo/ArrowLogo";
import GithubLogo from "../../assets/logo/GithubLogo";
import LinkedinLogo from "../../assets/logo/LinkedinLogo";
import { useTranslation } from "react-i18next";
import CVLogo from "../../assets/logo/CVLogo";
import { useCursor } from "../cursor/CursorFunct";
import { ThemeContext } from "../ThemeProvider";

type AnimatedCardProps = {
	scrollY: number;
};

const FirstCardDiv: React.FC<AnimatedCardProps> = () => {
	const { t } = useTranslation();
	const { handleHover, resetCursor } = useCursor();
	const themeContext = useContext(ThemeContext);

	return (
		<div className="relative flex-col w-full h-screen border-b flex-center border-customDark">
			<div className="relative max-w-3xl p-5 mx-auto mt-20 ml-4 mr-4">
				{/* Circle top left */}
				<div className="absolute top-0 left-0 z-20 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full md:w-32 md:h-32 bg-customRed" />
				{/* Circle bottom right */}
				<div className="absolute bottom-0 right-0 w-16 h-16 translate-x-1/2 translate-y-1/2 rounded-full md:w-28 md:h-28 bg-customGreen" />

				{/* Content */}
				<div className="relative z-30 flex flex-col w-full h-full shadow-lg bg-white/50 dark:bg-customDark/50 dark:text-white backdrop-blur-xl rounded-xl md:flex-row">
					<div className="w-full p-5 flex-center">
						<img
							src={Picrew}
							alt={"A Profil picture of me"}
							className="w-64 rounded-full md:w-full aspect-square"
						/>
					</div>
					<div className="flex flex-col justify-center p-6">
						<div className="mb-5">
							<h1>{t("welcome")}</h1>
							<h1 className="font-bold text-3xl text-[#F32E66]">
								{t("name")}
							</h1>
						</div>
						<p className="text-sm">{t("study")}</p>
						<p className="text-sm">{t("currently")}</p>
						<div className="flex justify-between mt-10">
							<a
								className="p-4 bg-white shadow-md dark:bg-customDarkLight hover:bg-blue-100 hover:shadow-none trans-fast rounded-xl"
								href="https://www.linkedin.com/in/emily-dharambure"
								onMouseEnter={(e) =>
									handleHover(e.currentTarget, 10, {
										background: "bg-transparent",
										borderWidth: "3px",
										borderColor: "border-blue-400",
									})
								}
								onMouseLeave={resetCursor}
							>
								<LinkedinLogo size={30} />
							</a>
							<a
								className="p-4 text-white bg-white shadow-md hover:bg-black/10 hover:shadow-none dark:bg-customDarkLight trans-fast rounded-xl"
								href="https://github.com/Pou-1"
								onMouseEnter={(e) =>
									handleHover(e.currentTarget, 10, {
										background: "bg-transparent",
										borderWidth: "3px",
										borderColor:
											themeContext &&
											themeContext.isDarkMode
												? "border-white"
												: "border-black",
									})
								}
								onMouseLeave={resetCursor}
							>
								<GithubLogo
									className="hidden dark:flex"
									color="white"
									size={30}
								/>
								<GithubLogo
									className="flex dark:hidden"
									color="black"
									size={30}
								/>
							</a>
							<a
								className="p-4 bg-white shadow-md text-customRed hover:shadow-none dark:bg-customDarkLight hover:bg-customRed/20 trans-fast rounded-xl"
								href="/CV_DELAPOEZEDHARAMBURE_Cyprien.pdf"
								onMouseEnter={(e) =>
									handleHover(e.currentTarget, 10, {
										background: "bg-transparent",
										borderWidth: "3px",
										borderColor: "border-customRed",
									})
								}
								onMouseLeave={resetCursor}
							>
								<CVLogo size={30} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20 dark:text-white animate-bounce">
				<ArrowLogo className="rotate-90" size={40} />
			</div>
		</div>
	);
};

export default FirstCardDiv;
