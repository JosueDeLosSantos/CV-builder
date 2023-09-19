import { useState } from "react"
import "./App.css"
import { v4 as uuid } from "uuid"
import Editside from "./components/Editside"
import Resumecontainer from "./components/Resumecontainer"
import { personalInfo } from "./components/data"

function App() {
	const [personalI, setpersonalI] = useState(personalInfo)

	function handleFullname(e) {
		setpersonalI({ ...personalI, fullName: `${e.target.value}` })
	}
	function handleEmail(e) {
		setpersonalI({ ...personalI, email: `${e.target.value}` })
	}
	function handlePh(e) {
		setpersonalI({ ...personalI, ph: `${e.target.value}` })
	}
	function handleLocation(e) {
		setpersonalI({ ...personalI, location: `${e.target.value}` })
	}

	return (
		<div className="app">
			<Editside
				fullName={personalI.fullName}
				email={personalI.email}
				ph={personalI.ph}
				location={personalI.location}
				onFullname={handleFullname}
				onEmail={handleEmail}
				onPh={handlePh}
				onLocation={handleLocation}
			/>
			<Resumecontainer
				fullName={personalI.fullName}
				email={personalI.email}
				ph={personalI.ph}
				location={personalI.location}
        onFullname={handleFullname}
        onEmail={handleEmail}
				onPh={handlePh}
				onLocation={handleLocation}
			/>
		</div>
	)
}

export default App
