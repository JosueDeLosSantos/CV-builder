import "../styles/Personaldetails.css"

export function Personaldetails({ personalI, onChange }) {
	return (
		<form className="personal-details">
			<h2>Personal Details</h2>
			<Inputsection
				id="full-name"
				labeltext="Full name"
				inputType="text"
				placeholder="First and last name"
				value={personalI.fullName}
				name="fullName"
				onChange={onChange}
			/>
			<Inputsection2
				id="email"
				labeltext="Email"
				inputType="email"
				placeholder="Enter email"
				recommendation="recommended"
				value={personalI.email}
				name="email"
				onChange={onChange}
			/>
			<Inputsection2
				id="phone-number"
				labeltext="Phone number"
				inputType="tel"
				placeholder="Enter phone number"
				recommendation="recommended"
				value={personalI.ph}
				name="ph"
				onChange={onChange}
			/>
			<Inputsection2
				id="address"
				labeltext="Address"
				inputType="tel"
				placeholder="City, Country"
				recommendation="recommended"
				value={personalI.location}
				name="location"
				onChange={onChange}
			/>
		</form>
	)
}

export function Inputsection({
	dataSet,
	id,
	labeltext,
	inputType,
	placeholder,
	value,
	name,
	onChange,
}) {
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
				name={name}
				onChange={onChange}
				data-key={dataSet}
			/>
		</div>
	)
}

export function Inputsection2({
	dataSet,
	id,
	labeltext,
	inputType,
	placeholder,
	value,
	recommendation,
	onChange,
	name,
}) {
	return (
		<div className="input-section">
			<label htmlFor={id}>
				<span className="label-text">{labeltext}</span>
				<span className="recommended-text">{recommendation}</span>
			</label>
			<input
				type={inputType}
				id={id}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
				data-key={dataSet}
			/>
		</div>
	)
}
