let botaoPersonagen = document.querySelector('#botao-personagem');

botaoPersonagen.addEventListener('click', function(){
   let idPersonagem = document.querySelector('#input-id');

   console.log(idPersonagem.value);
   let teste = buscaPersonagem(idPersonagem.value);

   console.log(teste)



})


function buscaPersonagem(id) {
    
   return fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then(res => res.json())
   .then(data => {

      console.log(data);

      let tbody = document.querySelector('.tabela__personagem-tbody');
      let linha = tbody.insertRow();
      linha.insertCell(0).innerHTML = `<img class="principal__personagem-imagem" src="https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg">`
      linha.insertCell(1).innerHTML = `${data.id} `
      linha.insertCell(2).innerHTML = `${data.name} `
      linha.insertCell(3).innerHTML = `${data.status} `
      linha.insertCell(4).innerHTML = `${data.gender} `
      linha.insertCell(5).innerHTML = `${data.origin['name']} `
      

   

       let personagem = new Personagem (data.id, data.name, data.status, data.gender, data.origin['name']);
         console.log(personagem)  
         return personagem;
   })
}


