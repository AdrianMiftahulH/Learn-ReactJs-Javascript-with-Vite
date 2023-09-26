import { PropTypes } from "prop-types"

const InputAuth = ({titleInput, example, typeInput}) => {
    return (
        <>
            <label htmlFor={titleInput}>{titleInput}</label>
            <input 
                className="w-full bg-transparent border border-slate-800 px-4 py-2 rounded-full" 
                type={typeInput}
                id={titleInput}
                placeholder={example}
            />
        </>
    )
}

InputAuth.propTypes = {
    titleInput: PropTypes.isRequred,
    example: PropTypes.isRequred,
    typeInput: PropTypes.isRequred,
}
export default InputAuth