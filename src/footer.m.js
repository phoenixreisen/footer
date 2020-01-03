import Config from './config';

export const Footer = {

    view: (v) => {
        const { urls:interns } = Config;
        const { headline, env, urls:externs } = v.attrs;
        const urls = Object.assign({}, interns, externs);

        return (
            <footer class={`phx-footer ${env && env === 'staging' ? 'staging' : ''}`}>
                <div class="social-media">
                    <div class="mb1"><strong>{headline || 'Sie finden uns auch auf'}</strong></div>
                    <div class="social-media__icons">
                        <a href={urls.PHXWEBSITE} class="social-media__icon desktop-only" title="Phoenix Reisen" target="_blank" rel="noopener noreferrer">
                            <img src={require('./icons/phoenixreisen.jpg')} alt="Phoenix Reisen Website" />
                        </a>
                        <a href={urls.FACEBOOK} class="social-media__icon" title="Phoenix Reisen TV auf Facebook" target="_blank" rel="noopener noreferrer">
                            <img src={require('./icons/facebook.png')} alt="Phoenix Reisen TV auf Facebook" />
                        </a>
                        <a href={urls.YOUTUBE} class="social-media__icon" title="Phoenix Reisen TV auf YouTube" target="_blank" rel="noopener noreferrer">
                            <img src={require('./icons/youtube.png')} alt="Phoenix Reisen TV auf YouTube" />
                        </a>
                        <a href={urls.PHXTV} class="social-media__icon" title="Phoenix TV" target="_blank" rel="noopener noreferrer">
                            <img src={require('./icons/tv.png')} alt="Phoenix TV" />
                        </a>
                        <a href={urls.INSTAGRAM} class="social-media__icon" title="Phoenix Reisen auf Instagram" target="_blank" rel="noopener noreferrer">
                            <img src={require('./icons/instagram.png')} alt="Phoenix Reisen auf Instagram" />
                        </a>
                        <a href={urls.INSTAGRAM_HASHTAG} class="social-media__icon" title="Impressionen unserer Gäste" target="_blank" rel="noopener noreferrer">
                            <img src={require('./icons/insta-hashtag.png')} alt="Impressionen unserer Gäste - #phoenixreisen" />
                        </a>
                        <a href={urls.TWITTER} class="social-media__icon" title="Phoenix Reisen auf Twitter" target="_blank" rel="noopener noreferrer">
                            <img src={require('./icons/twitter.png')} alt="Phoenix Reisen auf Twitter" />
                        </a>
                    </div>
                </div>
                <div class="social-contact mt2 tc">
                    <div><small>Wir sind für Sie da</small></div>
                    <div>
                        <strong><a href="tel:+4922892600" title="Telefonnummer aufrufen">+49 (228) 9260-0</a></strong> oder
                        über <strong><a href="https://www.phoenixreisen.com/kontakt.html" title="Kontaktformular" target="_blank" rel="noopener noreferrer">Kontaktformular</a></strong>
                        <br />
                        <small>montags bis freitags von 09:00 bis 18:00 Uhr</small>
                    </div>
                </div>
                <div class="wrapper wrapper--large phx-footer__wrapper">
                    <ul class="phx-footer__menu noprint">
                        <li class="phx-footer__menu-item">
                            <a href="https://www.phoenixreisen.com/profibereich.html"
                                title="zum Reisebüro-/Profibereich"
                                class="phx-footer__menu-link">
                                <i class="fa fa-angle-right"></i>
                                Reisebüro-/Profibereich
                            </a>
                        </li>
                        <li class="phx-footer__menu-item">
                            <a href="https://www.phoenixreisen.com/reise-und-geschaeftsbedingungen.html"
                                title="zu unseren AGB"
                                class="phx-footer__menu-link">
                                <i class="fa fa-angle-right"></i>
                                AGB
                            </a>
                        </li>
                        <li class="phx-footer__menu-item">
                            <a href="https://www.phoenixreisen.com/datenschutzerklaerung.html"
                                title="zu unserer Datenschutzerklärung"
                                class="phx-footer__menu-link">
                                <i class="fa fa-angle-right"></i>
                                Datenschutzerklärung
                            </a>
                        </li>
                        <li class="phx-footer__menu-item">
                            <a href="https://www.phoenixreisen.com/kontakt.html"
                                title="zu unserer Kontaktseite"
                                class="phx-footer__menu-link">
                                <i class="fa fa-angle-right"></i>
                                Kontakt
                            </a>
                        </li>
                        <li class="phx-footer__menu-item">
                            <a href="https://www.phoenixreisen.com/nutzungsbedingungen.html"
                                title="zu unseren Nutzungsbedingungen"
                                class="phx-footer__menu-link">
                                <i class="fa fa-angle-right"></i>
                                Nutzungsbedingungen
                            </a>
                        </li>
                        <li class="phx-footer__menu-item">
                            <a href="https://www.phoenixreisen.com/impressum.html"
                                title="zu unserem Impressum"
                                class="phx-footer__menu-link">
                                <i class="fa fa-angle-right"></i>
                                Impressum
                            </a>
                        </li>
                    </ul>
                    <div class="phx-footer__logos">
                        <span class="phx-footer__logo"><img src={require('./icons/DRV-Logo.png')} /></span>
                        <span class="phx-footer__logo"><img src={require('./icons/QG-Logo.svg')} /></span>
                    </div>
                </div>
            </footer>
        );
    },
};

export default Footer;