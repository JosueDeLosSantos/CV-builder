function Addeducation({ ed }) {
    return (
        <div className="add-education">
            <button className="expand-btn">
                <h2 className="expand-btn-header">Education</h2>
            </button>
            <div className="section-content">
                <div className="forms-container">
                    <List ed = {ed} />
                </div>
                <button className="create-form">
                    <h4 className="btn-content">Education</h4>
                </button>
            </div>
        </div>
    )
}

function List({ ed }) {
    const listItems = ed.map(el => 
        <button className="btn-form" key={el.id}>{ el.school }</button>
    )
    return <>{listItems}</>
}

export default Addeducation