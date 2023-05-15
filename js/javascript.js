function handleSubmit(){
    const emailvalue = document.getElementById('email').value.toLocaleLowerCase();

    const errorEmail = document.getElementById('error-email');

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = emailvalue.match(regex);

    const sectionContent = document.querySelector('#personal-info .section-content-infor');

    const submitControl = document.querySelector('.submit-email');
    if(checkEmail){
        sectionContent.style.display = 'block';
        submitControl.style.display = 'none';
        errorEmail.innerHTML = '';
    }else{
        errorEmail.innerHTML = 'Sai định dạng email, vui lòng nhập lại định đạng email ';
    }
}

function handleOnmouseOver(element){
    const controlview = element.querySelector('.control-view');
    controlview.style.display = 'inline-block';
    
}

function handleOnmouseOut(element){
    const controlview = element.querySelector('.control-view');
    if(!controlview.classList.value.includes('less-more')){
        controlview.style.display = 'none';
    }
}

function handleViewMore(elememt){
    const parentElement = elememt.closest('.parent');
    const viewmore = parentElement.querySelector('.control-view');
    const sectionContent = parentElement.querySelectorAll('.section-content');
    if(viewmore.classList.value.includes('view-more')){
        sectionContent.forEach((elememt) => {
            elememt.style.display = 'block';
        });
        viewmore.classList.remove('view-more');
        viewmore.classList.add('less-more');
        viewmore.innerHTML = 'Lessmore';
        
    }else{
        sectionContent.forEach( (elememt) =>{
            elememt.style.display = 'none';
        });
        viewmore.classList.remove('less-more');
        viewmore.classList.add('view-more');
        viewmore.innerHTML = 'View more';
    }  
}