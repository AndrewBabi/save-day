function validaBusca() {
    if(document.querySelector('#inputlupa').value==''){
    alert('Não podia deixar a busca em branco!');
    return false;
      }
}

document.querySelector('#form-busca').onsubmit = function() {
    return validaBusca();
}