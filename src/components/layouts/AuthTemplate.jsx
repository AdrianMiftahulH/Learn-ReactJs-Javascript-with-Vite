import PropTypes from 'prop-types';

const AuthTemplate = ({children}) => {
  return (
    <main className="bg-slate-800 w-screen min-h-screen text-white flex justify-center items-center flex-col">
      <section className="w-[300px] bg-slate-500 p-4 rounded-xl">
        {children}
      </section>
    </main>
  )
}

AuthTemplate.propTypes = {
    children: PropTypes.any.isRequired
}
export default AuthTemplate