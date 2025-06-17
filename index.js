const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;

  if(!nome || !sobrenome || !email) {
    alert('Por favor, preencha todos os campos obrigatórios.');
  return ;
  } 
  alert('Formulário enviado com sucesso!');

  console.log("Nome:", nome);
  console.log("Sobrenome:", sobrenome);
  console.log("Email:", email);

  
  form.reset();  
});
