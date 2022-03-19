let botaoPersonagen = document.querySelector('#botao-personagem');
let botaoEpisodio = document.querySelector('#botao-episodio');

botaoPersonagen.addEventListener('click', function(){
  let idPersonagem = document.querySelector('#input-id-personagem');

   let teste = buscaPersonagem(idPersonagem.value);

   console.log(teste)

   
})

botaoEpisodio.addEventListener('click', function(){
   let idEpisodio = document.querySelector('#input-id-episodio');


   window.alert('teste')
   console.log(idEpisodio.value);
   let teste = buscaEpisodio(idEpisodio.value);

   console.log(teste)



})


function buscaPersonagem(id) {
    
   return fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then(res => res.json())
   .then(data => {

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

function buscaEpisodio(id) {
   return fetch(`https://rickandmortyapi.com/api/episode/${id}`)
   .then(res => res.json())
   .then(data => {

      let tbody = document.querySelector('.tabela__episodio-tbody');
      let linha = tbody.insertRow();
      linha.insertCell(0).innerHTML = `${data.id} `
      linha.insertCell(1).innerHTML = `${data.name} `
      linha.insertCell(2).innerHTML = `${data.air_date} `
      linha.insertCell(3).innerHTML = `${data.episode} `
      linha.insertCell(4).innerHTML = `${data.characters['name']} `
      
       let episodio = new Episodio (data.id, data.name, data.air_date, data.episode, data.characters);
         console.log(episodio)  
         return episodio;
   })
}

/*
id, nome, data, episodio, personagens)*/