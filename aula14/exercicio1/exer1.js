
let texto =''
fetch("./exer1.json")
.then(response=>response.json())
.then(objetos=>{

for(const objeto in objetos){
    texto+= " " + objetos[objeto];
}
document.querySelector('h1').innerHTML = texto;
}
);