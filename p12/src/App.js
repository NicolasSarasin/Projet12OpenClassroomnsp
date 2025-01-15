//import logo from './logo.svg';
import './App.css';
import "./project.css";
import ReceptAPI from "./Services/ReceptAPI.js";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Components/Header/Header.jsx";
import VerticalLayer from './Components/VerticalLayer/VerticalLayer.jsx';
import PersonnaDiv from './Components/PersonnaDiv/PersonnaDiv.jsx';
import MyBarChart from './Components/Graphics/Graphic-1.jsx';
import MyCurveChart from './Components/Graphics/Graphic-2.jsx';
import HexagonalChart from './Components/Graphics/Graphic-3.jsx';
import MyRadialBarChart from './Components/Graphics/Graphic-4.jsx';
function App() {
	const { id } = useParams();
	const [userMain, setUserMain] = useState({
		todayScore:0,
		userInfos:{},
		keyData:{}
	});
	const [userActivity, setUserActivity] = useState({
		sessions:[{},{},{},{},{},{},{}]
	});
	const [userSessions, setUserSessions] = useState({
		sessions:[{},{},{},{},{},{},{}]
	});
	const [userPerformance, setUserPerformance] = useState({
		kind:{},
		data:[{},{},{},{},{},{}]
	});
	// Fetch data from one API when the component mounts
	useEffect(() => {
	  const fetchData = async () => {
		const dataUserMain = await ReceptAPI.getUserMain(id);
		setUserMain(dataUserMain); // Set the fetched data
	  };
	  fetchData();  // Invoke the fetch function
	}, [id]);  // Empty dependency array ensures this runs only once after the initial render
	useEffect(() => {
	  const fetchData = async () => {
		const dataUserActivity = await ReceptAPI.getUserActivity(id);
		setUserActivity(dataUserActivity); // Set the fetched data
	  };
	  fetchData();  // Invoke the fetch function
	}, [id]);
	useEffect(() => {
	const fetchData = async () => {
		const dataUserSessions = await ReceptAPI.getUserSessions(id);
		setUserSessions(dataUserSessions); // Set the fetched data
	  };
	  fetchData();  // Invoke the fetch function
	}, [id]);
	useEffect(() => {
	  const fetchData = async () => {
		const dataUserPerformance = await ReceptAPI.getUserPerformance(id);
		setUserPerformance(dataUserPerformance); // Set the fetched data
	  };
	  fetchData();  // Invoke the fetch function
	}, [id]);
	return (
    <div className="App">
    	<Header/>
		<div className="mainDiv">
			<VerticalLayer/>
			<div className="Personna">
				<div className="Title"><h1>Bonjour<span className="PersonnaName">{userMain.userInfos.firstName}</span></h1></div>
				<p className='PersonaFelicitation'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				<div className="PersonnaDiv">
					<div className="PersonnaDiv1">
						<div className="PersonnaDailyActivity">
							<span className='PersonnaDailyActivitySpan'>Activité quotidienne</span>
							<MyBarChart bars={userActivity}/>
						</div>
						<div className="PersonnaScore">
							<div className="TimeSessions">
								<MyCurveChart data={userSessions}/>
							</div>
							<div className="Graphics">
								<HexagonalChart RadarGrafics={userPerformance}/>
							</div>
							<div className="ObjectifScore">
								<span className='ScoreSpan'>Score</span>
								<MyRadialBarChart score={userMain.todayScore}/>
							</div>
						</div>
					</div>
					<div className="PersonnaDiv2">
						<PersonnaDiv id="Calories" count={userMain.keyData.calorieCount+" kcal"} section="Calories" image="./Images/calories-icon.png"/>
						<PersonnaDiv id="Protéines" count={userMain.keyData.proteinCount+" g"} section="Protéines" image="./Images/protein-icon.png"/>
						<PersonnaDiv id="Glucides" count={userMain.keyData.carbohydrateCount+" g"} section="Glucides" image="./Images/carbs-icon.png"/>
						<PersonnaDiv id="Lipides" count={userMain.keyData.lipidCount+" g"} section="Lipides" image="./Images/fat-icon.png"/>
					</div>
				</div>
			</div>
		</div>
    </div>
	);
}

export default App;
