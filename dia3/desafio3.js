document.getElementById("enviarEscolha").onclick = function() {
let escolha = document.getElementById("escolhaTecnologia");


if(escolha.selectedIndex == 0){
    backend = prompt("Você quer aprender C# ou Java?")
    console.log(backend)
}else{
    frontend = prompt("Você quer aprender React ou Vue")
    console.log(frontend)
}
}

 document.getElementById("enviarPergunta1").onclick = function() {
  var resposta = prompt("área escolhida ou FullStack")
  
  if((resposta == "escolhida","área") || (resposta == "área escolhida")){
    alert(`Você escolheu seguir a área de escolhida, continue assim e estude para chegar longe!`) 
  }else{
    alert("Você escolheu seguir fullStack, continue se dedicando ao maximo!!")
  }
  
}  

const botao = document.getElementById("enviarTecnologia").onclick = function() {
  const tecnologia = document.querySelector("#tecnologiasEscolhidas");
  const linguagem = tecnologia.value
  let comparador = linguagem
  
    switch(comparador){
     case "java":
       alert("Java é uma linguagem excelente para quem que seguir no caminho back-end");
       location.reload(true);
       break;
     case "python":
       alert("Python vem sendo uma das melhores linguagens para back-end e banco de dados");
       location.reload(true);
       break;
     case "javascript":
       alert("javaScript uma linguagem amada por muitos desenvolvedores front-end");
       location.reload(true);
       break;
     case "":
       alert("vazio");
       location.reload(true);
       break;
     case "Css":
       alert("Css a linguagem para quem gostas de construir a parte visual do produto");  
       location.reload(true);
       break;  
     case "React":
      alert("Ferramenta forte do JS para quem sonha construir aplicativos mobiles.");
      location.reload(true);
      break;
   }
}
  
