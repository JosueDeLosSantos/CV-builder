import { useState } from "react"
import { Inputsection } from "./Personaldetails"
import { Inputsection2 } from "./Personaldetails"
import AutoFixNormal from "@mui/icons-material/AutoFixNormal"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import SchoolIcon from "@mui/icons-material/School"

function Addeducation({ ed, onEd, onNewEdit, onCancel, onOlded, onSave, onDelete, hide }) {
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
		<div className={"add-education" + " " + hide}>
			<button title="Manage Education" onClick={handleSetOpen} className="expand-btn">
				<SchoolIcon />
				<h2 className="expand-btn-header">Education</h2>
			</button>
			<div className={"section-content" + " " + open}>
				<Formscontainer
					onOlded={onOlded}
					ed={ed}
					onEd={onEd}
					onNewEdit={onNewEdit}
					onCancel={onCancel}
					onSave={onSave}
					onDelete={onDelete}
				/>
			</div>
		</div>
	)
}

function Formscontainer({ ed, onEd, onNewEdit, onCancel, onOlded, onSave, onDelete }) {
	const [edit, setedit] = useState(false)
	const [add, setadd] = useState(false)
	const [keytochange, setKeytochange] = useState(false)

	// specify which form should be open
	function handleSetEdit(e) {
		if (e.target) {
			if (
				e.target.classList[0] === "create-form" ||
				e.target.parentNode.classList[0] === "create-form" ||
				e.target.parentNode.parentNode.classList[0] === "create-form"
			) {
				setadd(true)
			} else {
				setadd(false)
			}

			if (edit === false) {
				/* if edit === true a form will be opened
				containing the info of the object with the id: setKeytochange */
				setedit(true)
				// specify which info should be edited
				if (e.target.tagName === "path") {
					setKeytochange(e.target.parentNode.id)
				} else {
					setKeytochange(e.target.id)
				}
			}
		} else {
			setadd(false)
			setedit(true)
			setKeytochange(e.id)
		}
	}

	// this triggers a re render of the section-content container
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
					onSave={onSave}
					onDelete={onDelete}
				/>
			</div>
		)
	}
}

function List({
	keytochange,
	edit,
	onEdit,
	ed,
	onEd,
	cancelEdit,
	onCancel,
	add,
	onOlded,
	onSave,
	onDelete,
}) {
	function Checkschool(school) {
		if (school === "") {
			return <>Undefined School / University</>
		} else {
			return <>{school}</>
		}
	}

	const listItems = ed.map((el) => (
		<button
			title="Edit"
			onClick={(e) => {
				onEdit(e)
				onOlded()
			}}
			className="btn-form"
			id={el.id}
			key={el.id}
		>
			{Checkschool(el.school)}
			<AutoFixNormal
				sx={{ fontSize: "1.5em" }}
				id={el.id}
				key={el.id}
				onClick={(e) => {
					if (e.target.tagName === "path") {
						onEdit(e.target.parentNode)
						onOlded()
						// disable default behavior of the icon component
						e.stopPropagation()
					} else {
						onEdit(e)
						onOlded()
					}
				}}
			/>
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
						onSave={onSave}
						onDelete={onDelete}
					/>
				</form>
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
	onSave,
	onDelete,
}) {
	if (startDate) {
		const parts = startDate.split("/")
		if (parts.length === 2) {
			const customFormat = parts[1] + "-" + parts[0]
			startDate = customFormat
		}
	}

	if (endDate) {
		const parts = endDate.split("/")
		if (parts.length === 2) {
			const customFormat = parts[1] + "-" + parts[0]
			endDate = customFormat
		}
	}

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
				inputType="month"
				id="start-date"
				labeltext="Start Date"
				placeholder="Enter Start Date"
				value={startDate}
				name="startDate"
				onChange={onEd}
				dataSet={id}
			/>
			<Inputsection
				inputType="month"
				id="end-date"
				labeltext="End Date"
				placeholder="Enter End Date"
				value={endDate}
				name="endDate"
				onChange={onEd}
				dataSet={id}
			/>
			<Inputsection2
				inputType="text"
				id="location"
				labeltext="Location"
				placeholder="Enter Location"
				value={location}
				name="location"
				recommendation="optional"
				onChange={onEd}
				dataSet={id}
			/>
			<Formbuttons
				onSave={onSave}
				add={add}
				cancelEdit={cancelEdit}
				dataSet={id}
				onCancel={onCancel}
				onDelete={onDelete}
			/>
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
			title="Add new education detail"
		>
			<AddCircleOutlineIcon
				id=""
				onClick={(e) => {
					onNewEdit(e)
					onEdit(e)
					e.stopPropagation()
				}}
				sx={{ fontSize: "1em" }}
			/>
			Education
		</button>
	)
}

function Formbuttons({ onSave, add, cancelEdit, dataSet, onCancel, onDelete }) {
	if (add) {
		return (
			<div className="form-btns">
				<Cancelbtn
					add={add}
					onCancel={onCancel}
					cancelEdit={cancelEdit}
					dataSet={dataSet}
				/>
				<Savebtn cancelEdit={cancelEdit} onSave={onSave} dataSet={dataSet} />
			</div>
		)
	} else {
		return (
			<div className="form-btns">
				<Cancelbtn
					add={add}
					onCancel={onCancel}
					cancelEdit={cancelEdit}
					dataSet={dataSet}
				/>
				<Deletebtn cancelEdit={cancelEdit} onDelete={onDelete} dataSet={dataSet} />
				<Savebtn cancelEdit={cancelEdit} onSave={onSave} dataSet={dataSet} />
			</div>
		)
	}
}

function Cancelbtn({ onCancel, cancelEdit, dataSet, add }) {
	return (
		<button
			onClick={(e) => {
				cancelEdit()
				onCancel(e)
			}}
			data-newinfo={add}
			data-key={dataSet}
			className="cancel-btn"
		>
			Cancel
		</button>
	)
}
function Deletebtn({ dataSet, onDelete, cancelEdit }) {
	return (
		<button
			onClick={(e) => {
				cancelEdit(e)
				onDelete(e)
			}}
			data-key={dataSet}
			className="delete-btn"
		>
			Delete
		</button>
	)
}
function Savebtn({ cancelEdit, onSave, dataSet }) {
	return (
		<button
			onClick={(e) => {
				onSave(e)
				cancelEdit()
			}}
			data-key={dataSet}
			className="save-btn"
		>
			Save
		</button>
	)
}

export default Addeducation
