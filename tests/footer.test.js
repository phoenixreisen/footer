global.m = require('mithril');
const test = require("ospec");
const mq = require("mithril-query");
const fs = require('fs');

test.spec('Dateicheck', () => {
    test('Facebook Icon vorhanden', () => {
        const fileExists = fs.existsSync('src/icons/facebook.png');
        test(fileExists).equals(true);
    });
    test('Instagram Icon vorhanden', () => {
        let fileExists = fs.existsSync('src/icons/insta-hashtag.png');
        test(fileExists).equals(true);
        fileExists = fs.existsSync('src/icons/instagram.png');
        test(fileExists).equals(true);
    });
    test('Phoenix Reisen Icon vorhanden', () => {
        const fileExists = fs.existsSync('src/icons/phoenixreisen.jpg');
        test(fileExists).equals(true);
    });
    test('TV Icon vorhanden', () => {
        const fileExists = fs.existsSync('src/icons/tv.png');
        test(fileExists).equals(true);
    });
    test('Twitter Icon vorhanden', () => {
        const fileExists = fs.existsSync('src/icons/twitter.png');
        test(fileExists).equals(true);
    });
    test('Xing Icon vorhanden', () => {
        const fileExists = fs.existsSync('src/icons/xing.png');
        test(fileExists).equals(true);
    });
    test('YT Icon vorhanden', () => {
        const fileExists = fs.existsSync('src/icons/youtube.png');
        test(fileExists).equals(true);
    });
});

test.spec('Oberflächencheck', () => {
    const Footer = require('../test/footer.m').default;
    const Config = require('../test/config').default;
    const footer = mq(Footer);

    test('Fallback Slogan wird gesetzt', () => {
        // mit Standard Headline
        const rendered = mq(Footer);
        test(rendered.should.contain('Sie finden uns auch auf')).equals(true);
        // mit eigener Headline
        const rendered2 = mq(Footer, { headline: 'blabla' });
        test(rendered2.should.contain('blabla')).equals(true);
        test(rendered2.should.not.contain('Sie finden uns auch auf')).equals(true);
    });

    test('Social Media Links sind (irgendwo) gesetzt', () => {
        test(footer.should.have(`a[href="${Config.urls.PHXTV}"]`)).equals(true);
        test(footer.should.have(`a[href="${Config.urls.TWITTER}"]`)).equals(true);
        test(footer.should.have(`a[href="${Config.urls.YOUTUBE}"]`)).equals(true);
        test(footer.should.have(`a[href="${Config.urls.FACEBOOK}"]`)).equals(true);
        test(footer.should.have(`a[href="${Config.urls.INSTAGRAM}"]`)).equals(true);
        test(footer.should.have(`a[href="${Config.urls.PHXWEBSITE}"]`)).equals(true);
        test(footer.should.have(`a[href="${Config.urls.INSTAGRAM_HASHTAG}"]`)).equals(true);
    });

    test('Übergebene Social Media Links überschreiben interne', () => {
        const urls = { YOUTUBE: 'https://www.yt.de', INSTAGRAM: 'https://insta.com' };
        const rendered = mq(Footer, { urls: urls });
        // überschriebene
        test(rendered.should.have(`a[href="${urls.YOUTUBE}"]`)).equals(true);
        test(rendered.should.have(`a[href="${urls.INSTAGRAM}"]`)).equals(true);
        test(rendered.should.not.have(`a[href="${Config.urls.YOUTUBE}"]`)).equals(true);
        test(rendered.should.not.have(`a[href="${Config.urls.INSTAGRAM}"]`)).equals(true);
        // nicht überschriebene existieren weiterhin
        test(rendered.should.have(`a[href="${Config.urls.FACEBOOK}"]`)).equals(true);
        test(rendered.should.have(`a[href="${Config.urls.PHXWEBSITE}"]`)).equals(true);
    });

    test('Öffnungszeiten & Telefonnummer sind angegeben', () => {
        test(footer.should.contain('+49 (228) 9260-0')).equals(true);
        test(footer.should.contain('montags bis freitags von 09:00 bis 18:00 Uhr')).equals(true);
    })

    test('Pflichtlinks sind (irgendwo) vorhanden', () => {
        test(footer.should.contain('Impressum')).equals(true);
        test(footer.should.have('a[href="https://www.phoenixreisen.com/impressum.html"]')).equals(true);
        test(footer.should.contain('Datenschutzerklärung')).equals(true);
        test(footer.should.have('a[href="https://www.phoenixreisen.com/datenschutzerklaerung.html"]')).equals(true);
        test(footer.should.contain('AGB')).equals(true);
        test(footer.should.have('a[href="https://www.phoenixreisen.com/reise-und-geschaeftsbedingungen.html"]')).equals(true);
        test(footer.should.contain('Nutzungsbedingungen')).equals(true);
        test(footer.should.have('a[href="https://www.phoenixreisen.com/nutzungsbedingungen.html"]')).equals(true);
        test(footer.should.contain('Kontakt')).equals(true);
        test(footer.should.have('a[href="https://www.phoenixreisen.com/kontakt.html"]')).equals(true);
    });

    test('Staging wird markiert', () => {
        const staging = mq(Footer, { env: 'staging' });
        const production = mq(Footer, { env: 'production' });
        test(staging.should.have('footer.staging')).equals(true);
        test(production.should.not.have('footer.staging')).equals(true);
    });
});