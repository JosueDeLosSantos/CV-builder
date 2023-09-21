import "../styles/Editside.css"
import Navbar from "./Navbar"
import Formcontainer from "./Formcontainer"

function Editside({ personalI, onFullname, ed, onEd }) {
	return (
		<div className="edit-side">
			<Navbar />
			<Formcontainer personalI={personalI} onFullname={onFullname} ed={ed} onEd={onEd} />
		</div>
	)
}

export default Editside
