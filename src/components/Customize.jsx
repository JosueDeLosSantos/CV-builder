function Customize({ hide, pcolor, onPcolor, onLayout, pfont }) {
	const toggleHide = hide ? "" : "hide"
	return (
		<div className={"Customize" + " " + toggleHide}>
			<Layout onLayout={onLayout} pcolor={pcolor} />
			<Color onPcolor={onPcolor} pcolor={pcolor} />
			<Fonts pfont={pfont} />
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

function Fonts({pfont}) {
	return (
		<div className="Fonts">
			<h2>Fonts</h2>

			<div className="optionbtns">
				<button onClick={pfont} className="arial">
					<div className="arial">Aa</div>
					Arial
				</button>
				<button onClick={pfont} className="Josefin">
					<div className="josefin">Aa</div>
					Josefin
				</button>
				<button onClick={pfont} className="mono">
					<div className="mono">Aa</div>
					Mono
				</button>
			</div>
		</div>
	)
}

export default Customize
