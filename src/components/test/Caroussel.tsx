import React from "react";
import Picrew from "../../assets/imgs/picrew_no_bg.png";

const Caroussel: React.FC = () => {
	return (
		<div className="flex w-1/2 gap-2 overflow-hidden h-44 ">
			<img src={Picrew} className="object-cover h-full" alt="" />
			<img src={Picrew} className="object-cover h-full" alt="" />
			<img src={Picrew} className="object-cover h-full" alt="" />
			<img src={Picrew} className="object-cover h-full" alt="" />
			<img src={Picrew} className="object-cover h-full" alt="" />
			<img src={Picrew} className="object-cover h-full" alt="" />
		</div>
	);
};

export default Caroussel;
