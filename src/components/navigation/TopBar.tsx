import React from "react";
import { useTranslation } from "react-i18next";
import FrenchFlagLogo from "../../assets/logo/FRFlagLogo";
import UKFlagLogo from "../../assets/logo/UKFlagLogo";
import { t } from "i18next";
import MailLogo from "../../assets/logo/MailLogo";
import ThemeToggle from "../buttons/ThemeToggle";
import { useCursor } from "../cursor/CursorFunct";

const TopBar: React.FC = () => {
	const { i18n } = useTranslation();
	const { handleHover, resetCursor } = useCursor();

	return (
		<div className="absolute z-50 flex flex-col justify-center w-full px-8 py-2 top-2 flex-center">
			<div className="flex items-center justify-between w-full gap-2 rounded-full bg-red-100/40 dark:bg-customDark/40 backdrop-blur">
				<button
					onClick={() =>
						i18n.changeLanguage(
							i18n.language === "fr" ? "en" : "fr"
						)
					}
					className="p-4 text-red-800 dark:hover:bg-customDark hover:bg-green-100 trans-fast z-[101] relative rounded-l-full"
					onMouseEnter={(e) =>
						handleHover(e.currentTarget, 0, {
							background: "bg-transparent",
							borderWidth: "2px",
						})
					}
					onMouseLeave={resetCursor}
				>
					{i18n.language === "fr" ? (
						<UKFlagLogo className="z-[101]" />
					) : (
						<FrenchFlagLogo />
					)}
				</button>
				<ThemeToggle />
				<p className="font-bold dark:text-customRed">
					Emily D&apos;Harambure
				</p>
				<a
					className="gap-3 pr-6 m-2 mr-3 rounded-full flex-center bg-customRed/10 text-customRed trans-fast"
					href="mailto:emily.haramb@gmail.com"
					onMouseEnter={(e) =>
						handleHover(e.currentTarget, 5, {
							background: "bg-transparent",
							borderWidth: "2px",
						})
					}
					onMouseLeave={resetCursor}
				>
					<MailLogo
						size={36}
						className="p-2 text-white rounded-full bg-customRed"
					/>
					<p className="hidden sm:flex">{t("contactMe")}</p>
				</a>
			</div>
		</div>
	);
};

export default TopBar;
