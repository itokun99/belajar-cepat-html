/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Belajar Cepat HTML</h5>
            <p style={{fontSize: 12, lineHeight: 1.5,color: "#eee", paddingRight: 24}}>Belajar Cepat HTML adalah modul belajar untuk cepat menguasai HTML. dengan modul ini kamu akan di pandu dengan cepat mulai dari pengenalan, teori, background dan langsung coding. Tujuan dari modul Belajar Cepat dibuat adalah untuk mengarahkan kamu yang ingin menjadi web desainer atau belajar membuat website langsung terjun ke teknik-nya (Ngoding).</p>
          </div>
          <div>
            <h5>Atribusi</h5>
            <a
              href="https://github.com/itokun99/belajar-cepat-html"
              target="_blank"
              rel="noreferrer noopener">
              Repository
            </a>
            <a
              href={`${this.pageUrl('help.html', this.props.language)}`}
              target="_blank"
              rel="noreferrer noopener">
              Bantuan
            </a>
          </div>
          <div>
            <h5>Kontak Saya</h5>
            <a href="https://www.facebook.com/profile.php?id=100019655381248">Facebook</a>
            <a href="https://github.com/itokun99">GitHub</a>
            <a href="https://www.linkedin.com/in/indrawan-lisanto">Linkedin</a>
            <a href="https://www.instagram.com/itoindrawan99">Instagram</a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <a
          href="http://kabayancoding.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
          
            src="https://2.bp.blogspot.com/-7CDPsE_ICQ4/XdJFv2D-8QI/AAAAAAAAEi4/arXVNDelgUAez0w5hhu_apUyHOU_-7mUACLcBGAsYHQ/s1600/logo-kabayan-coding.png"
            alt="Kabayan Coding"
            width="170"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
