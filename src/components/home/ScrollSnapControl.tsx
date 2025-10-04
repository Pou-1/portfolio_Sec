import { useEffect, useState, useRef } from "react";
import FirstCardDiv from "./FirstCardDiv";
import TopBar from "../navigation/TopBar";
import CrocoDive from "../../assets/imgs/works/CrocoDive.png";
import Nautilus from "../../assets/imgs/works/nautilus.png";
import PtiCuisto from "../../assets/imgs/works/pti_cuisto.png";
import InstantWeather from "../../assets/imgs/works/instant_weather.png";
import ReactLogo from "../../assets/logo/ReactLogo";
import TailwindLogo from "../../assets/logo/TailwindLogo";
import LaravelLogo from "../../assets/logo/LaravelLogo";
import PhPLogo from "../../assets/logo/PhPLogo";
import BootstrapLogo from "../../assets/logo/BootsrapLogo";
import JSLogo from "../../assets/logo/JSLogo";
import BentoDiv from "./bento/BentoDiv";

const ScrollSnapControl = () => {
	const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
	const [scroll, setScroll] = useState(0);

	const projects = [
		{
			image: CrocoDive,
			text: "CrocoDive",
			logos: [
				<ReactLogo size={35} key="react" />,
				<TailwindLogo size={35} key="tailwind" />,
			],
			logosLinks: ["https://fr.react.dev/", "https://tailwindcss.com/"],
			colorGradient: "bg-gradient-to-b from-transparent to-green-800",
			workers: [
				"Pou-1",
				"juliensailly",
				"waterfox-dev",
				"SirSoliloque",
				"Mehliug-SG",
			],
		},
		{
			image: Nautilus,
			text: "Nautilus",
			logos: [
				<LaravelLogo size={35} key="laravel" />,
				<PhPLogo size={35} key="php" />,
			],
			logosLinks: ["https://laravel.com/", "https://www.php.net/"],
			colorGradient: "bg-gradient-to-b from-transparent to-blue-800",
			workers: [
				"Pou-1",
				"juliensailly",
				"AlensoLopes",
				"AndgelBrissaud",
				"Elrigabel",
				"LucBUTGH",
				"PetitGens",
				"Mehliug-SG",
				"SirSoliloque",
				"waterfox-dev",
			],
		},
		{
			image: PtiCuisto,
			text: "Pti Cuisto",
			logos: [
				<BootstrapLogo size={35} key="bootstrap" />,
				<PhPLogo size={35} key="php" />,
			],
			logosLinks: ["https://getbootstrap.com/", "https://www.php.net/"],
			colorGradient: "bg-gradient-to-b from-transparent to-red-800",
			workers: ["Pou-1", "AndgelBrissaud", "Elrigabel", "waterfox-dev"],
		},
		{
			image: InstantWeather,
			text: "Instant Weather",
			logos: [<JSLogo size={35} key="react" />],
			logosLinks: ["https://en.wikipedia.org/wiki/JavaScript"],
			colorGradient: "bg-gradient-to-b from-transparent to-gray-800",
			workers: ["Pou-1", "AndgelBrissaud", "Elrigabel", "waterfox-dev"],
		},
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScroll(scrollTop);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<article className="flex flex-col gap-10">
			<TopBar scroll={scroll} />
			<div className="flex flex-col w-full h-full bg-white bg-dots dark:bg-customDarkDarker">
				<FirstCardDiv scrollY={0} />
				<div
					ref={(el) => (sectionsRef.current[0] = el)}
					className="fixed w-screen h-screen pointer-events-none flex-center"
				>
					{/* Circle Div */}
					<div
						className={`relative p-5 mb-10`}
						style={{
							transform:
								scroll > 0
									? `rotate(${(scroll / 10).toFixed(1)}deg)`
									: "none",
							width:
								scroll > 0
									? `${(750 - scroll / 10).toFixed(1)}px`
									: "750px",
							height:
								scroll > 0
									? `${(380 - scroll / 10).toFixed(1)}px`
									: "380px",
						}}
					>
						<div className="absolute top-0 left-0 z-20 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full md:w-32 md:h-32 bg-customRed" />
						<div className="absolute bottom-0 right-0 w-16 h-16 translate-x-1/2 translate-y-1/2 rounded-full md:w-32 md:h-32 bg-customGreen" />
					</div>
					<p className="fixed z-50 px-2 py-1 text-sm bg-white rounded shadow top-2 left-2">
						{(780 + scroll / 10).toFixed(1)}px
					</p>
				</div>
				<BentoDiv />
				<div className="w-screen h-screen" />
				<div className="w-screen h-screen" />
				<div className="w-screen h-screen" />
				<div className="w-screen h-screen" />
			</div>
		</article>
	);
};

export default ScrollSnapControl;
