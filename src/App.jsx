import { useState } from "react"
import "./App.css"
import { v4 as uuid } from "uuid"
import Editside from "./components/Editside"
import Resumecontainer from "./components/Resumecontainer"
import { personalInfo } from "./components/data"
import { education } from "./components/data"
import { experience } from "./components/data"

function App() {
	const [personalI, setpersonalI] = useState(personalInfo)
	const [ed, seted] = useState(education)
	const [oldEd, setoldEd] = useState(null)
	const [oldEx, setoldEx] = useState(null)
	const [ex, setex] = useState(experience)
	const [layouts, setlayouts] = useState("top-look")
	const [pcolor, setPcolor] = useState("#105C70")
	const [font, setPfont] = useState("arial")

	function onClearResume() {
		setpersonalI({ ...personalI, fullName: "", email: "", ph: "", location: "" })
		seted([])
		setex([])
	}

	function onLoadSample() {
		setpersonalI(personalInfo)
		seted(education)
		setex(experience)
	}

	function handleFonts(e) {
		setPfont(e.target.classList.value)
	}

	function handlePcolor(v) {
		setPcolor(v)
	}

	function handleSetcolor(e) {
		setPcolor(e.target.value)
	}

	function handleLayout(e) {
		setlayouts(e.target.classList[0])
	}

	function handleOlded() {
		setoldEd(ed)
	}
	function handleOldex() {
		setoldEx(ex)
	}

	function handlePersonalI(e) {
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

	function handleEx(e) {
		const { name, value, dataset } = e.target
		const newEx = ex.map((el) => {
			if (el.id === dataset.key) {
				return { ...el, [name]: value }
			} else {
				return el
			}
		})
		setex(newEx)
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

		if (e.target.tagName === "path") {
			e.target.parentNode.id = newEl.id
		} else {
			e.target.id = newEl.id
		}

		ed.push(newEl)
		seted(ed)
	}

	function handleNewEx(e) {
		const newEl = {
			id: uuid(),
			companyName: "",
			positionTitle: "",
			startDate: "",
			endDate: "",
			location: "",
			description: "",
		}

		if (e.target.tagName === "path") {
			e.target.parentNode.id = newEl.id
		} else {
			e.target.id = newEl.id
		}

		ex.push(newEl)
		setex(ex)
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

	function handleCancel2(e) {
		// if an already created element is opened it will not update that information
		if (e.target.dataset.newinfo === "true") {
			const cancelId = e.target.dataset.key
			const newEx = []
			ex.forEach((el) => {
				// prevents the just added element cancelId from been added to newEx
				if (el.id !== cancelId) {
					newEx.push(el)
				}
			})
			setex(newEx)
		} else {
			// it will instead stick to the old information
			setex(oldEx)
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

	function handleAdd2(e) {
		const saveId = e.target.dataset.key
		const newEx = []
		ex.forEach((el) => {
			if (el.id === saveId) {
				let counter = 0
				for (let prop in el) {
					if (!isWhitespaceString(el[prop])) counter += 1
				}
				/* the element will only be added if it contains any information
				other than the id*/
				if (counter > 1) {
					newEx.push(el)
				}
			} else {
				newEx.push(el)
			}
		})
		setex(newEx)
	}

	function handleDelete(e) {
		const deleteId = e.target.dataset.key
		const newEd = []
		ed.forEach((el) => {
			if (el.id !== deleteId) {
				newEd.push(el)
			}
		})
		seted(newEd)
	}

	function handleDelete2(e) {
		const deleteId = e.target.dataset.key
		const newEx = []
		ex.forEach((el) => {
			if (el.id !== deleteId) {
				newEx.push(el)
			}
		})
		setex(newEx)
	}

	return (
		<div className="app">
			<Editside
				personalI={personalI}
				onChange={handlePersonalI}
				ed={ed}
				onEd={handleEd}
				onNewEdit={handleNewEd}
				onNewEdit2={handleNewEx}
				onCancel={handleCancel}
				onCancel2={handleCancel2}
				onOlded={handleOlded}
				onOldex={handleOldex}
				onSave={handleAdd}
				onSave2={handleAdd2}
				onDelete={handleDelete}
				onDelete2={handleDelete2}
				ex={ex}
				onEx={handleEx}
				pcolor={pcolor}
				onPcolor={handleSetcolor}
				onLayout={handleLayout}
				pfont={handleFonts}
				onClearResume={onClearResume}
				onLoadSample={onLoadSample}
			/>
			<Resumecontainer
				personalI={personalI}
				onChange={handlePersonalI}
				ed={ed}
				onEd={handleEd}
				ex={ex}
				onEx={handleEx}
				pcolor={pcolor}
				layouts={layouts}
				onPcolor={handlePcolor}
				font={font}
			/>
		</div>
	)
}

export default App
