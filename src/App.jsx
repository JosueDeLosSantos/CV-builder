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
	const [oldEd, setoldEd] = useState(null)

	function handleOlded() {
		setoldEd(ed)
	}

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
			location: "",
		}
		e.target.id = newEl.id
		ed.push(newEl)
		seted(ed)
	}

	function handleCancel(e) {
		// if an already created element is opened it will not update that information
		if (e.target.dataset.newinfo === "true") {
			const cancelId = e.target.dataset.key
			const newEd = []
			ed.forEach((el) => {
				// prevents the just added element cancelId from been added to newEd
				if (el.id !== cancelId) {
					newEd.push(el)
				}
			})
			seted(newEd)
		} else {
			// it will instead stick to the old information
			seted(oldEd)
		}
	}

	function isWhitespaceString(inputString) {
		// Use a regular expression to check for whitespace characters
		const regex = /^\s*$/
		return regex.test(inputString)
	}

	function handleAdd(e) {
		const saveId = e.target.dataset.key
		const newEd = []
		ed.forEach((el) => {
			if (el.id === saveId) {
				let counter = 0
				for (let prop in el) {
					if (!isWhitespaceString(el[prop])) counter += 1
				}
				/* the element will only be added if it contains any information
				other than the id*/
				if (counter > 1) {
					newEd.push(el)
				}
			} else {
				newEd.push(el)
			}
		})
		seted(newEd)
	}

	return (
		<div className="app">
			<Editside
				personalI={personalI}
				onChange={handleFullname}
				ed={ed}
				onEd={handleEd}
				onNewEdit={handleNewEd}
				onCancel={handleCancel}
				onOlded={handleOlded}
				onSave={handleAdd}
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
