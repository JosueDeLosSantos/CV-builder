import { useState } from "react"
import "../styles/Addeducation.css"
import { Inputsection } from "./Personaldetails"

function Addeducation({ ed, onEd, onNewEdit, onCancel, onOlded }) {
	const [open, setopen] = useState("")
	// toggles the open class to show or hide the section-content
	function handleSetOpen() {
		if (open === "") {
			setopen("open")
		} else {
			setopen("")
		}
	}

	return (
		<div className="add-education">
			<button onClick={handleSetOpen} className="expand-btn">
				<h2 className="expand-btn-header">Education</h2>
			</button>
			<div className={"section-content" + " " + open}>
				<Formscontainer
					onOlded={onOlded}
					ed={ed}
					onEd={onEd}
					onNewEdit={onNewEdit}
					onCancel={onCancel}
				/>
			</div>
		</div>
	)
}

function Formscontainer({ ed, onEd, onNewEdit, onCancel, onOlded }) {
	const [edit, setedit] = useState(false)
	const [add, setadd] = useState(false)
	const [keytochange, setKeytochange] = useState(false)

	// specify which form should be open
	function handleSetEdit(e) {
		if (e.target.classList[0] === "create-form") {
			setadd(true)
		} else {
			setadd(false)
		}

		if (edit === false) {
			/* if edit === true a form will be opened
			containing the info of the object with the id: setKeytochange */
			setedit(true)
			// specify which info should be edited
			setKeytochange(e.target.id)
		}
	}

	function cancelSetEdit() {
		setedit(false)
		setKeytochange(false)
	}

	if (edit === false) {
		return (
			<div className="forms-container">
				<List
					keytochange={keytochange}
					edit={edit}
					onEdit={handleSetEdit}
					ed={ed}
					onEd={onEd}
					onNewEdit={onNewEdit}
					onOlded={onOlded}
				/>
				<Addbtn onNewEdit={onNewEdit} onEdit={handleSetEdit} />
			</div>
		)
	} else {
		return (
			<div className="forms-container">
				<List
					keytochange={keytochange}
					edit={edit}
					onEdit={handleSetEdit}
					ed={ed}
					onEd={onEd}
					cancelEdit={cancelSetEdit}
					onCancel={onCancel}
					add={add}
				/>
			</div>
		)
	}
}

function List({ keytochange, edit, onEdit, ed, onEd, cancelEdit, onCancel, add, onOlded }) {
	const listItems = ed.map((el) => (
		<button
			onClick={(e) => {
				onEdit(e)
				onOlded()
			}}
			className="btn-form"
			id={el.id}
			key={el.id}
		>
			{el.school}
		</button>
	))
	const listItemsForm = ed.map((el) => {
		if (el.id === keytochange) {
			return (
				<form key={el.id} className="education-form">
					<Educationform
						id={el.id}
						onEd={onEd}
						school={el.school}
						degree={el.degree}
						startDate={el.startDate}
						endDate={el.endDate}
						location={el.location}
						cancelEdit={cancelEdit}
						onCancel={onCancel}
						add={add}
					/>
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

function Educationform({
	id,
	school,
	degree,
	startDate,
	endDate,
	location,
	onEd,
	cancelEdit,
	onCancel,
	add,
}) {
	return (
		<>
			<Inputsection
				inputType="text"
				id="school"
				labeltext="School"
				placeholder="Enter school / university"
				value={school}
				name="school"
				onChange={onEd}
				dataSet={id}
			/>
			<Inputsection
				inputType="text"
				id="degree"
				labeltext="Degree"
				placeholder="Enter Degree / Field Of Study"
				value={degree}
				name="degree"
				onChange={onEd}
				dataSet={id}
			/>
			<Inputsection
				inputType="text"
				id="start-date"
				labeltext="Start Date"
				placeholder="Enter Start Date"
				value={startDate}
				name="startDate"
				onChange={onEd}
				dataSet={id}
			/>
			<Inputsection
				inputType="text"
				id="end-date"
				labeltext="End Date"
				placeholder="Enter End Date"
				value={endDate}
				name="endDate"
				onChange={onEd}
				dataSet={id}
			/>
			<Inputsection
				inputType="text"
				id="location"
				labeltext="Location"
				placeholder="Enter Location"
				value={location}
				name="location"
				onChange={onEd}
				dataSet={id}
			/>
			<Formbuttons add={add} cancelEdit={cancelEdit} dataSet={id} onCancel={onCancel} />
		</>
	)
}

function Addbtn({ onNewEdit, onEdit }) {
	return (
		<button
			id=""
			onClick={(e) => {
				onNewEdit(e)
				onEdit(e)
			}}
			className="create-form"
		>
			+Education
		</button>
	)
}

function Formbuttons({ add, cancelEdit, dataSet, onCancel }) {
	return (
		<div className="form-btns">
			<Cancelbtn add={add} onCancel={onCancel} cancelEdit={cancelEdit} dataSet={dataSet} />
			<Deletebtn dataSet={dataSet} />
			<Savebtn dataSet={dataSet} />
		</div>
	)
}

function Cancelbtn({ onCancel, cancelEdit, dataSet, add }) {
	return (
		<button
			onClick={(e) => {
				cancelEdit()
				onCancel(e)
			}}
			data-add={add}
			data-key={dataSet}
			className="cancel-btn"
		>
			Cancel
		</button>
	)
}
function Deletebtn({ dataSet }) {
	return (
		<button data-key={dataSet} className="delete-btn">
			Delete
		</button>
	)
}
function Savebtn({ dataSet }) {
	return (
		<button data-key={dataSet} className="save-btn">
			Save
		</button>
	)
}

export default Addeducation
