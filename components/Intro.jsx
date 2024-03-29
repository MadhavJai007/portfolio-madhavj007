import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, desc, buttons }) => {
	return (
		<div id="intro" className="bg-altlight py-5 px-2">
			<div className="container mt-2 pt-4">
				<div className=" row align-items-center">
					<div className="col-sm-12 text-center">
						<h1 className="text-deepblue fw-bold h4">{title}</h1>
						<p className='text-dark display-3'>{desc}</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link} aria-label={value.link}>
										<btn className="btn btn-deepblue my-1 mx-3">{value.title}</btn>
									</Link>
									:
									<Link target="_blank" rel="noreferrer" key={index} href={value.link} aria-label={value.link}>
										<btn className="btn btn-outline-deepblue my-1 mx-3">{value.title}</btn>
									</Link>
							))}
						</div>
					</div>
					{/* <div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={publicRuntimeConfig.basePath + image}
							alt="profile of hanzla"
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
}