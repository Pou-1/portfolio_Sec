import React, { forwardRef, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GithubAvatars from "./GithubAvatars";
import { useCursor } from "../cursor/CursorFunct";
import { ThemeContext } from "../ThemeProvider";

type AnimatedCardProps = {
  image: string;
  imageEng: string;
  imageDark: string;
  imageDarkEng: string;
  imageMobile: string;
  imageMobileEng: string;
  imageMobileDark: string;
  imageMobileDarkEng: string;
  text: string;
  logos: React.ReactNode[];
  logosLink: string[];
  colorGradient: string;
  workers: string[];
  isactiveIndex: boolean;
};

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  (
    {
      image,
      imageEng,
      imageDark,
      imageDarkEng,
      imageMobile,
      imageMobileEng,
      imageMobileDark,
      imageMobileDarkEng,
      text,
      logos,
      logosLink,
      colorGradient,
      workers,
      isactiveIndex,
    },
    ref
  ) => {
    const { handleHover, resetCursor } = useCursor();
    const { i18n } = useTranslation();
    const themeContext = useContext(ThemeContext);

    const isDarkMode = themeContext?.isDarkMode ?? false;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const getImage = () => {
      const lang = i18n.language;
      if (isMobile) {
        if (isDarkMode) return lang === "fr" ? imageMobileDark : imageMobileDarkEng;
        return lang === "fr" ? imageMobile : imageMobileEng;
      } else {
        if (isDarkMode) return lang === "fr" ? imageDark : imageDarkEng;
        return lang === "fr" ? image : imageEng;
      }
    };

    const backgroundImage = getImage();

    return (
      <div className="w-full h-full relative flex items-end" ref={ref}>
        {isactiveIndex && (
          <div
            className={`absolute appear-bottom2 z-20 w-full h-full flex items-end ${colorGradient} via-transparent via-70% sm:via-80%`}
          >
            <div className="p-4 flex flex-col sm:flex-row items-end gap-5 sm:gap-0 justify-between w-full">
              <p className="text-white text-5xl w-full text-center sm:text-left">{text}</p>
              <div className="w-full flex-center">
                <GithubAvatars usernames={workers} projectName={text} />
              </div>
              <div className="flex gap-5 w-full sm:justify-end justify-center">
                {logos.map((logo, index) => (
                  <a
                    href={logosLink[index]}
                    className="bg-white/10 hover:bg-white/20 trans-fast py-2 px-4 rounded-xl"
                    key={index}
                    onMouseEnter={(e) =>
                      handleHover(e.currentTarget, 10, {
                        background: "bg-transparent",
                        borderWidth: "4px",
                      })
                    }
                    onMouseLeave={resetCursor}
                  >
                    {logo}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="bg-white group relative w-full h-full flex flex-col shadow-md z-10 transition-all duration-700 ease-in-out">
          <div
            className="overflow-hidden h-[100vh] w-full relative bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
      </div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

export default AnimatedCard;
