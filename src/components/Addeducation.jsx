import { useState } from "react"
import "../styles/Addeducation.css"
import { Inputsection } from "./Personaldetails"

function Addeducation({ ed, onEd }) {
	const [open, setopen] = useState("")
	const [edit, setedit] = useState(false)
	const [keytochange, setKeytochange] = useState(false)
	function handleSetOpen() {
		if (open === "") {
			setopen("open")
		} else {
			setopen("")
		}
	}
	function handleSetEdit(e) {
		if (edit === false) {
			setedit(true)
			setKeytochange(e.target.id)
			console.log(e.target.id)
		} else {
			setedit(false)
			setKeytochange(false)
		}
	}
	return (
		<div className="add-education">
			<button onClick={handleSetOpen} className="expand-btn">
				<h2 className="expand-btn-header">Education</h2>
			</button>
			<div className={"section-content" + " " + open}>
				<Formscontainer
					keytochange={keytochange}
					edit={edit}
					onEdit={handleSetEdit}
					ed={ed}
					onEd={onEd}
				/>
			</div>
		</div>
	)
}

function Formscontainer({ keytochange, edit, onEdit, ed, onEd }) {
	if (edit === false) {
		return (
			<div className="forms-container">
				<List keytochange={keytochange} edit={edit} onEdit={onEdit} ed={ed} onEd={onEd} />
				<Addbtn />
			</div>
		)
	} else {
		return (
			<div className="forms-container">
				<List keytochange={keytochange} edit={edit} onEdit={onEdit} ed={ed} onEd={onEd} />
			</div>
		)
	}
}

function List({ keytochange, edit, onEdit, ed, onEd }) {
	const listItems = ed.map((el) => (
		<button onClick={onEdit} className="btn-form" id={el.id} key={el.id}>
			{el.school}
		</button>
	))
	const listItemsForm = ed.map((el) => {
		if (el.id === keytochange) {
			return (
				<form id={el.id} key={el.id} className="education-form">
					<Educationform onEd={onEd} value={el.school} />
				</form>
			)
		} else {
			return (
				<button onClick={onEdit} className="btn-form" id={el.id} key={el.id}>
					{el.school}
				</button>
			)
		}
	})
	if (edit) {
		return <>{listItemsForm}</>
	} else {
		return <>{listItems}</>
	}
}

function Educationform({ value, onEd}) {
	return (
		<>
			<Inputsection
				inputType="text"
				id="school"
				labeltext="School"
				placeholder="Enter school / university"
				value={value}
                name="school"
                onChange = {onEd}
			/>
		</>
	)
}

function Addbtn() {
	return <button className="create-form">+Education</button>
}

export default Addeducation
