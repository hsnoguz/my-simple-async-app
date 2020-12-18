import thunk from 'redux-thunk';



  // actions.js
export const setSlider = sliderStatu => 
    {
      //console.log(sliderStatu)
    return{
      type: 'UPDATE_SLIDER',
      sliderStatu,
    }};
  
