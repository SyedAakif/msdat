export default {
    setIndicators(state, payload){
        state.indicators = payload
    },
    setRmnchs(state,payload){
        state.rmnchs = payload
        console.log(payload);
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
    }
}