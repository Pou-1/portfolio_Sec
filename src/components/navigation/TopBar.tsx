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
    <div className="flex flex-col justify-center py-2 px-8 z-50 w-full absolute top-2 flex-center">
      <div className="rounded-full bg-red-100/40 dark:bg-customDark/40 backdrop-blur w-full gap-2 flex items-center justify-between">
      <button
        onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
        className="p-4 text-red-800 dark:hover:bg-customDark hover:bg-violet-100 trans-fast z-[101] relative rounded-l-full"
        onMouseEnter={(e) =>
          handleHover(e.currentTarget, 0, {
            background: "bg-transparent",
            borderWidth: "2px",
          })
        }
        onMouseLeave={resetCursor}
      >
        {i18n.language === "fr" ? <UKFlagLogo className="z-[101]" /> : <FrenchFlagLogo />}
      </button>
        <ThemeToggle />
        <p className="font-bold dark:text-customRed">Emily D&apos;Harambure</p>
        <a
          className="rounded-full flex gap-3 text-white py-2 px-6 bg-[#F32E66] hover:bg-[#fd30e9] trans-fast m-2"
          href="mailto:emily.haramb@gmail.com"
          onMouseEnter={(e) =>
            handleHover(e.currentTarget, 5, {
              background: "bg-transparent",
              borderWidth: "2px",
            })
          }
          onMouseLeave={resetCursor}
        >
          <MailLogo />
          <p className="hidden sm:flex">{t("contactMe")}</p>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
