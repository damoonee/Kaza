import { useState, useRef, useEffect } from "react";
import ArrowDown from '../assets/arrowDown.svg'
import '../style/Collapse.css'

function Collapse(props) {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    };

    const refHeight = useRef();

    useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`);
	}, []);

    return (
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "arrow rotated" : "arrow"}
					src={ArrowDown}
					alt="arrowDown"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"} className="collapse__text">{props.aboutText}</p>
			</div>
		</div>
	);
}

export default Collapse;

