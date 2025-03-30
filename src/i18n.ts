import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Hello, I'm",
          name: "Emily D'Harambure",
          study: "I'm a student in Software & Web Development.",
          currently: "I'm currently studying at the University of Caen, in Normandy (France) for a University Bachelor."
        },
      },
      fr: {
        translation: {
          welcome: "Bonjour, je suis",
          name: "Emily D'Harambure",
          study: "Je suis étudiante en Développement Logiciel.",
          currently: "Je suis actuellement en études pour un BUT informatique à l'Université Grand Ouest Normandie."
        },
      },
    },
    lng: "en",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
