import React from "react";
import s from './Footer.module.css'
import { NavLink } from "react-router-dom";
import { NavLinks } from "../Header/NavLinks/NavLinks";
import FooterSubscribeForm from "./FooterSubscribeForm/FooterSubscribeForm";



const Column = ({ columnClassName, title, func }) => {
	return (
		<div key={title} className={s.column + ' ' + columnClassName}>
			<div className={s.title}>{title}</div>
			<nav className={s.list}>
				{func}
			</nav>
		</div>
	)
}

const Footer = (props) => {

	const growfySocialsCreater = (arr) => {
		return arr.map((item) => {
			return (
				<NavLink key={item.key} className={s.socialItem} to={item.link}>
					<img src={item.icon} alt={item.key} />
				</NavLink>
			)
		})
	}

	const pagesNavItemСreater = (arr) => {
		return arr.map((title) => {
			if (!title) {
				return console.error('some error');
			}
			let newtitle = title[0].toUpperCase() + title.slice(1);
			return <NavLinks
				onPageItemClick={null}
				className={s.pagesColumnLinksItem}
				key={title}
				linkPath={title}
				title={newtitle} />
		})
	}

	const utilityColumnLinkCreater = (arr) => {
		return arr.map((item) => {
			return (
				<li key={item.name} >
					<NavLink
						key={item.name}
						className={s.utilityColumnListItem}
						to={item.link}
					>
						{item.name}
					</NavLink>
				</li>
			)
		})
	}
	return (
		<div className={s.footer}>

			<div className={s.mainFooter}>
				<div className={s.container}>
					<div className={s.column + ' ' + s.growfy}>
						<NavLink to='/home' href="#">
							<img src={props.logo} alt="logo" />
						</NavLink>
						<div className={s.growfyText}>
							<p>
								{props.growfyText}
							</p>
						</div>
						<div className={s.growfySocial}>
							{/* NavLinks */}
							{growfySocialsCreater(props.growfySocialIcons)}
						</div>
					</div>

					<Column columnClassName={s.pages} title={props.pagesColumnTitle} func={pagesNavItemСreater(props.pagesColumnLinks)} />

					<Column columnClassName={s.utility} title={props.utilityColumnTitle} func={utilityColumnLinkCreater(props.utilityColumnLinks)} />

					<div className={s.column + ' ' + s.subscribe}>
						<div className={s.title}>Subscribe to our newsletter</div>
						<div className={s.text}>Lorem ipsum dolor sit am consectetur adipiscing</div>
						<FooterSubscribeForm />
					</div>

				</div>
			</div>

			<div className={s.bottomFooter}>
				<div className={s.bottomFootercontainer}>
					<div className={s.copy}>
						© 2022
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;