import DeleteIcon from "@mui/icons-material/Delete"
import ReplayIcon from '@mui/icons-material/Replay';

function Loader({ onClearResume, onLoadSample }) {
	return (
		<div className="loader">
			<Loadbutton1 classn="clear-resume" text="Clear resume" onClick={onClearResume} />
			<Loadbutton2 onClick={onLoadSample} classn="load-sample" text="Load Sample" />
		</div>
	)
}

function Loadbutton1({ classn, text, onClick }) {
	return (
		<button onClick={onClick} className={classn}>
			<DeleteIcon sx={{fontSize: "1.1em"}} />
			{text}
		</button>
	)
}
function Loadbutton2({ classn, text, onClick }) {
	return (
        <button onClick={onClick} className={classn}>
            <ReplayIcon sx={{fontSize: "1.1em"}} />
			{text}
		</button>
	)
}

export default Loader
