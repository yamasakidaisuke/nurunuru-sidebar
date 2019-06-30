alert('こんにちは')
const a = 10;
console.log(a);

//ウィンドウ上でスクロールする毎に「スクロール」と座標が出力される
window.addEventListener('scroll',()=>{
    console.log('スクロール',window.scrollX, window.scrollY);
});
const size = document.querySelector('#information');
size.style.fontSize = '70px';

let root = document.documentElement;

window.addEventListener("scroll", () => {
  root.style.setProperty('--scroll-y', window.scrollY + "px");
});
