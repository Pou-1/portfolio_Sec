import React from "react";
import Picrew from "../../../assets/imgs/picrew_no_bg.png";
import BentoLogo from "./BentoLogos";

const BentoGrid: React.FC = () => {
	return (
		<div className="w-full h-full pt-20 pb-10 flex-center">
			<div className="z-40 grid w-full h-full grid-cols-5 grid-rows-3 gap-4 p-2 bentoGrid">
				<div className="col-span-2 dark:border-customDarkLight dark:bg-customDark/20">
					1
				</div>
				<div className="col-start-3 dark:border-customDarkLight dark:bg-customDark/20">
					2
				</div>
				<div className="col-start-4 dark:border-customDarkLight dark:bg-customDark/20">
					3
				</div>
				<div className="col-start-5 dark:border-customDarkLight dark:bg-customDark/20">
					4
				</div>
				<div className="col-start-5 row-span-2 row-start-2 dark:bg-customDark/20 dark:border-customDarkLight">
					5
				</div>
				<div className="col-start-1 row-start-2 overflow-hidden dark:bg-customDark dark:border-customDarkLight">
					<img
						src={Picrew}
						alt={"A Profil picture of me"}
						className="w-full -translate-y-10 md:w-full"
					/>
				</div>
				<div className="flex flex-col justify-center col-span-2 col-start-2 row-start-2 overflow-hidden px-14 gap-14 dark:bg-customDark/20 dark:border-customDarkLight">
					<p className="text-2xl text-gray-500 dark:text-gray-100">
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
				<div className="col-span-2 col-start-1 row-start-3 dark:border-customDarkLight dark:bg-customDark/20">
					9
				</div>
				<div className="col-span-2 col-start-3 row-start-3 dark:border-customDarkLight dark:bg-customDark/20">
					10
				</div>
				<div className="col-start-4 row-start-2 dark:border-customDarkLight dark:bg-customDark/20">
					11
				</div>
			</div>
		</div>
	);
};

export default BentoGrid;
