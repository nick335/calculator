import React from "react";
import MainTopSection from "./MainTopSection";
import MainDisplay from "./MainDispay";
import InputData from "./InputData";
import InputBox from "./InputBox";
import { nanoid } from "nanoid";

export default function Main(){
  const [theme, setTheme] = React.useState('theme2')
  const [display, setDisplay] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState(false)

  function setTheme1(){
    setTheme('theme1')
  }
  function setTheme2(){
    setTheme('theme2')
  }
  function setTheme3(){
    setTheme('theme3')
  }
  const enterInput = React.useCallback((value) => {
    if(errorMessage){
      setErrorMessage(true)
    }
    const string= value.toString()
    setDisplay(prev => prev + string)
  }, [errorMessage])
   //clear display
  const reset = React.useCallback(() => {
    setErrorMessage(false)
    setDisplay('')
  }, [])

  function isNumber(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    if (char.trim() === '') {
      return false;
    }
  
    return !isNaN(char);
  }
  function possibleError1(string){
    const possibleMathErorrs = ['++', '--', '..','xx','//','/x','x/', '+/', '-/','+x', '-x']
    const array = []
    for (let i = 0; i < possibleMathErorrs.length; i++) {
      const element = possibleMathErorrs[i];
      if(string.includes(element)){
        array.push(true)
      }else{
        array.push(false)
      }
     }
     if(array.includes(true)){
      return true
     }else{
      return false
     }
  }
  const possibleError2 = React.useCallback((string) => {
    const possibleMathErorrs2 = ['+-', '-+', '.+','+.', '-.','.-','.x','x.', './', '/.']
    for (let index = 0; index < possibleMathErorrs2.length; index++) {
      const element = possibleMathErorrs2[index];
      if(string.includes(element)){
        const index = string.indexOf(element)
        const lastindex = string.length - 1
        if(index === 0 || !isNumber(string[lastindex])  ){
          return true
        }else{
         let haystack = string
         let needle = element
         let pos = 0; // Position Ref
         let result = []; // Final output of all index's.
          // Loop to check all occurrences 
         while (haystack.indexOf(needle, pos) !== -1) {
         result.push(haystack.indexOf(needle , pos));
         pos = haystack.indexOf(needle , pos) + 1;
         }
         const array = []
         for (let j = 0; j < result.length; j++) {
          const element2 = result[j];
          const prev = element2 - 1
          const next = element2 + 2
          if(isNumber(string[prev]) && isNumber(string[next])){
            array.push(true)
          }else{
            array.push(false)
          }
         }
         if(array.includes(false)){
          return true
         }else{
          return false
         }
        }
      }else{
        return false
      }
      
     }
  }, [])
  // function possibleError2(string){
  //   const possibleMathErorrs2 = ['+-', '-+', '.+','+.', '-.','.-','.x','x.', './', '/.']
  //   for (let index = 0; index < possibleMathErorrs2.length; index++) {
  //     const element = possibleMathErorrs2[index];
  //     if(string.includes(element)){
  //       const index = string.indexOf(element)
  //       const lastindex = string.length - 1
  //       if(index === 0 || !isNumber(string[lastindex])  ){
  //         return true
  //       }else{
  //        let haystack = string
  //        let needle = element
  //        let pos = 0; // Position Ref
  //        let result = []; // Final output of all index's.
  //         // Loop to check all occurrences 
  //        while (haystack.indexOf(needle, pos) !== -1) {
  //        result.push(haystack.indexOf(needle , pos));
  //        pos = haystack.indexOf(needle , pos) + 1;
  //        }
  //        const array = []
  //        for (let j = 0; j < result.length; j++) {
  //         const element2 = result[j];
  //         const prev = element2 - 1
  //         const next = element2 + 2
  //         if(isNumber(string[prev]) && isNumber(string[next])){
  //           array.push(true)
  //         }else{
  //           array.push(false)
  //         }
  //        }
  //        if(array.includes(false)){
  //         return true
  //        }else{
  //         return false
  //        }
  //       }
  //     }else{
  //       return false
  //     }
      
  //    }
  // }
  function endsWithNumber(str){
    const error = ['+', '-', 'x','/']
    const index = str.length - 1
    const lastString = str[index]
    if(error.includes(lastString)){
      return true
    }else{
      return false
    }
  }
  function checkConsectutive(string){
    const str = string
    const pattern = /([+,-,x,/])\1\1+/g;
    const matches = str.match(pattern);

    if(matches){
      return true
    }else{
      return false
    }
  }
  //calculation and catching error
  const equals = React.useCallback(() => {
    const string = display
    if(containsNumber(string) === false && string !== ''){
        setErrorMessage(true)
    }
    else if(possibleError1(string) === false && possibleError2(string) === false && endsWithNumber(string) === false && checkConsectutive(string) === false){
      const newString = string.replace(/x/g, '*')
      console.log(newString)
      const calc = eval(newString)
      console.log(calc)
    }else{
      setErrorMessage(true)
    }
  }, [display, possibleError2])
  // function equals(){
  //   const string = display
  //   if(containsNumber(string) === false && string !== ''){
  //       setErrorMessage(true)
  //   }
  //   else if(possibleError1(string) === false && possibleError2(string) === false && endsWithNumber(string) === false && checkConsectutive(string) === false){
  //     const newString = string.replace(/x/g, '*')
  //     console.log(newString)
  //     const calc = eval(newString)
  //     console.log(calc)
  //   }else{
  //     setErrorMessage(true)
  //   }
  // }
  //delete from display
  function del(){
    if (errorMessage) {
      setErrorMessage(false)
    }
    setDisplay(prev => prev.slice(0, -1))
  }
  function containsNumber(str) {
    return /\d/.test(str);
  }
  //keyboard effect
  React.useEffect(() => {
    const num = ["1",'2','3','4','5','6','7','8','9','0','+','-','/','.']
    function handleKeyDown(e) {
      if(e.key === '*'){
        enterInput('x')
      }
      for (let i = 0; i < num.length; i++) {
        if(e.key === num[i]){
          enterInput(e.key)
        }
      }
      if(e.key === 'Backspace'){
        setDisplay(prev => prev.slice(0, -1))
      }
      if(e.key === 'Delete'){
        reset()
      }
      if(e.key === 'Enter'){
        equals()
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enterInput, reset,equals]);

let mainClassname = ''
let inputClassname = ''

  if( theme === 'theme1'){
     mainClassname = 'main-theme1'
     inputClassname = 'input-container-theme1'    
  }else if( theme === 'theme2'){
     mainClassname = 'main-theme2'
     inputClassname = 'input-container-theme2'  
  }else{
     mainClassname = 'main-theme3'
     inputClassname = 'input-container-theme3'  
  }

  const data= InputData

  const dataElements = data.map(each => {
    return <InputBox 
              value = {each}
              theme = {theme}
              enter = {enterInput}
              del = {del}
              ans = {equals}
              reset = {reset}
              key = {nanoid()}
    />
  })

  return(
    <main className={`main ${mainClassname}`}>
      <div className="main-container">
       <MainTopSection 
          theme = {theme}
          set1 = {setTheme1}
          set2 = {setTheme2}
          set3 = {setTheme3}
       />
       <MainDisplay 
        theme = {theme}
        display = {display}
       />
       <div className={`input-container ${inputClassname}`}>
          {dataElements}
       </div>
      </div>
    </main>
  )
}