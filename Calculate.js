let screen=document.getElementById('out');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText);
        if(buttonText=='*'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='a/c'){
            screenValue="";
            screen.value=screenValue;
        }
           else if(buttonText=='='){
            screenValue+=buttonText;
            screen.value=screenvalue;
           }
        }
