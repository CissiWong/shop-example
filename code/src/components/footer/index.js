import React from "react"
import "./index.css"
// import styles from ./index.css
// .Footer__link - BEM (yandex)
// .Header__link

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        // className=(styles.link)
        <a className="termsOfService" href="/terms-of-service"><span>Terms of Service</span></a>
        <a className="privacyPolicy" href="/privacy-policy">Privacy Policy</a>
        <button className="helpCenter">Helpcenter</button>
      </div>
    )
  }
}

export default Footer
