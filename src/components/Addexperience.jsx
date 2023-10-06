import { useState } from "react"
import { Inputsection } from "./Personaldetails"
import { Inputsection2 } from "./Personaldetails"
import AutoFixNormal from "@mui/icons-material/AutoFixNormal"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import WorkIcon from '@mui/icons-material/Work';

function Addexperience({ ex, onEx, onOldex, onNewEdit, onCancel, onSave, onDelete, hide }) {
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
		<div className={"add-experience" + " " + hide}>
			<button onClick={handleSetOpen} className="expand-btn">
				<WorkIcon />
				<h2 className="expand-btn-header">Experience</h2>
			</button>
			<div className={"section-content" + " " + open}>
				<Formscontainer
					onOldex={onOldex}
					ex={ex}
					onEx={onEx}
					onNewEdit={onNewEdit}
					onCancel={onCancel}
					onSave={onSave}
					onDelete={onDelete}
				/>
			</div>
		</div>
	)
}

function Formscontainer({ ex, onEx, onNewEdit, onCancel, onOldex, onSave, onDelete }) {
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
					ex={ex}
					onEx={onEx}
					onOldex={onOldex}
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
					ex={ex}
					onEx={onEx}
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
	ex,
	onEx,
	cancelEdit,
	onCancel,
	add,
	onOldex,
	onSave,
	onDelete,
}) {
	function Checkschool(company) {
		if (company === "") {
			return <>Undefined place</>
		} else {
			return <>{company}</>
		}
	}

	const listItems = ex.map((el) => (
		<button
			onClick={(e) => {
				onEdit(e)
				onOldex()
			}}
			className="btn-form"
			id={el.id}
			key={el.id}
		>
			{Checkschool(el.companyName)}

			<AutoFixNormal
				sx={{ fontSize: "1.5em" }}
				id={el.id}
				key={el.id}
				onClick={(e) => {
					if (e.target.tagName === "path") {
						onEdit(e.target.parentNode)
						onOldex()
						// disable default behavior of the icon component
						e.stopPropagation()
					} else {
						onEdit(e)
						onOldex()
					}
				}}
			/>
		</button>
	))
	const listItemsForm = ex.map((el) => {
		if (el.id === keytochange) {
			return (
				<form key={el.id} className="experience-form">
					<Educationform
						id={el.id}
						onEx={onEx}
						company={el.companyName}
						position={el.positionTitle}
						startDate={el.startDate}
						endDate={el.endDate}
						location={el.location}
						description={el.description}
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
	company,
	position,
	startDate,
	endDate,
	location,
	description,
	onEx,
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
				id="company"
				labeltext="Company Name"
				placeholder="Enter Company Name"
				value={company}
				name="companyName"
				onChange={onEx}
				dataSet={id}
			/>
			<Inputsection
				inputType="text"
				id="position"
				labeltext="Position Title"
				placeholder="Enter Position Title"
				value={position}
				name="positionTitle"
				onChange={onEx}
				dataSet={id}
			/>
			<Inputsection
				inputType="month"
				id="start-date"
				labeltext="Start Date"
				placeholder="Enter Start Date"
				value={startDate}
				name="startDate"
				onChange={onEx}
				dataSet={id}
			/>
			<Inputsection
				inputType="month"
				id="end-date"
				labeltext="End Date"
				placeholder="Enter End Date"
				value={endDate}
				name="endDate"
				onChange={onEx}
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
				onChange={onEx}
				dataSet={id}
			/>
			<Textareaseccion
				id="description"
				labeltext="Description"
				placeholder="Enter Description"
				value={description}
				name="description"
				onChange={onEx}
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

function Textareaseccion({ dataSet, id, labeltext, placeholder, value, name, onChange }) {
	return (
		<div className="input-section">
			<label htmlFor={id}>
				<span className="label-text">{labeltext}</span>
				<span className="recommended-text">optional</span>
			</label>
			<textarea
				id={id}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
				data-key={dataSet}
				rows="7"
				cols="20"
				maxLength="180"
			/>
		</div>
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
			<AddCircleOutlineIcon
				id=""
				onClick={(e) => {
					onNewEdit(e)
					onEdit(e)
					e.stopPropagation()
				}}
				sx={{ fontSize: "1em" }}
			/>
			Experience
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

export default Addexperience
