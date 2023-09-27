function Customize({ hide, pcolor, onPcolor, onLayout }) {
	const toggleHide = hide ? "" : "hide"
	return (
		<div className={"Customize" + " " + toggleHide}>
			<Layout onLayout={onLayout} pcolor={pcolor} />
			<Color onPcolor={onPcolor} pcolor={pcolor} />
		</div>
	)
}

function Layout({ pcolor, onLayout }) {
	return (
		<div className="layout">
			<h2>Layout</h2>
			<div className="optionbtns">
				<button className="top-look" onClick={onLayout}>
					<div
						style={{ background: `linear-gradient(180deg, ${pcolor} 50%, #fff 50%)` }}
						className="top-look"
					></div>
					Top
				</button>
				<button className="left-look" onClick={onLayout}>
					<div
						style={{ background: `linear-gradient(90deg, ${pcolor} 50%, #fff 50%)` }}
						className="left-look"
					></div>
					Left
				</button>
				<button className="right-look" onClick={onLayout}>
					<div
						style={{ background: `linear-gradient(270deg, ${pcolor} 50%, #fff 50%)` }}
						className="right-look"
					></div>
					Right
				</button>
			</div>
		</div>
	)
}

function Color({ pcolor, onPcolor }) {
	return (
		<div className="Color">
			<h2>Color</h2>

			<label className="accent-color">
				Color picker
				<input onInput={onPcolor} type="color" value={pcolor} />
			</label>
		</div>
	)
}

export default Customize
