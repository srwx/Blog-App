// style
import "./loginBox.css"

export default function LoginBox({ closeClick, loginSubmit, loginResult }) {
  return (
    <div className="popupContainer">
      <div className="popupBox">
        <button className="closePopupButton" onClick={closeClick}>
          x
        </button>
        <div className="loginContainer">
          <span className="loginTitle">LOGIN</span>
          <form className="inputContainer" onSubmit={(e) => loginSubmit(e)}>
            <input
              type="text"
              className="usernameLogin"
              placeholder="Username"
              name="username"
            />
            <input
              type="password"
              className="passwordLogin"
              placeholder="Password"
              name="password"
            />
            <button className="loginButton" type="submit">
              LOGIN
            </button>
          </form>
          {loginResult ? loginResult : null}
        </div>
      </div>
    </div>
  )
}
