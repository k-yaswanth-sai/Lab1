
import './App.css'
import react2 from './react2'
function App() {
  var m="k"
  var age="189"
  function add(a,b){
    return (a+b)
  }

  return (
    <>
      <h2> Web page</h2>
      <p> name{m}</p>
      <p> age{age}</p>
      <p> {add(80,60)}</p>
      <react2 />
       </> 
  )
}

export default App
