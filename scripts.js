const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const formInputs = document.querySelectorAll("[data-input]");

const addressFields = {
  address: document.querySelector("#address"),
  city: document.querySelector("#city"),
  neighborhood: document.querySelector("#neighborhood"),
  region: document.querySelector("#region"),
};

cepInput.addEventListener('keypress', (e) => {
  if(!/[0-9]/.test(e.key)) e.preventDefault();
});

cepInput.addEventListener('keyup', (e) => {
  if(e.target.value.length === 8) getAddress(e.target.value);
});

const getAddress = async (cep) =>{
  toggleLoader()
  cepInput.blur(); 

  try{
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if(data.erro){
      resetForm('CEP inválido, tente novamente.');
      return
    };

    allAddressFields(data)

  }catch(err){
    resetForm('Erro ao buscar CEP, tente novamente.');
  }finally{
    toggleLoader()
  }
};

const toggleLoader = () =>{
  document.querySelector("#loader").classList.toggle('hide')
  document.querySelector("#loading").classList.toggle('hide')
}

const resetForm = () =>{
  addressForm.reset();
  toggleDisabled()
}

const toggleDisabled = (disable = true) =>{
  formInputs.forEach((input) => input.toggleAttribute('disabled', disable));
};

const allAddressFields = (data) =>{
  toggleDisabled(false)
  addressFields.address.value = data.logradouro || "";
  addressFields.city.value = data.localidade || "";
  addressFields.neighborhood.value = data.bairro || "";
  addressFields.region.value = data.uf || "";
};