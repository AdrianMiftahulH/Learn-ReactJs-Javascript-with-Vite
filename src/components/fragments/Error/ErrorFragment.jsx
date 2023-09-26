import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"

const ErrorFragment = (props) => {
    const {status, children} = props;
    return (
        <>
            <h1 className="text-[72px] font-bold">{status}</h1>
            <p className="text-[32px]">{children}</p>
            <Link to="/" className="bg-slate-900 px-8 py-4 font-semibold rounded-lg">Home</Link>
        </>
    )
}

ErrorFragment.propTypes = {
    status: PropTypes.isRequired,
    children: PropTypes.isRequired,
}

export default ErrorFragment