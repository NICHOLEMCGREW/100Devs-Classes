//Write your pseduo code first! 

// get value out of input
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#celsius').value
   
    // convert temp
    temp = temp * 9/5 + 32
   
    // display in DOM
    document.querySelector('#result').innerText = temp
}



