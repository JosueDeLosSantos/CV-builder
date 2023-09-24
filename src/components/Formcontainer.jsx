import "../styles/Formcontainer.css"
import Loader from "./Loader"
import { Personaldetails } from "./Personaldetails"
import Addeducation from "./Addeducation"

function Formcontainer({
	personalI,
	onChange,
	ed,
	onEd,
	onNewEdit,
	onCancel,
	onOlded,
	onSave,
	onDelete,
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
		</div>
	)
}

export default Formcontainer
