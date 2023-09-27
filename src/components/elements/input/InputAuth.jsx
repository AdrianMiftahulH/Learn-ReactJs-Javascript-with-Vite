import  PropTypes from "prop-types"

const InputAuth = (props) => {
    const {titleInput, example, typeInput, name} = props;
    
    return (
        <>
            <label htmlFor={titleInput}>{titleInput}</label>
            <input 
                className="w-full bg-transparent border border-slate-800 px-4 py-2 rounded-full" 
                type={typeInput}
                id={titleInput}
                placeholder={example}
                name={name}
            />
        </>
    )
}

InputAuth.propTypes = {
    titleInput: PropTypes.any,
    example: PropTypes.any,
    typeInput: PropTypes.any,
    name: PropTypes.any,
}
export default InputAuth