import PropTypes from 'prop-types'
import { Component, useState } from 'react'

// Example class Components
class ButtonClass extends Component {
  render(){
    const {title, variant} = this.props;
    
    return(
      <button className={`p-2 bg-${variant}`}>
        {title}
      </button>
    )
  }
}

// Example Arrow Function
// Use parameter
const ButtonArrow = ({variant}) => {
  return(
    <button className={`p-2 bg-${variant}`}>
      Arrow Function Components
    </button>
  )
}

// Example Funtion without Arrow
function ThisFunc(props) {
  const {variant} = props
  return (
    <button className={`p-2 bg-${variant}`}>
        Function Components
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main
      className="flex flex-col justify-center items-center w-screen min-h-screen bg-slate-700 gap-2">
        <h1 className='text-[43px] font-bold'>Vite + React</h1>
        <div className="p-4 bg-slate-500">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div className="p-2 bg-slate-50 text-center">
          <p className="mb-5">
            Component
          </p>
          <div className='inline-flex gap-3'>
            {/* How to call Component */}
            <ButtonClass title="Class Component" variant='gray-500'/>
            <ButtonArrow variant="slate-500"/>
            <ThisFunc variant="slate-700" />
          </div>
        </div>
      </main>
    </>
  )
}

// Validation Props
ButtonClass.propTypes = {
  title: PropTypes.isRequired,
  variant: PropTypes.isRequired,
};

ButtonArrow.propTypes = {
  variant: PropTypes.isRequired,
};

ThisFunc.propTypes = {
  variant: PropTypes.isRequired,
};

export default App
