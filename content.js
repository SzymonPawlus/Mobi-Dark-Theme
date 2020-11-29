const _mainColor = "#111", _secondColor = "#333", _fontColor = "#ccc", _backColor = "#006b9f", _backHover = "#117caf";
const config = { attributes: true, childList: false, subtree: false };

const settingsMobile = [
    { selectors: [ "html", ".pages", ".section-head", ".panel", "input", "textarea", ".page-marks-prt-subj-acc" ], style: "background-color", value: _mainColor, important: false },
    { selectors: [ "#head", "#sync" ], style: "background-color", value: _mainColor, important: false, },
    { selectors: [ "#nav", 'input[type="submit"]' ], style: "background-color", value: _backColor, important: false },
    { selectors: [ "#head" ], style: "border-bottom", value: "0px", important: false },
    { selectors: [ "#nav-head" ], style: "border-bottom", value: "1px solid " + _backHover, important: false, },
    { selectors: [ "#nav-body-pc" ], style: "border-top", value: "1px solid " + _backHover, important: false, },
    { selectors: [ "#nav-head-my-account", ".tabs-tab > div", ".page-head", ".tabs-tab > div", ".floating-btn", ".panel-head" ], style: "background", value: _backColor, important: false, },
    { selectors: [ "input", "span", "textarea", ".page-marks-prt-subj-acc", ".page-marks-prt-subj-acc > .acc-elm > .acc-elm-head", "body", ".page-head-title" ], style: "color", value: _fontColor, important: false },
    { selectors: [ ".page-marks-prt-subj-acc > .acc-elm > .acc-elm-head" ], style: "text-shadow", value: "0 0 2px #fff", important: false, },
    { selectors: [ ".tabs-tab.act", ".acc-elm-head-left i", ".section-head-left i" ], style: "color", value: _backColor, important: false },
    { selectors: [ ".content1" ], style: "color", value: _backColor, important: true },
    { selectors: [ "a.nav-body-elm.act" ], style: "background", value: _backHover, important: true, },
    { selectors: [ ".nav-head-my-account-elm.act" ], style: "background", value: _backHover, important: false, },
    { selectors: [ "tr.bg-gray" ], style: "background", value: _secondColor, important: false }
];

const settingsStandard = [
    { selectors: [ "html" ], style: "background-color", value: _mainColor, important: false },
    { selectors: [ "body", "a.info", ".fc-day-header", ".fc-button", "ul.dropdown a:link, ul.dropdown a:visited", "div.logo h1", "table.spis a" ], style: "color", value: _fontColor, important: true },
    { selectors: [ "body", ".komorka_kolor", ".komorka_biala", ".fc-day-header", ".stronnicowanie > a", ".dropdown > li:hover" ], style: "background", value: _mainColor, important: true },
    { selectors: [ ".header", ".content", ".form input.form-control", ".wiadomosc_tresc", ".komorka_biala", ".plansc_godz > div > span", ".plansc_godz > div > span b", ".fc-day" ], style: "background", value: _mainColor, important: false },
    { selectors: [ ".form input.form-control", "a.button_right", ".lekcja_data", ".button", 'input[type="submit"]', "a.link1", ".plansc_godz > div > span", ".stronnicowanie > a" ], style: "color", value: _fontColor, important: false, },
    { selectors: [ ".button", 'input[type="submit"]', "a.button_right" ], style: "background-color", value: _backColor, important: false, },
    { selectors: [ "div#top_green", "div#menu_gray", ".plansc_cnt > .plansc_cnt_w > .bx.pz" ], style: "background", value: _backColor, important: false, },
    { selectors: [ "h1" ], style: "text-shadow", value: "1px 1px 0 #333", important: true, },
    { selectors: [ "h1", ".plansc_godz > div > span b" ], style: "color", value: _backColor, important: false },
    { selectors: [ ".fc-button", "ul.dropdown ul" ], style: "background", value: _backColor, important: true, },
    { selectors: [ "ul.dropdown li a.current" ], style: "background", value: _backHover, important: true, },
    { selectors: [ ".fb_iframe_widget" ], style: "display", value: "none", important: true, },
    { selectors: [ ".wiadomosc_tresc > p > span", ".wiadomosc_tresc > p > strong > span", ".wiadomosc_tresc > p > strong > span > span", "#bottom > div", "#bottom > div > a", ".logo > h1", ".dropdown > li:hover", ".ajax > div > h3" ], style: "color", value: _fontColor, important: true },
    { selectors: [ ".fright > .button", "#wyszukiwarka > fieldset > input", ".stronnicowanie > a", "#wyszukiwarka > fieldset > label > input", ".plansc_cnt > .plansc_cnt_w > .bx.pz", "a.button", "a.button_right", "span.fc-button", 'input[type="submit"]' ], style: "border", value: "solid 1px " + _mainColor, important: true },
    { selectors: [ ".komorka_biala", ".zasoby", ".okienko_informacyjne", "#wyszukiwarka > fieldset > label > input" ], style: "background", value: "none", important: true },
    { selectors: [ ".okno", "#wyszukiwarka > fieldset > label > input" ], style: "box-shadow", value: "0px 0px 10px 0px " + _secondColor, important: true },
    { selectors: [ ".plansc_godz > div" ], style: "border-top", value: "1px dashed " + _secondColor, important: false }
];

function setTheme(theme) {
    try {
        theme.forEach((style) => {
            let elements = document.querySelectorAll(style.selectors);
            if (!style.important) {
                elements.forEach((element) => {
                    element.style[style.style] = style.value;
                });
            } else {
                elements.forEach((element) => {
                    let now = element.getAttribute("style");
                    element.setAttribute(
                        "style",
                        now + "; " + style.style + ": " + style.value + " !important"
                    );
                });
            }
        });
    } catch (e) {
        console.log(e);
    }
}

window.onload = load;

function load() {
    chrome.storage.sync.get("value", function (data) {
        const object = JSON.parse(JSON.stringify(data));
        if (object.value) {
            setThemes();
        }
    });
}

function setThemes() {
    if (window.location.href.indexOf("mobile") > -1) {
        setTheme(settingsMobile);
        let setting = () => setTheme(settingsMobile);
        let content = document.querySelector("#sync");
        let content2 = document.querySelector("#dim");
        const observer = new MutationObserver(setting);
        observer.observe(content, config);
        const observer2 = new MutationObserver(setting);
        observer2.observe(content2, config);
    } else {
        setTheme(settingsStandard);
    }
}

chrome.runtime.onMessage.addListener(() => { window.location.reload(); });
