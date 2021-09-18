export default {
    indicators(state) {
        return state.indicators
    },

    getRmnchs(state){
       
        return state.rmnchs;
    },
    getprogramArea(state){
        console.log(state.program_area);
        return state.program_area;
    },

    // ******* Data Source Selection ************** //

    dataSource(state) {
        return state.dataSource
    },
    getDataSource(state){
        
        return state.SurveyArray;
    },
};