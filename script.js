const container =document.querySelector(".container")

const btns=document.querySelectorAll('.btn')

const imglist=['1','2','3','4','5','6']

 let index=0


btns.forEach((button)=>{
    button.addEventListener("click",()=>{
      if(button.classList.contains("btn-back")){
        index--;
        console.log('left');
        if(index<0){
            index=imglist.length-1;
        }
        container.style.background=` url('${imglist[index]}.jpg') `
        container.style.backgroundSize="cover"
        container.style.backgroundPosition="center"
      }
      else{
        index++;
        console.log('right');
        if(index==imglist.length){
            index=0;
        }
        container.style.background=` url('${imglist[index]}.jpg') `
        container.style.backgroundSize="cover"
        container.style.backgroundPosition="center"
      }
    })
})