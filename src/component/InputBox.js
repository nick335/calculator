import React from "react";

export default function InputBox(props){

  let boxClassname = ''
  let valueClassname = ''
  let onclick = props.value === 'DEL' ? props.del :
  props.value === '=' ?  props.ans :
  props.value === 'RESET' ? props.reset : (event) => props.enter(props.value)

  if(props.theme === 'theme1'){
    boxClassname = 'box-theme1'
    valueClassname = 'value-theme1'
  }else if(props.theme === 'theme2'){
    boxClassname = 'box-theme2'
    valueClassname = 'value-theme2'
  }else if(props.theme === 'theme3'){
    boxClassname = 'box-theme3'
    valueClassname = 'value-theme3'
  }
  let bottomLayout = props.value === 'RESET'  ? 
  props.theme === 'theme1' ? 'box-expand box-expand-theme1':
  props.theme === 'theme2' ? 'box-expand box-expand-theme2': 
  props.theme === 'theme3' ? 'box-expand box-expand-theme3':
  '': ''
  let bottomLayout2 = props.value === '=' ? 
  props.theme === 'theme1' ? 'box-expand2 box-expand2-theme1':
  props.theme === 'theme2' ? 'box-expand2 box-expand2-theme2': 
  props.theme === 'theme3' ? 'box-expand2 box-expand2-theme3':
  '': ''

  let delBox = props.value === 'DEL' ? 
  props.theme === 'theme1' ? 'del-box del-box-theme1':
  props.theme === 'theme2' ? 'del-box del-box-theme2': 
  props.theme === 'theme3' ? 'del-box del-box-theme3':
  '': '' 
  return(
    <div className={`box ${boxClassname} ${bottomLayout} ${bottomLayout2} ${delBox}`} 
    
    onClick= {onclick}>
      <h3 className={`value ${valueClassname}`}>{props.value}</h3>
    </div>
  )
}