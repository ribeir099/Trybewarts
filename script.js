const email = document.getElementById('email');
const senha = document.getElementById('senha');
const button = document.getElementById('button');
const agreementButton = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const comment = document.getElementById('textarea');
const counterComment = document.getElementById('counter');
const formulario = document.getElementById('evaluation-form');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const mailForm = document.getElementById('input-email');
const casa = document.getElementById('house');
let family = '';
let materiasSelecionadas = [];
let avaliacao = '';
let testaTryber = false;

function emailDigitado() {
  const digitado = email.value;
  if (digitado === 'tryber@teste.com') {
    testaTryber = true;
  } else {
    testaTryber = false;
  }
}

email.addEventListener('change', emailDigitado);

function senhaDigitado() {
  const digitado = senha.value;
  if (digitado === '123456') {
    testaTryber = true;
  } else {
    testaTryber = false;
  }
}

senha.addEventListener('change', senhaDigitado);

function loginButton() {
  if (testaTryber) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', loginButton);

agreementButton.addEventListener('click', () => {
  if (agreementButton.checked === true) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
});

comment.addEventListener('input', () => {
  const total = comment.value.length;
  const resto = 500 - total;
  counterComment.innerHTML = resto;
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('family')) {
    family = event.target.value;
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('rate')) {
    avaliacao = event.target.value;
  }
}, false);

function subjectSelectec() {
  const materias = document.querySelectorAll('.subject');
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      materiasSelecionadas.push(materias[index].value);
    }
  }
  materiasSelecionadas = materiasSelecionadas.join(', ');
}

function criaParagrafo(texto) {
  const paragrafo = document.createElement('p');
  paragrafo.innerText = texto;
  return paragrafo;
}

submitButton.addEventListener('click', () => {
  subjectSelectec();
  formulario.innerHTML = '';
  const submit = document.createElement('div');
  submit.id = 'submitContent';
  formulario.appendChild(submit);
  const content = document.getElementById('submitContent');
  content.appendChild(criaParagrafo(`Nome: ${nome.value} ${sobrenome.value}`));
  content.appendChild(criaParagrafo(`Email: ${mailForm.value}`));
  content.appendChild(criaParagrafo(`Casa: ${casa.value}`));
  content.appendChild(criaParagrafo(`Família: ${family}`));
  content.appendChild(criaParagrafo(`Matérias: ${materiasSelecionadas}`));
  content.appendChild(criaParagrafo(`Avaliação: ${avaliacao}`));
  content.appendChild(criaParagrafo(`Observações: ${comment.value}`));
});
