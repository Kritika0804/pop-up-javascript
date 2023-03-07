
const modal = document.getElementById("popup-modal");
const form = document.getElementById("email-form");


const closeBtn = document.getElementById("close-btn");
const submitBtn = document.getElementById("submit-btn");


const emailInput = document.getElementById("email-input");
const emailValidation = document.getElementById("email-validation");

// const popupClosed = localStorage.getItem("popupClosed");
// const today = new Date().toLocaleDateString();
// if (popupClosed === today) {
//   modal.style.display = "none";
// }
const hasSeenPopup = localStorage.getItem('hasSeenPopup');
const currentDate = new Date().getDate();

// Function to validate email address
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Function to handle form submission
function handleSubmit(e) {
  e.preventDefault();

  // Validate email address
  const email = emailInput.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
  if (isValidEmail) {
    // Email is valid, hide the pop-up and update local storage
    modal.style.display = 'none';
    localStorage.setItem('hasSeenPopup', currentDate.toString());
  } else {
    // Email is invalid, show error message
    const errorMessage = document.querySelector('.error-message');
    errorMessage.style.display = 'block';
  }
  console.log("submitted");
}

// Function to handle close button click
function handleClose() {
  modal.style.display = "none";
  //localStorage.setItem("popupClosed", today);
}

// Function to handle email input change
function handleEmailChange() {
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
    emailValidation.style.display = "none";
  } else {
    emailValidation.style.display = "block";
  }
}

// Function to handle button click to open the pop-up
function handleButtonClick() {
  if (hasSeenPopup !== currentDate.toString()) {
    modal.style.display = "block";
  }
  else{
    console.log("already");
    // localStorage.clear();

  }
  button.removeEventListener("click", handleButtonClick)
  
  return false;
}

// Add event listeners to the form elements (if they exist)
if (submitBtn) {
  submitBtn.addEventListener("click", handleSubmit);
}
if (closeBtn) {
  closeBtn.addEventListener("click", handleClose);
}
if (emailInput) {
  emailInput.addEventListener("input", handleEmailChange);
}

// Add event listener to the button to open the pop-up (if it exists)
const button = document.getElementById("popup-btn");
if (button ) {
  button.addEventListener("click", handleButtonClick);
}


// if (hasSeenPopup !== currentDate.toString()) {
//   // Show the pop-up when the subscribe button is clicked
//   button.addEventListener('click', function() {
//     modal.style.display = 'block';
//   });

// }
// else{
//   console.log("already")
  
//   // localStorage.clear();
// }
