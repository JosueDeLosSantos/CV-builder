import "../styles/Personaldetails.css"

export function Personaldetails({ fullName, email, ph, location,
    onFullname, onEmail, onPh, onLocation }) {
    return (
        <form className="personal-details">
            <h2>Personal Details</h2>
            <Inputsection
                id="full-name"
                labeltext="Full name"
                inputType="text"
                placeholder="First and last name"
                value={fullName}
				onFullname = {onFullname}
            />
            <Inputsection2
                id="email"
                labeltext="Email"
                inputType="email"
                placeholder="Enter email"
                recommendation="recommended"
                value={email}
                onAction = {onEmail}
            />
            <Inputsection2
                id="phone-number"
                labeltext="Phone number"
                inputType="tel"
                placeholder="Enter phone number"
                recommendation="recommended"
                value={ph}
                onAction={onPh}
            />
            <Inputsection2
                id="address"
                labeltext="Address"
                inputType="tel"
                placeholder="City, Country"
                recommendation="recommended"
                value={location}
                onAction={onLocation}
            />
        </form>
    )
}

export function Inputsection({ id, labeltext, inputType,
    placeholder, value , onFullname}) {
    return (
        <div className="input-section">
            <label htmlFor={id}>
                <span className="label-text">{labeltext}</span>
            </label>
            <input
                type={inputType}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange = {onFullname}
            />
        </div>
    )
}

export function Inputsection2({ id, labeltext, inputType,
    placeholder, value, recommendation, onAction }) {
    return (
        <div className="input-section">
            <label htmlFor={id}>
                <span className="label-text">{labeltext}</span>
                <span className="recommended-text">{ recommendation }</span>
            </label>
            <input
                type={inputType}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onAction}
            />
        </div>
    )
}