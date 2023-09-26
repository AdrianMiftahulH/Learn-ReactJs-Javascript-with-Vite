import { PropTypes } from "prop-types"

const ErrorTemplate = (props) => {
    const {children} = props
  return (
    <main className="bg-slate-800 -screen min-h-screen text-white flex justify-center items-center flex-col gap-4">
        {children}
    </main>
  )
}

ErrorTemplate.propTypes = {
    children: PropTypes.isRequired
}

export default ErrorTemplate