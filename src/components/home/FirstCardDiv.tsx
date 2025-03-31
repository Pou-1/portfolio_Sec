import React from "react";
import Picrew from "../../assets/imgs/picrew.png";
import ArrowLogo from "../../assets/logo/ArrowLogo";
import GithubLogo from "../../assets/logo/GithubLogo";
import LinkedinLogo from "../../assets/logo/LinkedinLogo";
import { useTranslation } from "react-i18next";
import CVLogo from "../../assets/logo/CVLogo";

type AnimatedCardProps = {
	scrollY: number;
};

const FirstCardDiv: React.FC<AnimatedCardProps> = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="w-full h-screen relative flex-center flex-col">
				{/* Cercles avec un effet parallaxe plus fort */}

				{/* Contenu principal */}
				<div className="mt-20 relative mr-4 ml-4 p-5 max-w-3xl mx-auto">
					{/* Cercle en haut à gauche */}
					<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 rounded-full z-20 bg-[#F32E66]" />
					{/* Cercle en bas à droite */}
					<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#C522FB]" />

					<div className="bg-white/50 z-30 relative backdrop-blur-xl rounded-xl shadow-lg w-full h-full flex-col md:flex-row flex">
						<div className="w-full flex-center p-5">
							<img
								src={Picrew}
								alt={"A Profil picture of me"}
								className="rounded-full md:w-full w-64 aspect-square"
							/>
						</div>
						<div className="p-6 flex flex-col justify-center">
							<div className="mb-5">
								<h1>{t("welcome")}</h1>
								<h1 className="font-bold text-3xl text-[#F32E66]">
									{t("name")}
								</h1>
							</div>
							<p className="text-sm">{t("study")}</p>
							<p className="text-sm">{t("currently")}</p>
							<div className="mt-10 flex justify-between">
								<a
									className="p-4 bg-white hover:bg-blue-100 trans-fast cursor-pointer shadow-md rounded-xl"
									href="https://www.linkedin.com/in/emily-dharambure"
								>
									<LinkedinLogo size={30} />
								</a>
								<a
									className="p-4 bg-white hover:bg-black/10 trans-fast cursor-pointer shadow-md rounded-xl"
									href="https://github.com/Pou-1"
								>
									<GithubLogo size={30} />
								</a>
								<a
									className="p-4 bg-white text-red-700 hover:bg-red-100 trans-fast cursor-pointer shadow-md rounded-xl"
									href="/CV_DELAPOEZEDHARAMBURE_Cyprien.pdf"
								>
									<CVLogo size={30} />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-20 animate-bounce">
					<ArrowLogo className="rotate-90" size={40} />
				</div>
			</div>
		</>
	);
};

export default FirstCardDiv;
