import "./registerBox.css"

export default function RegisterBox({ closeClick, registerSubmit }) {
  return (
    <div className="popupContainer">
      <div className="popupRegisterBox">
        <button className="closePopupButton" onClick={closeClick}>
          x
        </button>
        <div className="registerContainer">
          <span className="registerTitle">REGISTER</span>
          <form className="inputContainer" onSubmit={(e) => registerSubmit(e)}>
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
        </div>
      </div>
    </div>
  )
}
