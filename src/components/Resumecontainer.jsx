import "../styles/Resumecontainer.css"

function Resumecontainer({ pcolor, personalI, ed, onEd, ex, onEx, layouts }) {
	let styles = {
		display: "block",
	}
	if (layouts === "left-look") {
		styles = {
			display: "flex",
		}
	} else if (layouts === "right-look") {
		styles = {
			display: "flex",
			flexDirection: "row-reverse",
		}
	}
	return (
		<div style={styles} className="resume-container">
			<Personalinfo pcolor={pcolor} personalI={personalI} />
			<Resumebody pcolor={pcolor} ed={ed} onEd={onEd} ex={ex} onEx={onEx} />
		</div>
	)
}

function Personalinfo({ pcolor, personalI }) {
	const personalIstyles = {
		backgroundColor: pcolor,
		color: "#fff",
	}
	return (
		<div style={personalIstyles} className="personal-info">
			<h1 className="resume-name">{personalI.fullName}</h1>
			<div className="contact-info">
				<div>{personalI.email}</div>
				<div>{personalI.ph}</div>
				<div>{personalI.location}</div>
			</div>
		</div>
	)
}

function Resumebody({ pcolor, ed, onEd, ex, onEx }) {
	return (
		<div className="personal-background">
			<Edinfo pcolor={pcolor} ed={ed} onEd={onEd} />
			<Exinfo pcolor={pcolor} ex={ex} onEx={onEx} />
		</div>
	)
}

function Edinfo({ pcolor, ed, onEd }) {
	const h3styles = {
		backgroundColor: "rgba(14,55,78,.07)",
		color: pcolor,
	}
	return (
		<div className="ed-info">
			<h3 className="header-text" style={h3styles}>
				Education
			</h3>
			<Edlist ed={ed} onEd={onEd} />
		</div>
	)
}

function Exinfo({ pcolor, ex, onEx }) {
	const h3styles = {
		backgroundColor: "rgba(14,55,78,.07)",
		color: pcolor,
	}
	return (
		<div className="ex-info">
			<h3 style={h3styles} className="header-text">
				Professional Experience
			</h3>
			<Exlist ex={ex} onEx={onEx} />
		</div>
	)
}

function Edlist({ ed, onEd }) {
	const list = ed.map((el) => {
		if (el.startDate) {
			const parts = el.startDate.split("-")
			if (parts.length === 2) {
				const customFormat = parts[1] + "/" + parts[0]
				el.startDate = customFormat
			}
		}
		if (el.endDate) {
			const parts = el.endDate.split("-")
			if (parts.length === 2) {
				const customFormat = parts[1] + "/" + parts[0]
				el.endDate = customFormat
			}
		}
		return (
			<div key={el.id} className="education-info">
				<div className="first-column">
					<div className="edDates">
						<p onChange={onEd}>{el.startDate}</p>
						<p>-</p>
						<p onChange={onEd}>{el.endDate}</p>
					</div>

					<div>
						<p onChange={onEd}>{el.location}</p>
					</div>
				</div>

				<div className="second-column">
					<div>
						<p onChange={onEd}>{el.school}</p>
					</div>

					<div>
						<p onChange={onEd}>{el.degree}</p>
					</div>
				</div>
			</div>
		)
	})

	return <>{list}</>
}

function Exlist({ ex, onEx }) {
	const list = ex.map((el) => {
		if (el.startDate) {
			const parts = el.startDate.split("-")
			if (parts.length === 2) {
				const customFormat = parts[1] + "/" + parts[0]
				el.startDate = customFormat
			}
		}
		if (el.endDate) {
			const parts = el.endDate.split("-")
			if (parts.length === 2) {
				const customFormat = parts[1] + "/" + parts[0]
				el.endDate = customFormat
			}
		}
		return (
			<div key={el.id} className="experience-info">
				<div className="first-column">
					<div className="exDates">
						<p onChange={onEx}>{el.startDate}</p>
						<p>-</p>
						<p onChange={onEx}>{el.endDate}</p>
					</div>
					<div>
						<p onChange={onEx}>{el.location}</p>
					</div>
				</div>

				<div className="second-column">
					<div>
						<p onChange={onEx}>{el.companyName}</p>
					</div>

					<div>
						<p onChange={onEx}>{el.positionTitle}</p>
					</div>
					<div className="descriptiondiv">
						<p onChange={onEx}>{el.description}</p>
					</div>
				</div>
			</div>
		)
	})

	return <>{list}</>
}

export default Resumecontainer
