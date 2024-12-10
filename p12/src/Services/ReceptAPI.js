import DataAdapters from "./DataAdapters";

const ReceptAPI = {
    getUserMain : async function (userId) {
        try {
            console.log("UserId",userId)
            const response = await fetch(/*'./API/User_main.json'*/'http://localhost:3000/user/'+userId);
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            return DataAdapters.userMainFromAPI(data.data);
        } 
        catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    },

    getUserActivity : async function (userId) {
        try {
            const response = await fetch('http://localhost:3000/user/'+userId+'/activity');
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            return DataAdapters.userActivityFromAPI(data.data);
        } catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    },

    getUserSessions : async function (userId) {
        try {
            const response = await fetch('http://localhost:3000/user/'+userId+'/average-sessions');
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            return DataAdapters.userSessionsFromAPI(data.data);
        } catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    },

    getUserPerformance : async function (userId) {
        try {
            const response = await fetch(/*'./API/User_performance.json'*/'http://localhost:3000/user/'+userId+'/performance');
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            console.log("userPerformance",data);
            return DataAdapters.userPerformanceFromAPI(data.data);
        } catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    }
}
export default ReceptAPI;
