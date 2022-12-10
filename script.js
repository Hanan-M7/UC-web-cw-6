function BMI (weight, height){
    let ans= weight/(height*height);
    return ans;
}

console.log(BMI(50,150))

function Status(bmi){
    if(bmi <18.5)
    return ("لديك نقص في الوزن")
    else if (bmi >= 18.5 && bmi <25)
    return ("وزنك صحي")
    else
    return ("لديك زيادة في الوزن")
}

function calculate(){
    weight= document.getElementById("weight").value
    height= document.getElementById("height").value
    let bmiResult= BMI(weight,height)
    if (bmiResult<18.5)
        s1= document.getElementById("result").style.color="orange"
    else if (bmiResult>= 18.5 && bmiResult<25)
        s1= document.getElementById("result").style.color="green"
    else
        s1= document.getElementById("result").style.color="red"
    
        let desc= Status(bmiResult)
    return document.getElementById("result").innerText = bmiResult + " "+desc
}