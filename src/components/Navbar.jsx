import "../styles/Navbar.css"

function Navbar() {
	return (
		<nav className="sidebar">
			<Sidebarbutton text="Content" />
			<Sidebarbutton text="Customize" />
		</nav>
	)
}

function Sidebarbutton({ text }) {
	return <button className="sbarBtn">{text}</button>
}

export default Navbar