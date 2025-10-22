import React, { useState } from "react";
import Picrew from "../../../assets/imgs/picrew_no_bg.png";
import BentoLogo from "./BentoLogos";
import TwitterLogo from "../../../assets/logo/TwitterLogo";
import GithubLogo from "../../../assets/logo/GithubLogo";
import LinkedinLogoNotColored from "../../../assets/logo/LinkedinLogoNotColored";
import CVLogo from "../../../assets/logo/CVLogo";

const BentoGrid: React.FC = () => {
	const [glassOn, setGlassOn] = useState<boolean>(false);

	function GlassToggle() {
		setGlassOn(!glassOn);
	}

	function isMobileDevice() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);
	}

	if (isMobileDevice()) {
		setGlassOn(false);
	}

	return (
		<div className="w-full h-full pt-20 pb-10 flex-center">
			<div className="z-40 grid w-full h-full grid-cols-5 grid-rows-3 gap-4 p-2 bentoGrid">
				<div
					className={`col-span-2 flex-center hover:rounded-[10rem] dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-lime-200/70 border dark:bg-customDark/20"
							: "bg-lime-200 dark:bg-customDark"
					}`}
				>
					<button
						onClick={GlassToggle}
						className="text-xl rounded-[4rem] shadow-md flex-center text-white bg-customDarkLight px-4 py-2"
					>
						Glass effect
					</button>
				</div>
				<div
					className={`col-start-3 hover:rounded-[10rem] hover:scale-105 dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-amber-200/70 border dark:bg-customDark/20"
							: "bg-amber-200 dark:bg-customDark"
					}`}
				>
					2
				</div>
				<div
					className={`col-start-4 hover:rounded-[10rem] hover:scale-105 dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-fuchsia-200/70 border dark:bg-customDark/20"
							: "bg-fuchsia-200 dark:bg-customDark"
					}`}
				>
					3
				</div>
				<div
					className={`col-start-5 flex-center gap-5 dark:border-customDarkLight rounded-[4rem] ${
						glassOn
							? "backdrop-blur-xl dark:bg-customDark/20"
							: "dark:bg-customDark"
					}`}
				>
					<div className="flex flex-col w-full h-full gap-5">
						<div className="bg-sky-200/70 text-sky-500 flex-center h-full w-full rounded-[3rem] shadow-md hover:rounded-[10rem] trans-fast hover:scale-105">
							<TwitterLogo size={80} />
						</div>
						<div className="bg-sky-200/70 text-sky-500 flex-center h-full w-full rounded-[3rem] shadow-md hover:rounded-[10rem] trans-fast hover:scale-105">
							<CVLogo size={80} />
						</div>
					</div>
					<div className="flex flex-col w-full h-full gap-5">
						<div className="bg-sky-200/70 text-sky-500 flex-center h-full w-full rounded-[3rem] shadow-md hover:rounded-[10rem] trans-fast hover:scale-105">
							<GithubLogo size={80} />
						</div>
						<div className="bg-sky-200/70 text-sky-500 flex-center h-full w-full rounded-[3rem] shadow-md hover:rounded-[10rem] trans-fast hover:scale-105">
							<LinkedinLogoNotColored size={100} />
						</div>
					</div>
				</div>

				<div
					className={`col-start-5 hover:rounded-[10rem] row-span-2 row-start-2 dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-pink-200/70 border dark:bg-customDark/20"
							: "bg-pink-200 dark:bg-customDark"
					}`}
				>
					5
				</div>
				<div
					className={`col-start-1 row-start-2 p-5 dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-blue-200/70 border dark:bg-customDark/20"
							: "bg-blue-200 dark:bg-customDark"
					}`}
				>
					<img
						src={Picrew}
						alt={"A Profil picture of me"}
						className="h-fit bg-white shadow-md rounded-[4rem] trans-fast hover:rotate-[20deg] hover:translate-x-2 hover:-translate-y-5 md:w-full"
					/>
				</div>
				<div
					className={`flex hover:rounded-[10rem] hover:scale-105 flex-col relative justify-center col-span-2 col-start-2 row-start-2 overflow-hidden px-14 gap-4 dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-green-200/70 border dark:bg-customDark/20"
							: "bg-green-200 dark:bg-customDark"
					}`}
				>
					<p className="z-10 flex text-2xl text-green-600 dark:text-gray-100">
						Stack I use
					</p>
					<div
						className="relative flex"
						style={{
							maskImage:
								"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
							WebkitMaskImage:
								"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
						}}
					>
						<div
							className="absolute w-full h-full"
							style={{
								maskImage:
									"linear-gradient(to left, transparent, black 10%, black 90%, transparent)",
								WebkitMaskImage:
									"linear-gradient(to left, transparent, black 10%, black 90%, transparent)",
							}}
						/>
						<BentoLogo />
						<BentoLogo />
					</div>
				</div>
				<div
					className={`col-span-2 hover:scale-105 hover:rounded-[10rem] flex-center text-xl text-violet-500 col-start-1 row-start-3 dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-violet-200/70 border dark:bg-customDark/20"
							: "bg-violet-200 dark:bg-customDark"
					}`}
				>
					Contact Me
				</div>
				<div
					className={`col-span-2 hover:rounded-[10rem] col-start-3 row-start-3 dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-red-200/70 border dark:bg-customDark/20"
							: "bg-red-200 dark:bg-customDark"
					}`}
				>
					10
				</div>
				<div
					className={`col-start-4 hover:rounded-[10rem] row-start-2 dark:border-customDarkLight rounded-[4rem] shadow-md ${
						glassOn
							? "backdrop-blur-xl bg-orange-200/70 border dark:bg-customDark/20"
							: "bg-orange-200 dark:bg-customDark"
					}`}
				>
					11
				</div>
			</div>
		</div>
	);
};

export default BentoGrid;
