import '../styles/Formcontainer.css'
import Loader from './Loader'
import {Personaldetails} from './Personaldetails'

function Formcontainer({fullName, email, ph, location,
	onFullname, onEmail, onPh, onLocation}) {
    return (
        <div className="form-container">
            <Loader />
            <Personaldetails
                fullName={fullName}
                email={email}
				ph={ph}
				location={location}
                onFullname={onFullname}
                onEmail={onEmail}
				onPh={onPh}
				onLocation={onLocation}
            />
        </div>
    )
}

export default Formcontainer