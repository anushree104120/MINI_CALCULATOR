let string="";
const buttons=document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.value==="Submit"){
            string= eval(string);
            document.querySelector('.input').value =string;
        }
        else if(e.target.value==="C"){
            string="";
            document.querySelector('.input').value=string;
        }
        else if(e.target.value==="del"){
            string = string.slice(0,-1);
            document.querySelector('.input').value=string;
        }
        else{
            string = string + e.target.value;
        document.querySelector('.input').value =string;

        }
        
    })
})


