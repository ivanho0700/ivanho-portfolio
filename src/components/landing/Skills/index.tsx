import React from "react"

import Skill from "./Skill"
import "./style.scss"

import { FcAcceptDatabase } from "react-icons/fc";
import { SiGithub, SiReact, SiNodedotjs, SiAzuredevops, SiJirasoftware, SiMicrosoftacademic } from "react-icons/si";

function Skills() {
	return (
		<div id="skills" className="skills">
			<div className="skills__container">
				<div className="section__title">
					<h3>My skill set</h3>
				</div>
				<div className="skills__lists">
					<Skill
						name="Front-end"
						detail="ReactJS, AngularJS, VueJS, Typescript, Bootstrap, jQuery"
						icon={SiReact}
					/>
					<Skill
						name="Back-end"
						detail="Node.js, Express.js, Django, Flask, PHP, Rails"
						icon={SiNodedotjs}
					/>
					<Skill
						name="Database Management Systems"
						detail="MongoDB, MySQL, PostgreSQL"
						icon={FcAcceptDatabase}
					/>
					<Skill
						name="Version Control"
						detail="Git, Github"
						icon={SiGithub}
					/>
					<Skill
						name="Web Hosting Platforms"
						detail="AWS, Firebase"
						icon={SiAzuredevops}
					/>
					<Skill
						name="Project Management"
						detail="Scrum, Kanban, Agile, Jira"
						icon={SiJirasoftware}
					/>
					<Skill
						name="Soft Skills"
						detail="Creativity, Strategic planning, Analytical skills, Problem-solving skills, Time management skills"
						icon={SiMicrosoftacademic}
					/>
				</div>
			</div>
		</div>
	)
}

export default Skills
