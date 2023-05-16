import React from "react"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import ChatIcon from '@material-ui/icons/Chat';
import Telegram from '@material-ui/icons/Telegram';

import "./style.scss"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<h4>Follow me If you are interested</h4>
				<div className="footer__social-icons">
					<a
						href="https://github.com/ivanho0700"
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						<GitHubIcon className="social-icon" />
					</a>
					<a
						href="https://web.skype.com/"
						target="_blank"
						rel="noopener noreferrer">
						<ChatIcon className="social-icon" />
					</a>
					<a
						href="https://telegram.org"
						target="_blank"
						rel="noopener noreferrer">
						<Telegram className="social-icon">Be</Telegram>
					</a>
				</div>
				<p>
					Designed and developed by Ivan Ho. Built with React. Hosted on
					Firebase.
				</p>
				<p>Copyright © Bikash {new Date().getFullYear()}</p>
			</div>
		</div>
	)
}

export default Footer
