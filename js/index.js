let botaoPersonagen = document.querySelector('#botao-personagem');
let botaoEpisodio = document.querySelector('#botao-episodio');

botaoPersonagen.addEventListener('click', function(){
  let idPersonagem = document.querySelector('#input-id-personagem');

   let personagem = buscaPersonagem(idPersonagem.value);
   
})
botaoEpisodio.addEventListener('click', function(){
   let idEpisodio = document.querySelector('#input-id-episodio');

   let episodio = buscaEpisodio(idEpisodio.value);

})


function buscaPersonagem(id) {
    
   return fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then(res => res.json())
   .then(data => {

      let tbody = document.querySelector('.tabela__personagem-tbody');
      let divPerso = document.querySelector('.principal__personagens');
      divPerso.classList.add('principal__cartao-personagens');

      divPerso.innerHTML = `<img class="principal__personagem-imagem" src="https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg">
                           <p>Id: ${data.id}</p>
                           <p>Nome: ${data.name}</p>
                           <p>Estado: ${data.status}</p>
                           <p>Gênero: ${data.gender}</p>
                           <p>Origem: ${data.origin['name']}`

       let personagem = new Personagem (data.id, data.name, data.status, data.gender, data.origin['name']);
         console.log(personagem)  
         return personagem;
   })
}



function buscaEpisodio(id) {
   return fetch(`https://rickandmortyapi.com/api/episode/${id}`)
   .then(res => res.json())
   .then(data => {

      let divEpi = document.querySelector('.principal__episodios');
      divEpi.classList.add('principal__cartao-episodios');

      divEpi.innerHTML = `<p>Id: ${data.id}</p>
      <p>Nome: ${data.name}</p>
      <p>Estreia: ${data.air_date}</p>
      <p>Episódio: ${data.episode}</p>`

      let episodio = new Episodio (data.id, data.name, data.air_date, data.episode, data.characters);

      let nomes = data.characters;
      const nomesTeste = [];
      
      nomes.forEach(element => {
        return nomesTeste.push(fetch(element).then(response => response.json()));
      });
   
      Promise.all(nomesTeste)
         .then(personagens => {
            let texto = '';
   
            personagens.forEach(element => {
               texto += `${element.name}; `;
            })

         divEpi.innerHTML = `<p><span class="principal__episodio-descricao">Id:</span> ${data.id}</p>
         <p><span class="principal__episodio-descricao">Nome:</span> ${data.name}</p>
         <p><span class="principal__episodio-descricao">Estreia:</span> ${data.air_date}</p>
         <p><span class="principal__episodio-descricao">Episódio:</span> ${data.episode}</p>
         <p><span class="principal__episodio-descricao">Personagens:</span> ${texto}`
   
         })

         return episodio;

   })
}

/*

async function buscaNome(id){
   let response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
   let userdata = await response.json();

   let nomes = userdata.characters;

   let nomePersonagensEpisodio = '';

   const nomesTeste = [];

   await nomes.forEach(element => {
      nomesTeste.push(fetch(element).then(response => response.json()));
   });


   Promise.all(nomesTeste)
      .then(personagens => {
         let texto = '';

         personagens.forEach(element => {
            texto += `${element.name}, `;

         })

         nomePersonagensEpisodio = texto;
      })
      console.log(nomePersonagensEpisodio)
      return nomePersonagensEpisodio;
}
*/