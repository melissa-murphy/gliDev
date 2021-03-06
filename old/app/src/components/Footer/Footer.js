import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
const instagramIcon = require('../../assets/images/icons/instagram.png');
const linkedInLogo = require('../../assets/images/icons/linkedin.png');
const twitterLogo = require('../../assets/images/icons/twitter.png')
const mapIcon = require('../../assets/images/icons/map.png');
const messageIcon = require('../../assets/images/icons/message.png');
const phoneIcon = require('../../assets/images/icons/phone.png');
export const plusIcon = require('../../assets/images/icons/plus.png');
const checkmarkIcon = require('../../assets/images/icons/checkmark.png');


const Footer = () => {
  return (
    <>
      <footer id="footer">
        <Container>
          <Row>
            <Col className="col-lg-6">
              <p className="display-2 mb-2 pt-5 pb-2 text-white">Hello!</p>
            </Col>
          </Row>
          <Col className="text-white">
            <Col className="col-6 col-md-3">
              <h6 className="text-uppercase">Information</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/portfolio">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/faqs">FAQs</NavLink>
                </li>
                <li>
                  <NavLink to="portfolio.html">Gallery</NavLink>
                </li>
              </ul>
            </Col>
            <Col className="col-6 col-md-3">
              <h6 className="text-uppercase">About</h6>
              <ul className="list-unstyled">
                <li>
                  <a href={"contact.html"}>Contact Us</a>
                </li>
                <li>
                  <a href={"about.html"}>Our Mission</a>
                </li>
                <li>
                  <a href={"legal.html"}>Privacy Policy</a>
                </li>
                <li>
                  <a href={"sitemap.html"}>Site Map</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-3 column">
              <h6 className="text-uppercase">Stay Posted</h6>
              <p id="subscribe" className="text-light font-weight-light">
                Get insight on the landscape industry and helpful tips to get
                the most out of your construction project.
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control
                  text-dark"
                    title="GLI norcal newsletter"
                    placeholder="enter your email"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-success text-uppercase
                  small"
                    data-toggle="modal"
                    data-target="#alertModal"
                    type="button"
                  >
                    No spam, we promise!
                  </button>
                </div>
              </form>
            </Col>
            <Col
              className="jobs-link col-12 col-lg-2 ml-lg-auto col-md-3
      ml-md-0 text-right"
            >
              <h6 className="default-pointer text-uppercase">
                Career Opportunities
              </h6>
              <p>
                <a className="text-white" href={'https://linkedin.com'}>
                  Browse the job openings.
                </a>
              </p>
            </Col>
            <Col
              className="social-buttons col-12 text-md-right
      text-right"
            >
              <p className="text-uppercase pb-0 mb-0">follow gli norcal</p>
              <ul
                className="d-flex flex-row justify-content-end mt-0
          pt-0"
              >
                <li className="px-0">
                  <a rel="nofollow" href={'https://instagram.com'} title="Instagram">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  &nbsp;
                </li>
                <li className="px-0">
                  <a rel="nofollow" href={'https://linkedin.com'} title="LinkedIn">
                    <img src={linkedInLogo} alt="LinkedIn" />{' '}
                  </a>
                  &nbsp;
                </li>
                <li className="px-0">
                  <a rel="nofollow" href={'https://twitter.com'} title="Twitter">
                    <img src={twitterLogo} alt="Twitter" />
                  </a>
                </li>
              </ul>
            </Col>
          </Col>
          <div id="footer-info-links">
            <div
              className="d-flex flex-column flex-md-row
                align-items-md-stretch justify-content-between"
            >
              <div>
                <img src={phoneIcon} alt="call" />
                <a href={"tel+1-415-331-1709"}>415.331.1709</a>
              </div>
              <div>
                <img src={messageIcon} alt="message" />
                <a
                  className="btn-link pointer"
                  data-toggle="modal"
                  href={"#contact-form-footer"}
                >
                  hello@glinorcal.com
                </a>
              </div>
              {/* Contact Modal */}
              <div
                id="contact-form-footer"
                className="modal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="contact-form-footer"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div
                      className="typeform-widget typeform-widget-footer"
                      data-url="https://melissa809591.typeform.com/to/c7sbBC"
                      data-transparency={0}
                      style={{ width: '100%', height: 400 }}
                    />{' '}
                    <div
                      style={{
                        fontFamily: 'Sans-Serif',
                        fontSize: 12,
                        color: '#000',
                        opacity: '0.5',
                        paddingTop: 5
                      }}
                    >
                      {' '}
                      powered by{' '}
                      <a
                        href={"https://admin.typeform.com/signup?utm_campaign=c7sbBC&utm_source=typeform.com-13641156-Basic&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN"}
                        style={{ color: '#000' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Typeform
                      </a>{' '}
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal */}
              <div className="d-flex flex-row">
                <img src={mapIcon} alt={"address"} />
                <a
                  href={"https://www.google.com/maps/place/GLI+Norcal+Landscape+Construction/@37.939707,-122.514235,15z/data=!4m5!3m4!1s0x0:0x8c67891c5a08c38c!8m2!3d37.939707!4d-122.514235"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  125 Rich Street <br />
                  Greenbrae, CA 94904
                </a>
              </div>
              <div className="d-flex flex-row">
                <img src={checkmarkIcon} alt="checkmark" />
                <a
                  href={"https://www2.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=668200"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSLB Licensed Landscape <br />
                  Contractor #668200
                </a>
              </div>
            </div>
            <p className="text-light text-center default-pointer">
              <small>
                © 2019 GLI Norcal Landscape Construction All Rights Reserved
              </small>
            </p>
          </div>
          <hr />
          <div>
            <p className="text-white text-center">
              <a className="tmd-link inactive" href={"https://www.thoughtfulmonkey.design"}>
                <small>Crafted with care by Thoughtful Monkey Designs</small>
              </a>
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
