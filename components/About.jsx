import React from "react";

export const About = ({ title, desc }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-deepblue fw-bold">{title}</h1>
				<div className="px-sm-5 text-altdark">
					{desc.map((value, index) => (
						<p className="h5 " key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}