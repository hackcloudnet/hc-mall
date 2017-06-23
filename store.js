import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
    app_bottom_show:true
		
		
	},
  getters:{

  getAppBtmShow:state=>{   
    return state.app_bottom_show;
      }
  },

 mutations:{
 setAppBtmShow:function(state,flag){
  state.app_bottom_show=flag;
    }


  }


})
export default store