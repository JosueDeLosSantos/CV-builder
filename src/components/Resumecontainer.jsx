import "../styles/Resumecontainer.css"

function Resumecontainer({ personalI, onChange, ed, onEd, ex, onEx }) {
	return (
		<div className="resume-container">
			<Personalinfo personalI={personalI} onChange={onChange} />
			<Resumebody ed={ed} onEd={onEd} ex={ex} onEx={onEx} />
		</div>
	)
}

function Personalinfo({ personalI, onChange }) {
	const personalIstyles = {
		backgroundColor: "hsl(201.56deg 69.57% 18.04%)",
		color: "#fff",
	}
	return (
		<div style={personalIstyles} className="personal-info">
			<h1 onChange={onChange} className="resume-name">
				{personalI.fullName}
			</h1>
			<div className="contact-info">
				<div onChange={onChange}>{personalI.email}</div>
				<div onChange={onChange}>{personalI.ph}</div>
				<div onChange={onChange}>{personalI.location}</div>
			</div>
		</div>
	)
}

function Resumebody({ ed, onEd, ex, onEx }) {
	return (
		<div className="personal-background">
			<Edinfo ed={ed} onEd={onEd} />
			<Exinfo ex={ex} onEx={onEx} />
		</div>
	)
}

function Edinfo({ ed, onEd }) {
	const h3styles = {
		backgroundColor: "rgba(14,55,78,.07)",
		color: "hsl(201.56deg 69.57% 18.04%)",
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

function Exinfo({ ex, onEx }) {
	const h3styles = {
		backgroundColor: "rgba(14,55,78,.07)",
		color: "hsl(201.56deg 69.57% 18.04%)",
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
