export default {
    setIndicators(state, payload){
        state.indicators = payload
    },
    setRmnchs(state,payload){
        state.rmnchs = payload
    },

    setPArea(state,payload){
    state.program_area = payload
    },
    
        

    // ******** Data Source Selection ***************** // 
    
    setDataSource(state,payload){
        state.dataSource = payload
        
    },

    setDArea(state,payload){
        state.SurveyArray = payload

    },

    getByProgramAreaData(state, payload) {
        state.indicatorValue = payload
    },

    // ******** Indicator Levels ***************** // 
    getLevels(state,payload){   
        console.log(payload);
        debugger;
        state.levels.push(payload);
    },
    getYears(state,payload){
        
        state.years = payload
        
    },

    popLevels(state,payload){
        const newLevels = state.levels.filter(c => c.id != payload )
        state.levels = newLevels
       
    }

}