import React from 'react';
import './main.scss';

export class App extends React.Component {
  state = {
    headerBack: false,
  }

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({
        headerBack: true,
      })
    } else {
      this.setState({
        headerBack: false,
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render () {
    const { headerBack } = this.state;
    return (
      <>
        <div className="background">
          <div className={`header-wrapper ${headerBack && 'header-wrapper_background'}`}>
            <header className="header">
              <div className="header__logo-wrapper">
                <p className="header__logo">logo</p>
                <p className="header__logo_bottom">lorem ipsum</p>
              </div>

              <input type="button" value="Register Now" className="register" />
            </header>
          </div>

          <div className="container">
            <div className="main-wrapper">
              <main className="main">
                <p className="text text_29px">limited time offer</p>
                  <p className="text text__extra-bold text_43px wrapper">
                    FIRST DEPOSIT BONUS: 200% <br /> UP TO £50 + 200 BONUS 
                  </p>
                <p className="text text__extra-bold text_29px p_indent"><span className="neon-green">+40 free SPINS</span></p>

                <a href="#" className="register register_big">Register Now</a>
              </main>
            </div>

          
          </div>
        </div>

        <div className="footer-background">
          <div className="footer-wrapper">
            <footer className="footer">
              <div className="footer__top">
                  <img src="./images/visa.png" alt="" />
                  <img src="./images/master-card.png" alt="" />
                  <img src="./images/skrill.png" alt="" />
                  <img src="./images/pay.png" alt="" />
                  <img src="./images/visa.png" alt="" />
                  <img src="./images/master-card.png" alt="" />
                  <img src="./images/skrill.png" alt="" />
                  <img src="./images/pay.png" alt="" />
                  <img src="./images/visa.png" alt="" />
                  <img src="./images/master-card.png" alt="" />
                  <img src="./images/skrill.png" alt="" />
              </div>

              <div className="footer__bottom">
                  <img src="./images/skrill.png" alt="" />
                  <img src="./images/pay.png" alt="" />
                  <img src="./images/visa.png" alt="" />
                  <img src="./images/master-card.png" alt="" />
                  <img src="./images/skrill.png" alt="" />
                  <img src="./images/pay.png" alt="" />
                  <img src="./images/visa.png" alt="" />
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}
