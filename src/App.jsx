
// import './App.css'
// import Basic from './embedding-expression/basic'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Conditional from './embedding-expression/Conditional'
// import Sum from './embedding-expression/Sum'

// function App() {
  

//   return (
//     <>
//       {/* -----embedding expresiion----- */}
//       {/* <Basic/> */}
//       {/* <Sum/> */}
//       {/* <CallingFunction/> */}
//       <Conditional/>
//     </>
//   )
// }

// export default App

//..........class components...........//

import React, { Component } from 'react'
import BasicClass from './class-components/BasicClass'
import State from './class-components/State'
import Mount from './class-components/life-cycle-methods/Mount'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <BasicClass/> */}
        {/* <State/> */}
        <Mount/>
      </>
    )
  }
}

