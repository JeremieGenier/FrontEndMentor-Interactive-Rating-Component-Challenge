window.onload = () => {

    const ratingBtns = document.querySelectorAll(".ratings-list>li>button")
    const submitBtn = document.querySelector('.submit')
    let selectedBtn = undefined

    ratingBtns.forEach(ratingBtn => {
        ratingBtn.addEventListener("click", () => {
            onRatingBtnClick(ratingBtn)
            updateSubmit();
        })
    });
    submitBtn.addEventListener("click", () => {
        onSubmit();
    })

    function onRatingBtnClick(btn) {
        if(selectedBtn !== btn){
            // Check if btn is assigned and removes its "selected" class is defined
            if(selectedBtn) selectedBtn.classList.remove("selected")
            btn.classList.add("selected")
            selectedBtn = btn
        }
        else {
            if(selectedBtn) selectedBtn.classList.toggle("selected")
            selectedBtn = undefined
        }

    }

    function updateSubmit() {
        // If a button is selected, add the class to show the button is ready
        if(selectedBtn){
            if(selectedBtn.classList.contains("selected")) {
                submitBtn.classList.add("ready")
            }
        }
        // Removes the ready states if not ready
        else{
            submitBtn.classList.remove("ready")
        }
    }

    function onSubmit() {
        if(selectedBtn){
            // Check if the selected button is selected
            if(selectedBtn.classList.contains("selected")){
                console.log(selectedBtn.getAttribute('data-value'));
            }
        }
    }
}