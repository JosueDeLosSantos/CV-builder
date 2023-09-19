import "../styles/Resumecontainer.css"

function Resumecontainer({fullName, email, ph, location,
	onFullname, onEmail, onPh, onLocation}) {
    return (
        <div className="resume-container">
            <Personalinfo
                fullName ={fullName}
                email={email}
				ph={ph}
				location={location}
				onFullname={onFullname}
				onEmail={onEmail}
				onPh={onPh}
				onLocation={onLocation}
            />
        </div>
    )
}

function Personalinfo({ fullName, email, ph, location,
	onFullname, onEmail, onPh, onLocation}) {
	return (
		<>
			<h1 onChange={onFullname} className="resume-name">{fullName}</h1>
			<div className="contact-info">
				<div onChange={onEmail}>{email}</div>
				<div onChange={onPh}>{ph}</div>
				<div onChange={onLocation}>{location}</div>
			</div>
		</>
	)
}

export default Resumecontainer
