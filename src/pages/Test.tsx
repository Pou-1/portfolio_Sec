import "../App.css";
import "../styles/test.css";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import cat from "../assets/imgs/cat.jpg";

const App: React.FC = () => {
	useEffect(() => {
		const elements = document.querySelectorAll(".card");
		VanillaTilt.init(elements, {
			max: 5,
			speed: 100,
			glare: true,
			"max-glare": 0.1,
			gyroscope: false,
		});
	}, []);

	return (
		<div className="w-screen min-h-screen h-screen flex bg-customDark">
			<div className="absolute w-screen h-screen flex-center overflow-hidden">
				<div className="absolute -left-1/4 -bottom-2/4 w-6/12 aspect-square rounded-full bg-[#F32E66]"></div>
				<div className="absolute right-11 top-5 w-1/6 aspect-square rounded-full bg-[#F32E66]"></div>
				<div className="absolute left-11 top-5 w-1/12 aspect-square rounded-full bg-[#C522FB]"></div>
				<div className="absolute right-80 bottom-5 w-1/6 aspect-square rounded-full bg-[#C522FB]"></div>
				<div
					className="card text-white gap-x-5 p-10 relative glassIco h-2/3 w-4/5 m-8 rounded-3xl 
        			bg-white/5 backdrop-blur-xl border border-white/50 flex-center overflow-hidden"
				>
					<div className="text-5xl w-full flex flex-col gap-y-5">
						<h1>Hello I'm</h1>
						<h1 className="font-bold text-[#F32E66]">
							Emily D'Harambure
						</h1>
						<p className="text-lg">
							I'm a student in Software & Web Development. I'm
							currently studying in the University of Caen, in
							Normandie (France) for a University Bachelor.
						</p>
					</div>
					<div className="w-full flex-center">
						<div className="border-[3px] border-[#F32E66] p-1 rounded-full">
							<img
								className="w-80 rounded-full"
								src={cat}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
