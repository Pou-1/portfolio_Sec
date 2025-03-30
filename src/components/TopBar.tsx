import { useTranslation } from "react-i18next";
import Button from "./Button";

type TopBarProps = {
  activeIndex: number;
};

const TopBar: React.FC<TopBarProps> = ({ activeIndex }) => {
  const { i18n } = useTranslation();
  const sectionsNames = ["Who am i", "Works", "About"]

  return (
    <div className="flex flex-col justify-center p-2 z-50 w-full absolute top-2 flex-center">
      <div className="rounded-full w-full px-5 py-1 gap-2 flex justify-between overflow-hidden">
        <button
          onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
          className="p-2 bg-red-100 text-red-800 hover:bg-red-200 trans-fast rounded"
        >
          {i18n.language === "fr" ? "English" : "français"}
        </button>
        {activeIndex == 0 && (sectionsNames[0])}
        {activeIndex > 0 && activeIndex < 5 && (sectionsNames[1])}
        {activeIndex > 4 && (sectionsNames[2])}
        <Button text="Emily D'Harambure"/>
        <Button text="Contact Me"/>
      </div>
    </div>
  );
};

export default TopBar;
