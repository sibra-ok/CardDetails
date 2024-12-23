let button=document.getElementById('button');
let text=document.getElementById('text');


/*text.addEventListener('input',function(e){

let value=document.getElementById("text").value;
let  name=document.getElementById('name');

name.innerText=value;

console.log('is it?')

})*/

document.querySelectorAll('.input').forEach(element => {
addEventListener('input',function(e){

let text=document.getElementById('text').value;
let name=document.getElementById('name')
name.innerHTML=text;
let num=document.getElementById('number').value;
let digit=document.getElementById('digit');

//num.replace(/\s/g,"")
let space="";
for(let i=0;i<num.length;i++){
if(i>0&&i%4===0){
space+=" ";
}
space+=num.charAt(i);
}

num=space;

this.value=space;
digit.innerText=num;
let date=document.getElementById('date').value;
let exp=document.getElementById('exp');
exp.innerHTML=date;
let year=document.getElementById('year').value
exp.innerHTML+="/"+year;
let cvc=document.getElementById('cvc').value;
let CVC=document.getElementById('CVC');
CVC.innerText=cvc;
console.log('ok')})});

button.addEventListener('click',function(e){
let year=document.getElementById('year').value
let thank=document.getElementById('thank');
let forms=document.getElementById('forms');
let cardCvc=document.getElementById('cardCvc');
let cardMonth=document.getElementById('cardMonth');
let cardName=document.getElementById('cardName');
let text=document.getElementById('text').value;
let num=document.getElementById('number').value;
let date=document.getElementById('date').value;
let cvc=document.getElementById('cvc').value;
if(/\d/.test(text)){cardName.innerHTML='Should not include numbers';}
console.log('clicked')
if(text==""){cardName.innerHTML="should not be blank";}
if(num==""){cardNum.innerHTML='should not be blank';}
if(date==""){cardMonth.innerHTML='should not be blank';}
else if(date<1||date>12){cardMonth.innerHTML='not a valid date';}
if(year<1990||year>2025){cardMonth.innerHTML='not a valid date'}
if(year==""){cardMonth.innerHTML='should not be blank';}
if(cvc.length==""){cardCvc.innerHTML='should not be blank';}
else if(cvc.length>3){cardCvc.innerHTML='only 3 digit';}
else if(cvc.length<3){cardCvc.innerHTML="only 3 digit"}
if(/\d/.test(text)==false&&text==""==false&&num==""==false&&date==""==false&&year==""==false&&cvc==""==false&&cvc.length>3==false&&cvc.length<3==false){
forms.classList.add('Hide')
thank.classList.add('show')
console.log('hiii')
}


})