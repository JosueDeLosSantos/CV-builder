function Navbar({ onHide, outHide }) {
	return (
		<nav className="sidebar">
			<Sidebarbutton onClick={outHide} text="Content" />
			<Sidebarbutton onClick={onHide} text="Customize" />
		</nav>
	)
}

function Sidebarbutton({ text, onClick }) {
	return (
		<button onClick={onClick} className="sbarBtn">
			{text}
		</button>
	)
}

export default Navbar
