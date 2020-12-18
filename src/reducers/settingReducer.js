import { combineReducers } from 'redux';
import {setSlider,test} from '../actions/settingActions'

const initialState = {
    slider:true
  }

export const settingReducer = (state =initialState, action) => {
    switch (action.type){
        case "UPDATE_SLIDER":
            
            return {
                ...state,
            slider:action.sliderStatu
            };
        default:
            return state;
    
    }
    
}

export default settingReducer;

