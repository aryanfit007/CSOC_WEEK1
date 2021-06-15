firstpage()
function firstpage(){
    document.querySelector('.choose').style.display='none';
    document.getElementById('forX').style.display='none';
    document.getElementById('forO').style.display='none';
    document.getElementById('main').style.display='none';
    document.querySelector('.move').style.display='none';
    document.getElementById('end').style.display='none';
}
let one;
one= document.getElementById('one');
one.addEventListener('click',function one(){
    document.querySelector('.selection').style.display='none';
    document.querySelector('.choose').style.display='block';
    document.getElementById('forX').style.display='block';
    document.getElementById('forO').style.display='block';
})


let X;
X=document.getElementById('forX');
X.addEventListener('click',function X(){
    document.querySelector('.choose').style.display='none';
    document.getElementById('forX').style.display='none';
    document.getElementById('forO').style.display='none';
    document.querySelector('.move').style.display='block';


let you=document.getElementById('you');
you.addEventListener('click',function(){
    document.querySelector('.move').style.display='none'; 
    document.getElementById('main').style.display='block';
    oneyou('O','X')

})
let comp=document.getElementById('comp');
comp.addEventListener('click',function(){
    document.getElementById('main').style.display='block';
    document.querySelector('.move').style.display='none';
    onecomp('O','X')
})
})
let O=document.getElementById('forO');
O.addEventListener('click',function(){
    document.querySelector('.choose').style.display='none';
    document.getElementById('forX').style.display='none';
    document.getElementById('forO').style.display='none';
    document.querySelector('.move').style.display='block';

    let you=document.getElementById('you');
    you.addEventListener('click',function(){
        document.querySelector('.move').style.display='none'; 
        document.getElementById('main').style.display='block';
        oneyou('X','O');
})
let comp=document.getElementById('comp');
comp.addEventListener('click',function(){
    document.getElementById('main').style.display='block';
    document.querySelector('.move').style.display='none';
    onecomp('X','O'); 
   
})
})
let two=document.getElementById('two');
two.addEventListener('click',function(){
    document.getElementById('main').style.display='block';
    document.querySelector('.selection').style.display='none';
    twop();

})
function twop(){
const status =document.querySelector('.status');
const boxes = document.querySelectorAll('.gamebox');
let gameon =true;
let chanceofx = true;
const win =(letter)=>{
    gameon= false;
    winner =letter;
    if(winner=='x'){
        status.innerHTML = `${(winner)} has won`
    }else{
        status.innerHTML =`<span>${(winner)} has won</span>`
    }
}

const checkgamestatus =()=>{
    const a0 = boxes[0].classList[1];
    const a1 = boxes[1].classList[1];
    const a2 = boxes[2].classList[1];
    const a3 = boxes[3].classList[1];
    const a4 = boxes[4].classList[1];
    const a5 = boxes[5].classList[1];
    const a6 = boxes[6].classList[1];
    const a7 = boxes[7].classList[1];
    const a8 = boxes[8].classList[1];
   
    if(a0&&a0==a1&&a0==a2){
        win(a0);
    } 
    else if(a3&&a3==a4&&a3==a5){
        win(a3);
    }
    else if(a6&&a6==a7&&a6==a8){
        win(a6)
    }
    else if(a0&&a0==a3&&a0==a6){
        win(a0);
    }
    else if(a1&&a1==a4&&a1==a7){
        win(a1)
    }
    else if(a2&&a2==a5&&a2==a8){
        win(a2)
    }
    else if(a0&&a0==a4&&a0==a8){
        win(a0)
    }
    else if(a2&&a2==a4&&a2==a6){
        win(a2);
    }
    else if(a0&&a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8){
        gameon=false;
        status.innerHTML = 'Game is tied';
    }
    else if(chanceofx){
        status.innerHTML =`O's Turn`
    }
    else if(chanceofx){
        status.innerHTML = `X's Turn`
    }
    if(gameon== false){
        document.getElementById('end').style.display='block';
        
   }
   
   
   
    
}
const id = (e) =>{
   e.target.id;

   if(e.target.classList[1]=='x'||e.target.classList[2]=='o'){
       return;
   }
   if(chanceofx&&gameon==true){
       e.target.classList.add('x');
       checkgamestatus()
       chanceofx=!chanceofx;
       
   }
   else if(chanceofx==false&&gameon==true){
       e.target.classList.add('o');
       checkgamestatus();
       chanceofx=!chanceofx;
       
   }
}


for(let i=0;i<9;i++){
    boxes[i].addEventListener('click',id);
    

}

}




