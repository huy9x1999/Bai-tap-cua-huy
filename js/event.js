var list_click = document.querySelectorAll('.about a');
for(let a =0;a<list_click.length;a++){
    list_click[a].addEventListener('click',function(){
        var soSanh =  document.querySelector('.about .open');
        for(let i =0;i<list_click.length;i++){
            list_click[i].classList.remove('open');
            list_click[i].classList.add('close');
            if(this != soSanh){
                this.classList.add('open');
                this.classList.remove('close');
            }
            else{
                this.classList.remove('open');
                this.classList.add('close');
            }
        }
});}