import "../styles/Editside.css"
import Navbar from "./Navbar"
import Formcontainer from "./Formcontainer"

function Editside({ fullName, email, ph, location,
	onFullname, onEmail, onPh, onLocation, ed }) {
	return (
		<div className="edit-side">
			<Navbar />
			<Formcontainer
				fullName={fullName}
				email={email}
				ph={ph}
				location={location}
				onFullname={onFullname}
				onEmail={onEmail}
				onPh={onPh}
				onLocation={onLocation}
				ed = {ed}
			/>
		</div>
	)
}

export default Editside