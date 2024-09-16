
document.addEventListener('DOMContentLoaded',(Event)=>{
    const checkbox = document.getElementById('checkbox');
    const body = document.body;
    checkbox.addEventListener('change',()=>{
        if(checkbox.Checked){
            body.classList.remove('light-mode');
            body.classList.add('night-mode');
        } else{
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });

    //set default theme
    body.classList.add('dark-mode');
});