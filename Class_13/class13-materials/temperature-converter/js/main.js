//Write your pseduo code first! 
//0 -> 32



document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    //get value that is in selseeyus
    let temp = document.querySelector('#sel').value 
    
    // convert from selseeyus to fairnheight
    temp = temp * 9/5 + 32
    
    // display value in DOM
    document.querySelector('#result').innerText = temp
}

