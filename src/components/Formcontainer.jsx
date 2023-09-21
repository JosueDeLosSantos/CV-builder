import "../styles/Formcontainer.css"
import Loader from "./Loader"
import { Personaldetails } from "./Personaldetails"
import Addeducation from './Addeducation'

function Formcontainer({ personalI, onFullname, ed, onEd }) {
	return (
		<div className="form-container">
			<Loader />
			<Personaldetails personalI={personalI} onFullname={onFullname} />
			<Addeducation ed={ed} onEd={onEd}/>
		</div>
	)
}

export default Formcontainer
