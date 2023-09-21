import "../styles/Resumecontainer.css"

function Resumecontainer({ personalI, onFullname }) {
	return (
		<div className="resume-container">
			<Personalinfo personalI={personalI} onFullname={onFullname} />
		</div>
	)
}

function Personalinfo({ personalI, onFullname }) {
	return (
		<>
			<h1 onChange={onFullname} className="resume-name">
				{personalI.fullName}
			</h1>
			<div className="contact-info">
				<div onChange={onFullname}>{personalI.email}</div>
				<div onChange={onFullname}>{personalI.ph}</div>
				<div onChange={onFullname}>{personalI.location}</div>
			</div>
		</>
	)
}

export default Resumecontainer
