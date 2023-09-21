import { useState } from "react"
import "./App.css"
// import { v4 as uuid } from "uuid"
import Editside from "./components/Editside"
import Resumecontainer from "./components/Resumecontainer"
import { personalInfo } from "./components/data"
// import { education } from "./components/data"

function App() {
	const [personalI, setpersonalI] = useState(personalInfo)
	// const [ed, seted] = useState(education)

	function handleFullname(e) {
		const { name, value } = e.target
		setpersonalI({ ...personalI, [name]: value })
	}

	return (
		<div className="app">
			<Editside personalI={personalI} onFullname={handleFullname} />
			<Resumecontainer personalI={personalI} onFullname={handleFullname} />
		</div>
	)
}

export default App
