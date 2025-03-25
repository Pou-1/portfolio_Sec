import Picrew from "../../assets/imgs/picrew.png";
import ArrowLogo from "../../assets/logo/ArrowLogo";
import GithubLogo from "../../assets/logo/GithubLogo";
import LinkedinLogo from "../../assets/logo/LinkedinLogo";

type AnimatedCardProps = {
  scrollY: number;
};

const FirstCardDiv: React.FC<AnimatedCardProps> = ({ scrollY }) => {
  return (
    <>
      <div className="w-full h-screen relative flex-center flex-col">
        {/* Cercles avec un effet parallaxe plus fort */}
        <div
          className="fixed right-11 top-[600px] md:top-[540px] max-w-40 md:max-w-32 w-1/4 aspect-square rounded-full z-20 bg-[#F32E66]"
          style={{
            transform: `translateY(${scrollY * 0.6}px)`,
            willChange: "transform",
          }}
        />
        <div
          className="fixed left-11 md:top-36 top-14 w-1/6 aspect-square max-w-28 md:max-w-24 rounded-full bg-[#C522FB]"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            willChange: "transform",
          }}
        />

        {/* Contenu principal */}
        <div className="flex mt-20 bg-white/5 mr-4 ml-4 p-5 flex-col z-30 md:flex-row shadow-lg rounded-xl overflow-hidden max-w-3xl mx-auto backdrop-blur-xl">
          <div className="w-full flex-center">
            <img
              src={Picrew}
              alt={"A Profil picture of me"}
              className="rounded-full md:w-full w-64 aspect-square"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="mb-5">
              <h1>Hello, I'm</h1>
              <h1 className="font-bold text-3xl text-[#F32E66]">
                Emily D'Harambure
              </h1>
            </div>
            <p className="text-sm">
              I'm a student in Software & Web Development.
            </p>
            <p className="text-sm">
              I'm currently studying at the University of Caen, in Normandy
              (France) for a University Bachelor.
            </p>
            <div className="mt-10 flex gap-5">
              <button className="p-4 bg-white hover:bg-red-100 trans-fast cursor-pointer shadow-md rounded-xl"
                onClick={() => window.open("https://www.linkedin.com", "_blank")}
              >
                <LinkedinLogo size={30} />
              </button>
              <button className="p-4 bg-white hover:bg-red-100 trans-fast cursor-pointer shadow-md rounded-xl"
                onClick={() => window.open("https://github.com/Pou-1", "_blank")}
              >
                <GithubLogo size={30} />
              </button>
              <button className="p-4 bg-white hover:bg-red-100 trans-fast cursor-pointer shadow-md rounded-xl"
                onClick={() => window.location.href = "mailto:cyprien.dharambure@gmail.com"}
              >
                <GithubLogo size={30} />
              </button>
              <button className="p-4 bg-white hover:bg-red-100 trans-fast cursor-pointer shadow-md rounded-xl"
                onClick={() => window.open("/CV_DELAPOEZEDHARAMBURE_Cyprien.pdf", "_blank")}
              >
                <GithubLogo size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 animate-bounce">
          <ArrowLogo className="rotate-90" size={40}/>
        </div>
      </div>
    </>
  );
};

export default FirstCardDiv;
