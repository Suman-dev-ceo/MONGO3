//wait until page is fully loaded
document.addEventListener('DOMContentLoaded',()=>{
    //Select all delete forms
    const deleteForms = document.querySelectorAll('.delete-form');

    //For each form, add confirmation before submit
    deleteForms.forEach(form=>{
        form.addEventListener('submit',(event)=>{
            //Show simple popup
            const isConfirmed = confirm('Are you sure want to delete this chat ?');

            //If user clicks 'cancel', stop the form from submitting
            if(!isConfirmed){
                event.preventDefault();
            }
        });
    });
});