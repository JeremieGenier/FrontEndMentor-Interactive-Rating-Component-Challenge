window.onload = () => {

    const ratingBtns = document.querySelectorAll(".ratings-list>li>button")
    const submitBtn = document.querySelector('.submit')
    const ratingCard = document.querySelector(".dark-card.rating")
    const thanksCard = document.querySelector(".dark-card.thanks")
    const selectedRating = document.querySelector(".selected-rating")
    let selectedBtn = undefined

    // Add click events listener for all values or rating
    ratingBtns.forEach(ratingBtn => {
        ratingBtn.addEventListener("click", () => {
            onRatingBtnClick(ratingBtn)
            updateSubmit();
        })
    });
    // Add click event listner on the submit button
    submitBtn.addEventListener("click", () => {
        onSubmit();
    })

    // When a rating value button is clicked
    function onRatingBtnClick(btn) {
        // If the last "selectedBtn" is the clicked button
        if(selectedBtn !== btn){
            // Check if btn is assigned and removes its "selected" class if defined
            if(selectedBtn) selectedBtn.classList.remove("selected")
            btn.classList.add("selected")
            // Saves a reference to the current selected button
            selectedBtn = btn
        }
        else {
            if(selectedBtn) selectedBtn.classList.toggle("selected")
            selectedBtn = undefined
        }

    }

    // Updata the visual classes of the submit button
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

    // When the submit button is clicked
    function onSubmit() {
        if(selectedBtn){
            // Check if the current selected button has the class selected
            // Check if the data-value is an acceptable value (0 to 5)
            const selectedBtnValue = selectedBtn.getAttribute('data-value')
            if(selectedBtn.classList.contains("selected") && selectedBtnValue >= 0 && selectedBtnValue <= 5){
                selectedRating.innerHTML = `You selected ${selectedBtnValue} out of 5`
                ratingCard.classList.remove("visible");
                thanksCard.classList.add("visible");
                console.log(selectedBtn.getAttribute('data-value'));
            }
        }
    }
}