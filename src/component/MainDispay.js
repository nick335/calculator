import React from "react";

export default function MainDisplay(props){
  let displayBoxClassname = ''
  let displayTextClassname = ''

  if(props.theme === 'theme1'){
    displayBoxClassname = 'display-box-theme1'
    displayTextClassname = 'display-text-theme1'
  }else if(props.theme === 'theme2'){
    displayBoxClassname = 'display-box-theme2'
    displayTextClassname = 'display-text-theme2'
  }else{
    displayBoxClassname = 'display-box-theme3'
    displayTextClassname = 'display-text-theme3'
  }

  return(
    <div className={`display-box ${displayBoxClassname}`}>
      <h1 className={`display-text ${displayTextClassname}`}>{props.error === true ? 'Math Error' : props.display}</h1>
    </div>
  )
}