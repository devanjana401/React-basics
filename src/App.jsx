
import './App.css'
import BasicFc from './assets/functional-components/BasicFc'
import Props_Fc from './assets/functional-components/Props_Fc'
import State from './assets/functional-components/state'
// import Basic from './embedding-expression/basic'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Conditional from './embedding-expression/Conditional'
// import Sum from './embedding-expression/Sum'

function App() {
  

  return (
    <>
      {/* -----embedding expresiion----- */}
      {/* <Basic/> */}
      {/* <Sum/> */}
      {/* <CallingFunction/> */}
      {/* <Conditional/> */}
      {/* <RenderingList/> */}

      {/* -------functional components------- */}
      {/* <BasicFc/> */}
      {/* <State/> */}
      <Props_Fc/>
    </>
  )
}

export default App

//..........class components...........//

// import React, { Component } from 'react'
// import BasicClass from './class-components/BasicClass'
// import State from './class-components/State'
// import Mount from './class-components/life-cycle-methods/Mount'
// import Props from './class-components/Props'
// import RenderingList from './embedding-expression/RenderingList'
// import Updating from './class-components/life-cycle-methods/Updating'
// import UnMount from './class-components/life-cycle-methods/UnMount'

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         {/* <BasicClass/> */}
//         {/* <State/> */}
//         {/* <Mount/> */}
//         {/* <Props name="Anjana" course="Software development"/> */}
//         {/* <Updating/> */}
//         <UnMount/>
//       </>
//     )
//   }
// }

