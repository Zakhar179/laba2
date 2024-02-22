const template = Handlebars.compile(Templatefact);
const factories = new Map();

class Factory {
    constructor(id, name, product, email_, employees) {
        this.id = id;
        this.name = name;
        this.product = product;
        this.email_ = email_;
        this.employees = employees;
    }
    saveMap(){
        factories.set(this.id, this);
    }
}
class FactoryMethods{
    submitData(id, name, product, email_, employees){
        const factory = new Factory(id, name, product, email_, employees);
        factory.saveMap();
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('product').value = '';
        document.getElementById('email_').value = '';
        document.getElementById('employees').value = '';
    }
    showAll(){
        const output = document.getElementById('output');
        output.innerHTML = '';

        factories.forEach(factory => {
        const html = template(factory);
        output.innerHTML += html;
    });
    }
    clearForm(){
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('product').value = '';
        document.getElementById('email_').value = '';
        document.getElementById('employees').value = '';
    }
    deleteRecord(){
        const deleteId = document.getElementById('id').value;
        factories.delete(deleteId);
    }
    showRecord(){
    const showId = document.getElementById('showid').value;
    const factory = factories.get(showId);

    if (factory) {
        const output = document.getElementById('output');
        output.innerHTML = template(factory);
    } else {
        alert('Цех с указанным ID не найден');
    }
    }
}
const smallFact = new FactoryMethods();
document.getElementById('submitData').addEventListener('click', () => {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const email_ = document.getElementById('email_').value;
    const employees = document.getElementById('employees').value;
    smallFact.submitData(id, name, product, email_, employees);
  });
  document.getElementById('showAll').addEventListener('click', () => {
    smallFact.showAll();
  });

  document.getElementById('clearForm').addEventListener('click', () => {
    smallFact.clearForm();
  });
  document.getElementById('deleteRecord').addEventListener('click', () => {
    smallFact.deleteRecord();
  });
  document.getElementById('showRecord').addEventListener('click', () => {
    smallFact.showRecord();
  });
  
