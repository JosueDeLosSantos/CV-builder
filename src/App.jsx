import { useState } from "react"
import "./App.css"
import { v4 as uuid } from "uuid"
import Editside from "./components/Editside"
import Resumecontainer from "./components/Resumecontainer"
import { personalInfo } from "./components/data"
import { education } from "./components/data"

function App() {
	const [personalI, setpersonalI] = useState(personalInfo)
	const [ed, seted] = useState(education)

	function handleFullname(e) {
		const { name, value } = e.target
		setpersonalI({ ...personalI, [name]: value })
	}

	function handleEd(e) {
		const { name, value, dataset } = e.target
		const newEd = ed.map((el) => {
			if (el.id === dataset.key) {
				return { ...el, [name]: value }
			} else {
				return el
			}
		})
		seted(newEd)
	}

  function handleNewEd(e) {
    const newEl = {
      id: uuid(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""
    }
    e.target.id = newEl.id
    ed.push(newEl)
    seted(ed)
    console.log(ed)
	}

	return (
		<div className="app">
			<Editside
				personalI={personalI}
				onChange={handleFullname}
				ed={ed}
				onEd={handleEd}
				onNewEdit={handleNewEd}
			/>
			<Resumecontainer
				personalI={personalI}
				onChange={handleFullname}
				ed={ed}
        onEd={handleEd}
        onNewEdit={handleNewEd}
			/>
		</div>
	)
}

export default App
