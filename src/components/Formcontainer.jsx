import "../styles/Formcontainer.css"
import Loader from "./Loader"
import { Personaldetails } from "./Personaldetails"
// import Addeducation from './Addeducation'

function Formcontainer({ personalI, onFullname }) {
	return (
		<div className="form-container">
			<Loader />
			<Personaldetails personalI={personalI} onFullname={onFullname} />
		</div>
	)
}

export default Formcontainer
