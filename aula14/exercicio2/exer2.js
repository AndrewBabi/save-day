fetch("./exer2.json")
.then(response=>response.json())
.then(pessoas=>{
    for(const pessoa in pessoas)
    {
        let newName = document.createElement("p");
        newName.innerHTML = pessoas[pessoa].nome;
        document.querySelector('h1').appendChild(newName);

        let newIdade = document.createElement("p");
        newIdade.innerHTML = pessoas[pessoa].idade;
        document.querySelector('h1').appendChild(newIdade);
    }
}
)