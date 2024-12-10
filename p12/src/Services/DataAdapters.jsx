const DataAdapters = {
    userMainFromAPI : (dataFromAPI)=>
    {
        return {
            userId: dataFromAPI.userId,
            userInfos:
            {
                firstName: dataFromAPI.userInfos.firstName,
                lastName: dataFromAPI.userInfos.lastName,
                age: dataFromAPI.userInfos.age
            },
            todayScore: (dataFromAPI.todayScore==null)? dataFromAPI.score: dataFromAPI.todayScore,
            keyData:
            {
                calorieCount: dataFromAPI.keyData.calorieCount,
                proteinCount: dataFromAPI.keyData.proteinCount,
                carbohydrateCount: dataFromAPI.keyData.carbohydrateCount,
                lipidCount: dataFromAPI.keyData.lipidCount,
            }
        };
    },
    userActivityFromAPI : (dataFromAPI)=>
    {
        return {
            userId: dataFromAPI.userId,
            sessions: dataFromAPI.sessions.map((session, index)=>
            {
                return {
                    index: index + 1,
                    day: session.day,
                    kilogram: session.kilogram,
                    calories: session.calories
                }
            })
        };
    },
    userSessionsFromAPI :(dataFromAPI)=>
    {
        const days = {
            "1": "L",
            "2": "M",
            "3": "M",
            "4": "J",
            "5": "V",
            "6": "S",
            "7": "D",
        };
        return {
            userId: dataFromAPI.userId,
            sessions: dataFromAPI.sessions.map((session)=>{
                return{
                    day: days[session.day],
                    sessionLength: session.sessionLength
                }
            })
            
        };
    },
    userPerformanceFromAPI : (dataFromAPI)=>
    {
        return {
            userId: dataFromAPI.userId,
            kind:
            {
                "1":dataFromAPI.kind["1"],
                "2":dataFromAPI.kind["2"],
                "3":dataFromAPI.kind["3"],
                "4":dataFromAPI.kind["4"],
                "5":dataFromAPI.kind["5"],
                "6":dataFromAPI.kind["6"]
            },
            data:dataFromAPI.data.map((dataRadar)=>{
                return {
                    value:dataRadar.value,
                    kind:dataFromAPI.kind[dataRadar.kind]
                }
            })
        }
    }
}
export default DataAdapters;