import '../styles/Loader.css'

function Loader() {
    return (
        <div className="loader">
            <Loadbutton
                classn="clear-resume"
                text="Clear resume"
            />
            <Loadbutton
                classn="load-sample"
                text="Load Sample"
            />
        </div>
    )
}

function Loadbutton({classn, text}) {
    return (
        <button className={classn}>{ text }</button>
    )
}

export default Loader