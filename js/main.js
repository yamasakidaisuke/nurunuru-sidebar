//「スクロール」毎に、座標分-を-scroll-y変数に代入
let root = document.documentElement;

window.addEventListener("scroll", () => {
  root.style.setProperty('--scroll-y', window.scrollY + "px");
});
