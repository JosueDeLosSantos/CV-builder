import "../styles/Resumecontainer.css"

function Resumecontainer({ personalI, onChange, ed, onEd, onNewEdit }) {
	return (
		<div className="resume-container">
			<Personalinfo personalI={personalI} onChange={onChange} />
			<Resumebody ed={ed} onEd={onEd} />
		</div>
	)
}

function Personalinfo({ personalI, onChange }) {
	return (
		<div className="personal-info">
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

function Resumebody({ ed, onEd }) {
	return (
		<div>
			<Edinfo ed={ed} onEd={onEd} />
		</div>
	)
}

function Edinfo({ ed, onEd }) {
	return (
		<div className="ed-info">
			<h3 className="header-text">Professional Experience</h3>
			<Edlist ed={ed} onEd={onEd} />
		</div>
	)
}

function Edlist({ ed, onEd }) {
	const list = ed.map((el) => {
		return (
			<div key={el.id} className="education-info">
				<div className="edDates">
					<p onChange={onEd}>{el.startDate}</p>
					<p>-</p>
					<p onChange={onEd}>{el.endDate}</p>
				</div>

				<div>
					<p onChange={onEd}>{el.school}</p>
				</div>
				<div>
					<p onChange={onEd}>{el.location}</p>
				</div>
				<div>
					<p onChange={onEd}>{el.degree}</p>
				</div>
			</div>
		)
	})

	return <>{list}</>
}

export default Resumecontainer
