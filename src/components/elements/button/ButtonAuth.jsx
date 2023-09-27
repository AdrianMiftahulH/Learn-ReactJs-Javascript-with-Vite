import { PropTypes } from "prop-types"

const ButtonAuth = (props) => {
  const {titleButton, colorBg, type} = props;
  return (
    <button className={`bg-${colorBg} px-4 py-2 rounded-full mt-4`} type={type}>{titleButton}</button>
  )
}

ButtonAuth.propTypes = {
    titleButton: PropTypes.any,
    colorBg: PropTypes.any,
    type: PropTypes.any,
}

export default ButtonAuth