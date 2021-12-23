import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="grid">
              <div className="footer-main">
                <div className="row">
                  <div className="col l-3 m-6 c-12 footer-margin">
                    <div className="footer-logo" />
                    <div className="footer-logo-sub">
                    Learning is the treasure that will follow its owner everywhere.
                    </div>
                    <a href="hoangxuanlong4@gmail.com" className="footer-social">
                      <div className="footer-social-icon">
                        <i className="far fa-envelope" />
                      </div>
                      <div className="footer-social-content">nguyenhuyen1202@gmail.com</div>
                    </a>
                    <a href="tel:0928000760 " className="footer-social">
                      <div className="footer-social-icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="footer-social-content">+84 928 000 760</div>
                    </a>
                    <a href className="footer-social">
                      <div className="footer-social-icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="footer-social-content">
                        Broadway &amp; Morris St, New York
                      </div>
                    </a>
                    <a href className="footer-social">
                      <div className="footer-social-icon" />
                      <div className="footer-social-content" />
                    </a>
                  </div>
                  <div className="col l-3 m-6 c-12 footer-margin">
                    <div className="footer-title">Education Address</div>
                    <div className="footer-text">
                      <div className="footer-text-place">
                        171 Chiến Thắng, Thanh Trì, Hà Nội
                      </div>
                      <div className="footer-text-date">September 7, 2016</div>
                    </div>
                    <div className="footer-text">
                      <div className="footer-text-place">
                        295 Bạch Mai, Hai Bà Trưng, Hà Nội
                      </div>
                      <div className="footer-text-date">September 2, 2017</div>
                    </div>
                    <div className="footer-text">
                      <div className="footer-text-place">
                        17 Nhật Tân, Cầu Giấy, Hà Nội
                      </div>
                      <div className="footer-text-date">September 7, 2016</div>
                    </div>
                  </div>
                  <div className="col l-3 m-6 c-12 footer-margin">
                    <div className="footer-title">Subscribe to our Newsletter</div>
                    <div className="footer-text-sub">
                      We will respond as soon as possible
                    </div>
                    <div className="footer-form">
                      <div className="footer-form-include">
                        <input
                          type="text"
                          className="footer-form-name"
                          placeholder="Name"
                        />
                        <i className="fas fa-user" />
                      </div>
                      <div className="footer-form-include">
                        <input
                          type="email"
                          className="footer-form-email"
                          placeholder="Email"
                        />
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="btn btn-footer">Subscribe</div>
                    </div>
                  </div>
                  <div className="col l-3 m-6 c-12 footer-margin">
                    <div className="footer-title">Privacy Policy</div>
                    <div className="footer-text-sub">
                    E2 is committed to protecting the safety of customers.
                    </div>
                    <div className="footer-text-sub">                   
                    Jobs at Everest Education                
                    </div>
                    <div className="footer-text-sub">
                    @ 2020 Everest Education​
                    </div>
                  </div>
                </div>
              </div>
              <div className="copy-right">
                Copyright by
                <span> @LongHoang2021</span>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;