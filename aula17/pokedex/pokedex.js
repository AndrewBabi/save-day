const imgchooseyou = document.querySelector(`#imgpokemon`);
const nomepokemon = document.querySelector(`#nomePokemon`);
const numeropokemon = document.querySelector(`#numeroPokemon`);
const tipopokemon = document.querySelector(`#tipoPokemon`);
const tipopokemon2 = document.querySelector(`#tipoPokemon2`);
const pesopokemon = document.querySelector(`#pesoPokemon`);
const alturapokemon = document.querySelector(`#alturaPokemon`);
const botao1 = document.querySelector(`#btn1`);
const botao2 = document.querySelector(`#btn2`);
const input = document.querySelector(`#input-name`);
const audiopokemon = document.querySelector(`#som-pokemon`)
const form = document.querySelector(`.form`)
let idPokemon = 1;

const fetchPokemon = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}


const showPokemon = async(pokemon)=> {
    const dataPokemon = await fetchPokemon(pokemon);
    imgchooseyou.src = dataPokemon.sprites.front_default;
    nomepokemon.innerHTML = dataPokemon.name;
    numeropokemon.innerHTML = dataPokemon.id;
    pesopokemon.innerHTML = dataPokemon.weight;
    alturapokemon.innerHTML = dataPokemon.height;
    audiopokemon.src = dataPokemon.cries.legacy;
    tipopokemon.innerHTML = dataPokemon.types[0].type.name;
    if(dataPokemon.types.length>1){
        tipopokemon2.innerHTML = dataPokemon.types[1].type.name;
    }else
    tipopokemon2.innerHTML = '';
    
}

botao1.addEventListener("click", () => {
    if (idPokemon > 1) {
        idPokemon -= 1;
        showPokemon(idPokemon);
    }
});

botao2.addEventListener("click", () => {
    idPokemon += 1;
    showPokemon(idPokemon);
});

input,addEventListener("input" , () =>{
    idPokemon = toString(input.value);
})

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase())
}
)

showPokemon(idPokemon);