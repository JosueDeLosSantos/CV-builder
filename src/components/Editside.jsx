import { useState } from "react"
import "../styles/Editside.css"
import Navbar from "./Navbar"
import Formcontainer from "./Formcontainer"

function Editside({
	personalI,
	onChange,
	ed,
	onEd,
	onNewEdit,
	onNewEdit2,
	onCancel,
	onCancel2,
	onOlded,
	onOldex,
	onSave,
	onSave2,
	onDelete,
	onDelete2,
	ex,
	onEx,
	pcolor,
	onPcolor,
	onLayout,
	pfont
}) {
	const [hide, sethide] = useState("")
	function onsethide() {
		sethide("hide")
	}
	function outsethide() {
		sethide("")
	}

	return (
		<div className="edit-side">
			<Navbar outHide={outsethide} onHide={onsethide} />
			<Formcontainer
				personalI={personalI}
				onChange={onChange}
				ed={ed}
				onEd={onEd}
				onNewEdit={onNewEdit}
				onNewEdit2={onNewEdit2}
				onCancel={onCancel}
				onCancel2={onCancel2}
				onOlded={onOlded}
				onOldex={onOldex}
				onSave={onSave}
				onSave2={onSave2}
				onDelete={onDelete}
				onDelete2={onDelete2}
				ex={ex}
				onEx={onEx}
				hide={hide}
				pcolor={pcolor}
				onPcolor={onPcolor}
				onLayout={onLayout}
				pfont={pfont}
			/>
		</div>
	)
}

export default Editside
