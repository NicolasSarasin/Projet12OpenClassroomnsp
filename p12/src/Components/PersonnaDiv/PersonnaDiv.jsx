import "../../project.css";
function PersonnaDiv(props){
	//props to use here
	const {section, image} = props;
    return (
        <div className="App">
			<div className="PersonnaFood"><img src={image} className="logoPersonnaFood" alt="logoPersonnaFood"/>{section}</div>
        </div>
    )
}
export default PersonnaDiv;