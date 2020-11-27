const config = { attributes: true, childList: false, subtree: false};
const MainColor = "#111"
const FontColor = "#ccc"
const BackColor = "#006b9f"
const BackHover = "#117caf"
// MainColor: #111 and FontColor: #eee gives the best results

const SettingsMobile = [{Selector: "html", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: "body", Style: "color", Color: FontColor, Imp: false},
      {Selector: "#head", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: "#sync", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: "#nav", Style: "background-color", Color: BackColor, Imp: false},
      {Selector: "#head", Style: "border-bottom", Color: "0px", Imp: false},
      {Selector: "#nav-head", Style: "border-bottom", Color: "1px solid " + BackHover, Imp: false},
      {Selector: "#nav-body-pc", Style: "border-top", Color: "1px solid " + BackHover, Imp: false},
      {Selector: ".pages", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: "#nav-head-my-account", Style: "background", Color: BackColor, Imp: false},
      {Selector: ".section-head", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: ".panel", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: "input", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: "input", Style: "color", Color: FontColor, Imp: false},
      {Selector: 'input[type="submit"]', Style: "background-color", Color: BackColor, Imp: false},
      {Selector: "textarea", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: "textarea", Style: "color", Color: FontColor, Imp: false},
      {Selector: ".page-marks-prt-subj-acc", Style: "background-color", Color: MainColor, Imp: false},
      {Selector: ".page-marks-prt-subj-acc", Style: "color", Color: FontColor, Imp: false},
      {Selector: ".page-marks-prt-subj-acc > .acc-elm > .acc-elm-head", Style: "text-shadow", Color: "0 0 2px #fff", Imp: false},
      {Selector: ".page-marks-prt-subj-acc > .acc-elm > .acc-elm-head", Style: "color", Color: FontColor, Imp: false},
      {Selector: ".tabs-tab > div", Style: "background", Color: BackColor, Imp: false},
      {Selector: ".page-head", Style: "background", Color: BackColor, Imp: false},
      {Selector: ".tabs-tab > div", Style: "background", Color: BackColor, Imp: false},
      {Selector: ".tabs-tab.act", Style: "color", Color: BackColor, Imp: false},
      {Selector: ".floating-btn", Style: "background", Color: BackColor, Imp: false},
      {Selector: ".page-head-title", Style: "color", Color: FontColor, Imp: false},
      {Selector: ".color1", Style: "color", Color: BackColor, Imp: true},
      {Selector: ".panel-head", Style: "background", Color: BackColor, Imp: false},
      {Selector: "a.nav-body-elm.act", Style: "background", Color: BackHover, Imp: true},
      {Selector: ".nav-head-my-account-elm.act", Style: "background", Color: BackHover, Imp: false},
      {Selector: ".acc-elm-head-left i", Style: "color", Color: BackColor, Imp: false},
      {Selector: ".section-head-left i", Style: "color", Color: BackColor, Imp: false},
     ]

const SettingsStat = [
    {Selector: "html", Style: "background-color", Color: MainColor, Imp: false},
    {Selector: "body", Style: "color", Color: FontColor, Imp: true},
    {Selector: "body", Style: "background", Color: MainColor, Imp: true},
    {Selector: ".header", Style: "background", Color: MainColor, Imp: false},
    {Selector: ".content", Style: "background", Color: MainColor, Imp: false},
    {Selector: ".form input.form-control", Style: "background", Color: MainColor, Imp: false},
    {Selector: ".form input.form-control", Style: "color", Color: FontColor, Imp: false},
    {Selector: ".button", Style: "background-color", Color: BackColor, Imp: false},
    {Selector: ".button", Style: "color", Color: FontColor, Imp: false},
    {Selector: 'input[type="submit"]', Style: "background-color", Color: BackColor, Imp: false},
    {Selector: 'input[type="submit"]', Style: "color", Color: FontColor, Imp: false},
    {Selector: 'a.button_right', Style: "background-color", Color: BackColor, Imp: false},
    {Selector: 'a.button_right', Style: "color", Color: FontColor, Imp: false},
    {Selector: '.lekcja_data', Style: "color", Color: FontColor, Imp: false},
    {Selector: 'div#top_green', Style: "background", Color: BackColor, Imp: false},
    {Selector: 'div#menu_gray', Style: "background", Color: BackColor, Imp: false},
    {Selector: '.komorka_kolor', Style: "background", Color: MainColor, Imp: true},
    {Selector: '.komorka_biala', Style: "background", Color: MainColor, Imp: true},
    {Selector: '.wiadomosc_tresc', Style: "background", Color: MainColor, Imp: false},
    {Selector: '.komorka_biala', Style: "background", Color: MainColor, Imp: false},
    {Selector: 'a.link1', Style: "color", Color: FontColor, Imp: false},
    {Selector: 'h1', Style: "text-shadow", Color: "0 #e3e3e3", Imp: false},
    {Selector: 'h1', Style: "color", Color: BackColor, Imp: false},
    {Selector: '.plansc_godz > div > span', Style: "background", Color: MainColor, Imp: false},
    {Selector: '.plansc_godz > div > span b', Style: "background", Color: MainColor, Imp: false},
    {Selector: '.plansc_godz > div > span b', Style: "color", Color: BackColor, Imp: false},
    {Selector: '.plansc_godz > div > span', Style: "color", Color: FontColor, Imp: false},
    {Selector: '.plansc_cnt > .plansc_cnt_w > .bx.pz', Style: "background", Color: BackColor, Imp: false},
    {Selector: 'a.info', Style: "color", Color: FontColor, Imp: true},
    {Selector: '.fc-day', Style: "background", Color: MainColor, Imp: false},
    {Selector: '.fc-day-header', Style: "background", Color: MainColor, Imp: true},
    {Selector: '.fc-day-header', Style: "color", Color: FontColor, Imp: true},
    {Selector: '.fc-button', Style: "color", Color: FontColor, Imp: true},
    {Selector: '.fc-button', Style: "background", Color: BackColor, Imp: true},
    {Selector: 'ul.dropdown li a.current', Style: "background", Color: BackHover, Imp: true},
    {Selector: 'ul.dropdown ul', Style: "background", Color: BackColor, Imp: true},
    {Selector: 'ul.dropdown a:link, ul.dropdown a:visited', Style: "color", Color: FontColor, Imp: true},
    {Selector: '.fb_iframe_widget', Style: "display", Color: "none", Imp: true},
    {Selector: 'div.logo h1', Style: "color", Color: FontColor, Imp: true},
    {Selector: 'table.spis a', Style: "color", Color: FontColor, Imp: true},
]

function SetTheme(Theme){
    console.log("Setting Theme....")
    try {
        Theme.forEach(value => {
            let elements = document.querySelectorAll(value.Selector);
            if (!value.Imp) {
                elements.forEach(element => {
                    element.style[value.Style] = value.Color;
                })

            } else {
                elements.forEach(element => {
                    let now = element.getAttribute("style");
                    element.setAttribute("style", now + "; " + value.Style + ": " + value.Color + " !important")
                })
            }
        });
    }catch(e){
        console.log(e)
    }
}

window.onload = Load;

function Load() {
    if (window.location.href.indexOf("mobile") > -1) {
        SetTheme(SettingsMobile)
        let Setting = () => SetTheme(SettingsMobile)
        let content = document.querySelector("#sync");
        let content2 = document.querySelector("#dim");
        const observer = new MutationObserver(Setting);
        observer.observe(content, config);
        const observer2 = new MutationObserver(Setting);
        observer2.observe(content2, config);
    } else {
        SetTheme(SettingsStat);
    }
}
