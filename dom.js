const e = document.getElementById('Estudiante');
const t = document.getElementById('Trainee');
const j = document.getElementById('Junior');

let categoria = document.getElementById('inputCat');

calcularTotal = () => {
    let valor;
    if(categoria.value === e.value){
          valor = 200 - 200*0.8;
    }else if(categoria.value ===t.value){
          valor = 200 - 200*0.5;
    }else if(categoria.value === j.value){
          valor = 200 - 200*0.15;
    }
      let total = document.getElementById('total');

      total.innerText = "Total a pagar: $" + valor;   
}

borrar = () => {
    let total = document.getElementById('total');
    total.innerText = "Total a pagar: $ 0";   
}


   



