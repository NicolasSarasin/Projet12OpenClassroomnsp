import "../../project.css";
function PersonnaDiv(props){
	//props to use here
	const {section, image, count} = props;
    return (
        <div className="AppPersonnaDiv">
			<div className="PersonnaFood"><img src={image} className="logoPersonnaFood" alt="logoPersonnaFood"/>
                <div className="PersonnaFoodDiv">
                    <h1 className="h1PersonnaFood">
                        {count}
                    </h1>
                    <span>{section}</span>
                </div>
            </div>
        </div>
    )
}
export default PersonnaDiv;