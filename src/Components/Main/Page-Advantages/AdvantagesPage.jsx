import React from "react";
import s from './AdvantagesPage.module.css'

const advantagesPageContentCreater = (arr) => {
	return arr.map((item) => {
		return (
			<div key={item.value} className={s.contentItem}>
				<div className={s.contentItem_container}>
					<h3 className={s.title}>{item.value}</h3>
					<div className={s.text}>
						<p>{item.text}</p>
					</div>
				</div>
			</div>
		)
	})
}

const AdvantagesPage = (props) => {
	return (
		<>
			<section className={s.advantagesPage}>
				<div className={s.container}>
					<div className={s.content}>
						{advantagesPageContentCreater(props.advantagesPageContent)}
					</div>
					<div className={s.image}>
						<img src={props.advantagesPageImage} alt="advantagesPageImage" />
					</div>
				</div>
			</section>
		</>
	)
}

export default AdvantagesPage;