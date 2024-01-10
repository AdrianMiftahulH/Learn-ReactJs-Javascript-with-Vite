import  PropTypes from "prop-types"

const ProfileFragment = (props) => {
    const {image, username, email, firstName, lastName} = props;
    return (
        <section className="flex flex-row px-[10%] gap-3">
            <article className="w-2/6">
                <img src={image} alt={username} className="w-full"/>
            </article>
            <article className="w-4/6">
                <LabelProfile heading='Username' data={username} />
                <LabelProfile heading='FirstName' data={firstName} />
                <LabelProfile heading='LastName' data={lastName} />
                <LabelProfile heading='Email' data={email} />
            </article>
        </section>
    )
}

const LabelProfile = ({heading, data}) => {
    return (
        <div className="w-full">
            <h4 className="text-[24px] font-bold">{heading}</h4>
            <p className="text-[18px bg-gray-200 p-2 rounded-sm ">{data}</p>
        </div>
    )
}

ProfileFragment.propTypes = {
    image: PropTypes.any,
    username: PropTypes.any,
    email: PropTypes.any,
    firstName: PropTypes.any,
    lastName: PropTypes.any,
}

LabelProfile.propTypes = {
    heading: PropTypes.any,
    data: PropTypes.any
}

export default ProfileFragment