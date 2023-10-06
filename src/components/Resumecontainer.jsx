import "../styles/Resumecontainer.css"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import PlaceIcon from "@mui/icons-material/Place"

function Resumecontainer({ pcolor, personalI, ed, onEd, ex, onEx, layouts, font }) {
	// controls fonts
	let fontStyle = ""
	if (font === "mono") {
		fontStyle = "monospace, 'Courier New', Courier, Verdana, Tahoma, sans-serif"
	} else if (font === "josefin") {
		fontStyle = "JosefinSans"
	} else {
		fontStyle = "Arial, Helvetica, sans-serif"
	}

	// controls the resume layout
	let styles = {
		display: "block",
		fontFamily: fontStyle,
	}
	if (layouts === "left-look") {
		styles = {
			display: "flex",
			fontFamily: fontStyle,
		}
	} else if (layouts === "right-look") {
		styles = {
			display: "flex",
			flexDirection: "row-reverse",
			fontFamily: fontStyle,
		}
	}
	return (
		<div style={styles} className="resume-container">
			<Personalinfo pcolor={pcolor} personalI={personalI} />
			<Resumebody pcolor={pcolor} ed={ed} onEd={onEd} ex={ex} onEx={onEx} />
		</div>
	)
}

function isBackgroundColorTooLight(backgroundColor) {
	// Function to calculate relative luminance
	function getLuminance(color) {
		const rgb = color.slice(1) // Remove the "#" at the beginning
		const r = parseInt(rgb.slice(0, 2), 16) / 255
		const g = parseInt(rgb.slice(2, 4), 16) / 255
		const b = parseInt(rgb.slice(4, 6), 16) / 255
		const gammaCorrectedRGB = [r, g, b].map((value) => {
			if (value <= 0.03928) {
				return value / 12.92
			} else {
				return Math.pow((value + 0.055) / 1.055, 2.4)
			}
		})
		return (
			0.2126 * gammaCorrectedRGB[0] +
			0.7152 * gammaCorrectedRGB[1] +
			0.0722 * gammaCorrectedRGB[2]
		)
	}

	// Define a luminance threshold (0.5 is commonly used as a midpoint)
	const luminanceThreshold = 0.3

	// Calculate the relative luminance of the background color
	const luminance = getLuminance(backgroundColor)

	// Check if the background color is too light
	return luminance > luminanceThreshold
}

function Personalinfo({ pcolor, personalI }) {
	const mainTitle = isBackgroundColorTooLight(pcolor) ? pcolor : "#fff"
	const bg = isBackgroundColorTooLight(pcolor) ? "#000000" : pcolor
	const personalIstyles = {
		backgroundColor: bg,
		color: mainTitle,
	}

	return (
		<div style={personalIstyles} className="personal-info">
			<h1 className="resume-name">{personalI.fullName}</h1>
			<div className="contact-info">
				<Emailtext email={personalI.email} />
				<Phonetext ph={personalI.ph} />
				<Locationtext location={personalI.location} />
			</div>
		</div>
	)
}

function Emailtext({ email }) {
	if (email !== "") {
		return (
			<div>
				<EmailIcon sx={{ fontSize: "1.1em" }} />
				{email}
			</div>
		)
	}
}
function Phonetext({ ph }) {
	if (ph !== "") {
		return (
			<div>
				<PhoneIcon sx={{ fontSize: "1.1em" }} />
				{ph}
			</div>
		)
	}
}
function Locationtext({ location }) {
	if (location !== "") {
		return (
			<div>
				<PlaceIcon sx={{ fontSize: "1.1em" }} />
				{location}
			</div>
		)
	}
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
	const bg = isBackgroundColorTooLight(pcolor) ? "#000000" : "#eef1f2"
	const h3styles = {
		backgroundColor: bg,
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
	const bg = isBackgroundColorTooLight(pcolor) ? "#000000" : "#eef1f2"
	const h3styles = {
		backgroundColor: bg,
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

					<div className="Degree">
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

					<div className="position-title">
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
