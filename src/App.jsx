// ..........functional components........

import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './assets/functional-components/hooks/use-context/theme-settings/Home'
import { ThemeProvider } from './assets/functional-components/hooks/use-context/theme-settings/ThemeContext'
import Profile from './assets/functional-components/hooks/use-context/user-list/Profile'
import { UserProvider } from './assets/functional-components/hooks/use-context/user-list/UserContext'
import UseEff from './assets/functional-components/hooks/use-effect/UseEff'
import UserList from './assets/functional-components/hooks/use-effect/UserList'
import Counter from './assets/functional-components/hooks/use-state/Counter'
import Home from './react-outer-dom/Home'
import About from './react-outer-dom/About'
import Product from './dynamic-routing/Product'
import ProductDetails from './dynamic-routing/example/ProductDetails'
import ProductPage from './dynamic-routing/example/ProductPage'
// import BasicFc from './assets/functional-components/BasicFc'
// import Props_Fc from './assets/functional-components/Props_Fc'
// import State from './assets/functional-components/state'
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
      {/* <Props_Fc/> */}
      {/* <Counter/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}

      {/* ----useContext---- */}

      {/* --Example 1-- */}
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}

      {/* --Example 2-- */}
      {/* <UserProvider>
        <Profile/>
      </UserProvider> */}


      {/* ----react router dom---- */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link>                //it used instead of <a> tag used in html
          <Link to='/about'>About</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

      </div> */}

      {/* ----react dynamic router dom---- */}
      {/* <Product/> */}
      {/* <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes> */}

      {/* ----dynamic router dom example---- */}
      {/* <ProductPage/> */}
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
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
// import Should from './class-components/life-cycle-methods/should'

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         {/* <BasicClass/> */}
//         {/* <State/> */}
//         {/* <Mount/> */}
//         {/* <Props name="Anjana" course="Software development"/> */}
//         {/* <Updating/> */}
//         {/* <UnMount/> */}
//         {/* <Should/> */}
//       </>
//     )
//   }
// }

