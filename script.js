const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const guide = document.querySelector('#guide');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        //show result
        if(bmi<18.6){
            guide.innerHTML = 'Under Wight';
         }
         else if(bmi>=18.6 && bmi<24.9){
            guide.innerHTML = 'Normal Range';
         }
         else{
            guide.innerHTML = 'Overweight';
         }
        result.innerHTML = `<span>${bmi}</span>`;
       
      
    }

    

});