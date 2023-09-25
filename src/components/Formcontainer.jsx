import "../styles/Formcontainer.css"
import Loader from "./Loader"
import { Personaldetails } from "./Personaldetails"
import Addeducation from "./Addeducation"
import Addexperience from "./Addexperience"

function Formcontainer({
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
}) {
	return (
		<div className="form-container">
			<Loader />
			<Personaldetails personalI={personalI} onChange={onChange} />
			<Addeducation
				ed={ed}
				onEd={onEd}
				onNewEdit={onNewEdit}
				onCancel={onCancel}
				onOlded={onOlded}
				onSave={onSave}
				onDelete={onDelete}
			/>
			<Addexperience
				ex={ex}
				onEx={onEx}
				onNewEdit={onNewEdit2}
				onCancel={onCancel2}
				onOldex={onOldex}
				onSave={onSave2}
				onDelete={onDelete2}
			/>
		</div>
	)
}

export default Formcontainer
