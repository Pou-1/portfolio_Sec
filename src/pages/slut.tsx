import "../App.css";
import Cursor from "../components/cursor/Cursor";
import { CursorProvider } from "../components/cursor/CursorFunct";
import "../styles/test.css";
import React from "react";
import img1 from "../assets/imgs/slut/1.jpg";
import img2 from "../assets/imgs/slut/2.jpg";
import img3 from "../assets/imgs/slut/3.jpg";
import img4 from "../assets/imgs/slut/4.jpg";
import img5 from "../assets/imgs/slut/5.jpg";
import img6 from "../assets/imgs/slut/6.jpg";
import img7 from "../assets/imgs/slut/7.jpg";
import img8 from "../assets/imgs/slut/8.jpg";
import img9 from "../assets/imgs/slut/9.jpg";
import img10 from "../assets/imgs/slut/10.jpg";
import img11 from "../assets/imgs/slut/11.jpg";
import img12 from "../assets/imgs/slut/12.jpg";
import img13 from "../assets/imgs/slut/13.jpg";
import img14 from "../assets/imgs/slut/14.jpg";
import img15 from "../assets/imgs/slut/15.jpg";
import video1 from "../assets/imgs/slut/16.mp4";


const App: React.FC = () => {
    return (
        <CursorProvider>
            <Cursor />
            <div className="bg-[#f9fbfc] h-full w-full p-10">

              
                <div className="gap-10 flex-center">
                    <img src="https://gifsec.com/wp-content/uploads/2022/11/happy-birthday-anime-gif-21.gif" alt="" className="h-96 shadow-md rounded-xl" />
                    <img src="https://i.pinimg.com/originals/58/ee/7c/58ee7cf98c50002d1af055a407ae4d62.gif" alt="" className="h-96 shadow-md rounded-xl" />
                </div>
                <div className="text-8xl pt-20 text-[#ffba00] font-bold flex-center rounded-[2rem]">
                    Bon anniv slut !! :3
                </div>
                <div className="text-2xl mt-10 mb-20 text-[#a7a7a7] font-bold flex-center rounded-[2rem]">
                    Ceci est un mini site pour te souhaiter ton anniv et que tu attende pas ce soir (j'ai pas reussi le pride flag)
                </div>
                <div className="flex flex-col gap-5 mt-10 bg-[#e3e3e4] p-10 rounded-3xl">
                    <div className="flex gap-5">
                        <div className="h-40 w-full mb-4 hidden shadow-md rounded gay relative overflow-hidden">
                            <div className="w-24 h-full -rotate-180 absolute flex items-center justify-start overflow-hidden">
                                <div className="bg-[#000000] w-48 aspect-square p-2 flex items-end justify-end absolute shadow-md">
                                    <div className="bg-[#94510b] w-full h-full p-2">
                                        <div className="bg-[#f587ac] w-full h-full p-2">
                                            <div className="bg-[#4fa5c2] w-full h-full p-2">
                                                <div className="bg-[#ffffff] w-full h-full p-2">
                                                    <div className="bg-[#ffba00] w-full h-full p-8">
                                                        <div className="h-10 w-10 aspect-square bg-[#ffba00] border-[#675997] border-[6px] rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 w-full mb-4 shadow-md rounded gay"></div>
                        <div className="h-64 w-full mb-4 shadow-md rounded lesbian"></div>
                        <div className="h-64 w-full mb-4 shadow-md rounded nonb"></div>
                        <div className="h-64 w-full mb-4 shadow-md rounded trans"></div>
                    </div>
                </div>

                <div className="flex justify-between flex-wrap py-20 gap-10">
                    <img src={img1} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img2} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img3} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img4} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img5} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img6} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img7} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img8} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img9} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img10} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img11} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img12} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img13} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img14} alt="" className="h-96 shadow-md rounded-xl" />
                    <img src={img15} alt="" className="h-96 shadow-md rounded-xl" />
                    <video src={video1} className="h-96 shadow-md rounded-xl" controls />
                </div>
                <div className="text-6xl text-[#ffba00] font-bold flex-center rounded-[2rem]">
                    tes cadeau t'attendent a la maison hehe :3
                </div>
            </div>
        </CursorProvider>
    );

};

export default App;
