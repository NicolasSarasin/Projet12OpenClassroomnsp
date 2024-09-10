//import logo from './logo.svg';
import './App.css';
import "./project.css";
//import ReceptAPI from "./Services/ReceptAPI.js";
import Header from "./Components/Header/Header.jsx";
import VerticalLayer from './Components/VerticalLayer/VerticalLayer.jsx';
import PersonnaDiv from './Components/PersonnaDiv/PersonnaDiv.jsx';
import MyBarChart from './Components/Graphics/Graphic-1.jsx';
import MyCurveChart from './Components/Graphics/Graphic-2.jsx';
import HexagonalChart from './Components/Graphics/Graphic-3.jsx';
import MyRadialBarChart from './Components/Graphics/Graphic-4.jsx';
function App() {
  return (
    <div className="App">
    	<Header/>
		<div className="mainDiv">
			<VerticalLayer/>
			<div className="Personna">
				<div className="Title"><h1>Bonjour<span className="PersonnaName">Thomas</span></h1></div>
				<div className="PersonnaDiv">
					<div className="PersonnaDiv1">
						<div className="PersonnaDailyActivity">
							Activité quotidienne
							<MyBarChart 
								/*Calories=ReceptAPI.USER_ACTIVITY.sessions.calories, 
								Kilogram=ReceptAPI.USER_ACTIVITY.sessions.kilogram, 
								Day=ReceptAPI.USER_ACTIVITY.sessions.day*/
							/>
						</div>
						<div className="PersonnaScore">
							<div className="TimeSessions">
								Durée moyenne des sessions
								<MyCurveChart /*day=ReceptAPI.USER_AVERAGE_SESSIONS.day, session=ReceptAPI.USER_AVERAGE_SESSIONS.sessionLength*//>
							</div>
							<div className="Graphics">
								<HexagonalChart /*RadarKind=ReceptAPI.USER_PERFORMANCE.kind, RadarValue=ReceptAPI.USER_PERFORMANCE.data*//>
							</div>
							<div className="ObjectifScore">
								Score
								<MyRadialBarChart /*score=ReceptAPI.USER_MAIN_DATA.todayScore*//>
							</div>
						</div>
					</div>
					<div className="PersonnaDiv2">
						<PersonnaDiv id="Calories" /*count={ReceptAPI.USER_MAIN_DATA.keyData.calorieCount}*/ section="Calories" image="./Images/calories-icon.png"/>
						<PersonnaDiv id="Protéines" /*count={ReceptAPI.USER_MAIN_DATA.keyData.proteinCount}*/ section="Protéines" image="./Images/protein-icon.png"/>
						<PersonnaDiv id="Glucides" /*count={ReceptAPI.USER_MAIN_DATA.keyData.carbohydrateCount}*/  section="Glucides" image="./Images/carbs-icon.png"/>
						<PersonnaDiv id="Lipides" /*count={ReceptAPI.USER_MAIN_DATA.keyData.lipidCount}*/ section="Lipides" image="./Images/fat-icon.png"/>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
