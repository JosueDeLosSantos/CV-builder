import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Navbar({ onHide, outHide }) {
	return (
		<nav className="sidebar">
			<Sidebarbutton1 onClick={outHide} text="Content" />
			<Sidebarbutton2 onClick={onHide} text="Customize" />
		</nav>
	)
}

function Sidebarbutton1({ text, onClick }) {
	return (
		<button onClick={onClick} className="sbarBtn">
			<ContactPageIcon sx={{fontSize: "1.1em"}} />
			{text}
		</button>
	)
}
function Sidebarbutton2({ text, onClick }) {
	return (
		<button onClick={onClick} className="sbarBtn">
			<DesignServicesIcon sx={{fontSize: "1.1em"}} />
			{text}
		</button>
	)
}

export default Navbar
