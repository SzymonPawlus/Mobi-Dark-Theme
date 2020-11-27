/*
function SetDark(){
  console.log("Hello Dark Theme");
  //
  html = document.querySelector("html");
  html.style["background-color"] = MainColor;

  body = document.querySelector("body");
  body.style["color"] = FontColor;

  head = document.querySelector("#head");
  head.style["background-color"] = MainColor

  sync = document.querySelector("#sync");
  sync.style["background-color"] = MainColor

  nav = document.querySelector("#nav");
  nav.style["background-color"] = BackColor

  head.style["border-bottom"] = "0px"

  nav = document.querySelector("#nav-head");
  nav.style["border-bottom"] ="1px solid " + BackHover;

  nav = document.querySelector("#nav-body-pc");
  nav.style["border-top"] ="1px solid " + BackHover;

  pages = document.querySelectorAll(".pages");
  pages.forEach(page => {
    page.style["background-color"] = MainColor
  });

  account = document.querySelector("#nav-head-my-account");
  account.style["background"] = BackColor
//////////////////////////////////////////////////////////////////
  pages = document.querySelectorAll(".section-head");
  pages.forEach(page => {
    page.style["background-color"] = MainColor
  });

  pages = document.querySelectorAll(".panel");
  pages.forEach(page => {
    page.style["background-color"] = MainColor
  });

  pages = document.querySelectorAll("input");
  pages.forEach(page => {
    page.style["background-color"] = MainColor
    page.style["color"] = FontColor
    if(page.type === "submit"){
      page.style["background-color"] = BackColor
    }
  });

  pages = document.querySelectorAll("textarea");
  pages.forEach(page => {
    page.style["background-color"] = MainColor
    page.style["color"] = FontColor

  });

  pages = document.querySelectorAll(".page-marks-prt-subj-acc");
  pages.forEach(page => {
    page.style["background-color"] = MainColor
    page.style["color"] = FontColor

  });

  pages = document.querySelectorAll(".page-marks-prt-subj-acc > .acc-elm > .acc-elm-head");
  pages.forEach(page => {
    page.style["text-shadow"] = "0 0 2px #fff";
    page.style["color"] = FontColor

  });

  pages = document.querySelectorAll(".tabs-tab > div");
  pages.forEach(page => {
    page.style["background"] = BackColor
  });

  pages = document.querySelectorAll(".page-head");
  pages.forEach(page => {
    page.style["background"] = BackColor
  });

  pages = document.querySelectorAll(".tabs-tab.act");
  pages.forEach(page => {
    page.style["color"] = BackColor
  });

  pages = document.querySelectorAll(".floating-btn");
  pages.forEach(page => {
    page.style["background"] = BackColor
  });

  pages = document.querySelectorAll(".page-head-title");
  pages.forEach(page => {
    page.style["color"] = FontColor
  });

  pages = document.querySelectorAll(".color1");
  pages.forEach(page => {
    page.setAttribute("style", "color: "+ BackColor + " !important")
  });


  pages = document.querySelectorAll(".panel-head");
  pages.forEach(page => {
    page.style["background"] = BackColor
  });

  pages = document.querySelectorAll("a.nav-body-elm.act");
  pages.forEach(page => {
    page.style["background"] = BackHover
  });

  pages = document.querySelectorAll(".nav-head-my-account-elm.act");
  pages.forEach(page => {
    page.style["background"] = BackHover
  });
  pages = document.querySelectorAll(".acc-elm-head-left i");
  pages.forEach(page => {
    page.style["color"] = BackColor
  });
  pages = document.querySelectorAll(".section-head-left i");
  pages.forEach(page => {
    page.style["color"] = BackColor
  });

}

 */