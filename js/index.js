var banners = ["./img/mario.png", "./img/sans.png"];
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 3000);

const Audiop = (document.querySelector('#audioplayer'))


const inputRange = document.querySelector('#inputr')

inputRange.addEventListener("input", ()=>{Audiop.volume = inputRange.value;});

const buttonPlay = document.querySelector('#play');

buttonPlay.addEventListener("click", () => {
    Audiop.play();
});