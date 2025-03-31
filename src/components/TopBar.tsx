import { useTranslation } from "react-i18next";
import FrenchFlagLogo from "../assets/logo/FRFlagLogo";
import UKFlagLogo from "../assets/logo/UKFlagLogo";
import { t } from "i18next";
import MailLogo from "../assets/logo/MailLogo";

type TopBarProps = {
	activeIndex: number;
};

const TopBar: React.FC<TopBarProps> = ({ activeIndex }) => {
	const { i18n } = useTranslation();
	const sectionsNames = ["Who am i", "Works", "About"];

	return (
		<div className="flex flex-col justify-center p-2 z-50 w-full absolute top-2 flex-center">
			<div className="rounded-full bg-red-100/40 backdrop-blur w-full gap-2 flex items-center justify-between">
				<button
					onClick={() =>
						i18n.changeLanguage(
							i18n.language === "fr" ? "en" : "fr"
						)
					}
					className="p-4 text-red-800 hover:bg-red-200 trans-fast rounded-l-full"
				>
					{i18n.language === "fr" ? (
						<UKFlagLogo />
					) : (
						<FrenchFlagLogo />
					)}
				</button>
				<p className="text-xl text-white py-2 rounded-md w-40 flex-center px-4 bg-[#C522FB] shadow-md">
					{activeIndex == 0 && sectionsNames[0]}
					{activeIndex > 0 &&
						activeIndex < 5 &&
						sectionsNames[1] + " - " + activeIndex}
					{activeIndex > 4 && sectionsNames[2]}
				</p>
				<p className="font-bold">Emily D'Harambure</p>
				<a 
          className="rounded-full flex gap-3 text-white py-2 px-6 bg-[#F32E66] hover:bg-[#fd30e9] trans-fast m-2"
          href="mailto:cyprien.dharambure@gmail.com"
        >
					<MailLogo/>
          <p>{t("contactMe")}</p>
				</a>
			</div>
		</div>
	);
};

export default TopBar;
