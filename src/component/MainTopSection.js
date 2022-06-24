import React from "react";


export default function MainTopSection (props){

  let calcClassname = ''
  let themeBoxClassname = ''
  let themesClassname = ''
  let themeTextClassname = ''
  let themeCircleClassname = ''

  if( props.theme === 'theme1'){
     calcClassname = 'calc-theme1'
     themesClassname = 'themes-theme1'
     themeTextClassname = 'theme-text-theme1'
     themeBoxClassname = 'theme-box-theme1'
     themeCircleClassname = 'theme-circle-theme1'
  }else if( props.theme === 'theme2'){
     calcClassname = 'calc-theme2'
     themesClassname = 'themes-theme2'
     themeTextClassname = 'theme-text-theme2'
     themeBoxClassname = 'theme-box-theme2'
     themeCircleClassname = 'theme-circle-theme2'
  }else {
     calcClassname = 'calc-theme3'
     themesClassname = 'themes-theme3'
     themeTextClassname = 'theme-text-theme3'
     themeBoxClassname = 'theme-box-theme3'
     themeCircleClassname = 'theme-circle-theme3'
  }
  return(
    <div className="calc-top-div">
    <h1 className={`calc ${calcClassname}`}>calc</h1>
    <div className="theme-div">
      <div className="selector">
        <div className="selector-num">
          <h3 className={`themes ${themesClassname}`} onClick={props.set1} >1</h3>
          <h3 className={`themes ${themesClassname}`} onClick={props.set2} >2</h3>
          <h3 className={`themes ${themesClassname}`} onClick={props.set3}>3</h3> 
        </div>
      </div>
      <div className="selector-display">
        <h3 className={`theme-text ${themeTextClassname}`}>theme</h3>
        <div className={`theme-box ${themeBoxClassname}`}>
            <div className={`theme-circle 
            ${themeCircleClassname}`}></div>
          </div>
        </div>
    </div>
  </div>
  )
}