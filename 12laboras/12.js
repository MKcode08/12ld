let info_correct = false;

function saveForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);

    var userData = {
        vardas: firstName,
        pavarde: lastName,
        sk1: number1,
        sk2: number2
    };
    correctInfo();
    if(info_correct){
        console.log(userData);
        displayResult(userData);
    }
    else{

    }
}

function displayResult(userData) {
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
    var sum = convertNumerals("number1") + convertNumerals("number2");
    
    for (var key in userData) {
        var label = document.createElement('p');
        
        if (key.startsWith('sk')) {
            
        } else {
            label.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ':';
        }
        resultContainer.appendChild(label);

        var value = document.createElement('p');
        
        if (key.startsWith('sk')) {
            
        } else {
            value.textContent = userData[key];
        }
        resultContainer.appendChild(value);
    }
    var sumLabel = document.createElement('p');
    sumLabel.textContent = 'Suma:';
    resultContainer.appendChild(sumLabel);
    var sumValue = document.createElement('p');
    if (sum <= 7) {
        sumValue.style.color = 'red';
    } else if (sum > 7 && sum <= 14) {
        sumValue.style.color = 'orange';
    } else {
        sumValue.style.color = 'green';
    }
    sumValue.textContent = sum;
    resultContainer.appendChild(sumValue);
}
function convertNumerals(inputas){
    var numas = document.getElementById(inputas).value;;

switch (numas) {
    case 'I':
        numas = 1;
        return numas;
        break;
    case 'II':
        numas = 2;
        return numas;
        break;
    case 'III':
        numas = 3;
        return numas;
        break;
    case 'IV':
        numas = 4;
        return numas;
        break;
    case 'V':
        numas = 5;
        return numas;
        break;
    case 'VI':
        numas = 6;
        return numas;
        break;
    case 'VII':
        numas = 7;
        return numas;
        break;
    case 'VIII':
        numas = 8;
        return numas;
        break;
    case 'IX':
        numas = 9;
        return numas;
        break;
    case 'X':
        numas = 10;
        return numas;
        break;
    default:
        return 0;
}
}
function correctInfo() {
    const num1 = convertNumerals("number1");
    const num2 = convertNumerals("number2");
    if ((num1>0&&num1<11)&&(num2>0&&num2<11)) {
      info_correct = true;
    } else {
      alert("nepavyko");
    }
}
