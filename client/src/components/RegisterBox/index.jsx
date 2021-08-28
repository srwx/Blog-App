import "./registerBox.css"

export default function RegisterBox({
  closeClick,
  registerSubmit,
  registerResponse,
}) {
  return (
    <div className="popupContainer">
      <div className="popupRegisterBox">
        <button className="closePopupButton" onClick={closeClick}>
          x
        </button>
        <div className="registerContainer">
          <span className="registerTitle">REGISTER</span>
          <form className="inputContainer" onSubmit={(e) => registerSubmit(e)}>
            <div className="fName-lNameContainer">
              <input
                type="text"
                className="firstnameRegister"
                placeholder="Firstname"
                name="firstname"
              />
              <input
                type="text"
                className="lastnameRegister"
                placeholder="Lastname"
                name="lastname"
              />
            </div>
            <input
              type="text"
              className="usernameRegister"
              placeholder="Username"
              name="username"
            />
            <input
              type="password"
              className="passwordRegister"
              placeholder="Password"
              name="password"
            />
            <input
              type="email"
              className="emailRegister"
              placeholder="Email"
              name="email"
            />
            <button className="registerButton" type="submit">
              REGISTER
            </button>
          </form>
          {registerResponse ? <span>{registerResponse.message}</span> : null}
        </div>
      </div>
    </div>
  )
}
