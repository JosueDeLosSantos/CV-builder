import "../styles/Editside.css"
import Navbar from "./Navbar"
import Formcontainer from "./Formcontainer"

function Editside({ personalI, onFullname }) {
	return (
		<div className="edit-side">
			<Navbar />
			<Formcontainer personalI={personalI} onFullname={onFullname} />
		</div>
	)
}

export default Editside
