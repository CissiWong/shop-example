import React from "react"
import "./index.css"

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <a className="termsOfService" href="/terms-of-service"><span>Terms of Service</span></a>
        <a className="privacyPolicy" href="/privacy-policy">Privacy Policy</a>
        <button className="helpCenter">Helpcenter</button>
      </div>
    )
  }
}

export default Footer
