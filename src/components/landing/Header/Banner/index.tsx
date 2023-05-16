import React from "react"

import Button from "../../../common/Button"

import "./style.scss"

export const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__container">
				<div className="banner__content">
					<h3>HELLO, I’M IVAN HO</h3>
					<h1>Full Stack Developer</h1>
					<h5>
					I'm working knowledge of web applications using MERN, MEAN, MEVN, LAMP, Rails, PERN, Django and more.
						<br/><span className="text-highlight"> Key Accomplishments: </span> Created an e-commerce site that served 50k
users with 99% accuracy.<br/> My {" "}
						<a
							className="github"
							href="https://github.com/ivanho0700"
							target="_blank"
							rel="noopener noreferrer">
							Github
						</a>{" "}
						includes many full stack development project.{" "}
						I always use communication tools like discord, skype, telegrame.
					</h5>
					<a href="#recent-projects">
						<Button label="View projects" variant="outline" />
					</a>
				</div>
			</div>
		</div>
	)
}
export default Banner
