const ReceptAPI = {
    getUserMain : async function (userId) {
        try {
            console.log("UserId",userId)
            const response = await fetch(/*'./API/User_main.json'*/'http://localhost:3000/user/'+userId);
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = response.json();
            console.log("userMain",data);
            return data/*.data*/;
        } 
        catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    },

    getUserActivity : async function (userId) {
        try {
            const response = await fetch('./API/User_activity.json'/*+userId*/);
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = response.json();
            /*const userActivityFromAPI = (dataFromAPI)=>
            {
                return {
                    data:
                    {
                        id: dataFromAPI.data.id,
                        sessions:
                        [{
                            day: dataFromAPI.data.sessions.day,
                            kilogram: dataFromAPI.data.sessions.kilogram,
                            calories: dataFromAPI.data.sessions.calories
                        }],
                    }
                };
            }*/
            return data//(,userActivityFromAPI);
        } catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    },

    getUserSessions : async function (userId) {
        try {
            const response = await fetch('./API/User_average_sessions.json'/*+userId*/);
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = response.json();
            /*const userSessionsFromAPI = (dataFromAPI)=>
            {
                return {
                    data:
                    {
                        id: dataFromAPI.data.id,
                        sessions:
                        [{
                            day: dataFromAPI.data.sessions.day,
                            sessionLength: dataFromAPI.data.sessions.SessionLength
                        }]
                    }
                };
            }*/
            return data/*(,userSessionsFromAPI)*/;
        } catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    },

    getUserPerformance : async function (userId) {
        try {
            const response = await fetch('./API/User_performance.json'/*+userId*/);
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = response.json();
            /*const userPerformanceFromAPI = (dataFromAPI)=>
            {
                return {
                    data:
                    {
                        id: dataFromAPI.data.id,
                        kind:
                        {},
                        data:
                        [
                            {
                                value:dataFromAPI.data.data.value,
                                kind:dataFromAPI.data.data.kind
                            }
                        ]
                    }
                };
            }*/
            return data//(/*,userPerformanceFromAPI*/);
        } catch (error) {
            console.error('Il y a eu un problème avec la récupération des données:', error);
        }
    }
}
export default ReceptAPI;
/*const userMainFromAPI = (dataFromAPI)=>
    {
        return {
            data:
            {
                id: dataFromAPI.data.id,
                userInfos:
                {
                    firstName: dataFromAPI.data.userInfos.firstName,
                    lastName: dataFromAPI.data.userInfos.lastName,
                    age: dataFromAPI.data.userInfos.age
                },
                todayScore: dataFromAPI.data.todayScrore,
                keyData:
                {
                    calorieCount: dataFromAPI.data.keyData.calorieCount,
                    proteinCount: dataFromAPI.data.keyData.proteinCount,
                    carbohydrateCount: dataFromAPI.data.keyData.carbohydrateCount,
                    lipidCount: dataFromAPI.data.keyData.lipidCount,
                }
            }
        };
    }*/