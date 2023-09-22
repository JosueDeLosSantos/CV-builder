import "../styles/Editside.css"
import Navbar from "./Navbar"
import Formcontainer from "./Formcontainer"

function Editside({ personalI, onChange, ed, onEd, onNewEdit }) {
	return (
		<div className="edit-side">
			<Navbar />
			<Formcontainer
				personalI={personalI}
				onChange={onChange}
				ed={ed}
				onEd={onEd}
				onNewEdit={onNewEdit}
			/>
		</div>
	)
}

export default Editside
