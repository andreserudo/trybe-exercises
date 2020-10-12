const btnSubmit = document.getElementById('submitBtn');
const btnClear = document.getElementById('clearBtn');
const selectState = document.getElementById('states');
const birthdate = document.getElementById('birthdate');
const formValues = document.querySelectorAll('.form-element');
const submition = document.getElementById('submition');
const radioPlaces = document.getElementsByName('place');
const citiesStates = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

function submitEvent(e) {
  const dateValue = birthdate.value.split('-');
  const [year, month, day] = dateValue;
  
  e.preventDefault();

  if ((day <= 0) || (day >= 32)) {
    alert('Erro no preenchimento da data: dia informado incorreto.');
    return;
  }
  if ((month <= 0) || (month > 12)) {
    alert('Erro no preenchimento da data: mês informado incorreto.');
    return;
  }
  if ((year <= 1900) || (year > 2020)) {
    alert('Erro no preenchimento da data: ano informado incorreto.');
    return;
  }


  formValues.forEach(element => {
    let paragraph = document.createElement('p');
    
    paragraph.innerText = `${element.id}: ${element.value}`;    
    submition.appendChild(paragraph);
  });

  radioPlaces.forEach(place => {
    if (place.checked) {
      let paragraph = document.createElement('p');

      paragraph.innerText = `${place.name}: ${place.value}`;    
      submition.appendChild(paragraph);  
    }
  });
} 

function clearFields(e) {  
  formValues.forEach(element => {
    element.value = '';
  });
}

Object.keys(citiesStates).forEach(key => {
  let state = document.createElement('option');

  state.innerText = key;
  state.value = key;

  selectState.appendChild(state);
});

btnSubmit.addEventListener('click', submitEvent);
btnClear.addEventListener('click', clearFields);

document.getElementById('birthdate').DatePickerX.init();
document.getElementById('birthdate').DatePickerX.format('d/m/yyyy');
//console.log(citiesStates);