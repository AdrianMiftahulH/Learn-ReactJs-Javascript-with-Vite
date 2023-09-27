import { PropTypes } from "prop-types";
import { Footer, Header } from "../fragments"

const UserLayout = (props) => {
    const {children} = props;
    return (
        <>
            <Header />
            <main className="min-h-screen mt-6">
                {children}
            </main>
            <Footer />
        </>
    )
}

UserLayout.propTypes = {
    children: PropTypes.any.isRequired
}
export default UserLayout