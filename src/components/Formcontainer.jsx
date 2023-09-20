import '../styles/Formcontainer.css'
import Loader from './Loader'
import { Personaldetails } from './Personaldetails'
import Addeducation from './Addeducation'

function Formcontainer({fullName, email, ph, location,
    onFullname, onEmail, onPh, onLocation, ed }) {
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
            <Addeducation ed={ed} />
        </div>
    )
}

export default Formcontainer