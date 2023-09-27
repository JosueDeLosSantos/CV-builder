import Loader from "./Loader"
import { Personaldetails } from "./Personaldetails"
import Addeducation from "./Addeducation"
import Addexperience from "./Addexperience"
import Customize from "./Customize"

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
	hide,
	pcolor,
	onPcolor,
	onLayout
}) {
	return (
		<div className="form-container">
			<Loader />
			<Customize onLayout={onLayout} onPcolor={onPcolor} hide={hide} pcolor={pcolor} />
			<Personaldetails hide={hide} personalI={personalI} onChange={onChange} />
			<Addeducation
				hide={hide}
				ed={ed}
				onEd={onEd}
				onNewEdit={onNewEdit}
				onCancel={onCancel}
				onOlded={onOlded}
				onSave={onSave}
				onDelete={onDelete}
			/>
			<Addexperience
				hide={hide}
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
