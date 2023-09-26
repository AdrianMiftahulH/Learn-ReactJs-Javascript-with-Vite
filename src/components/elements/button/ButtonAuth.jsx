import { PropTypes } from "prop-types"

const ButtonAuth = ({titleButton, colorBg}) => {
  return (
    <button className={`bg-${colorBg} px-4 py-2 rounded-full mt-4`}>{titleButton}</button>
  )
}

ButtonAuth.propTypes = {
    titleButton: PropTypes.isRequred,
    colorBg: PropTypes.isRequred,
}

export default ButtonAuth