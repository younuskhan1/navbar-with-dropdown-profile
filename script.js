let profileDropdownList = document.querySelector(".profile-dropdown-list");

const toggle = () => profileDropdownList.classList.toggle("active");

// The below task is additional but it is very important. Because sometimes the 
// users want to close the dropdown menu by clicking anywhere of a website. 

let btn = document.querySelector(".profile-dropdown-btn");

window.addEventListener("click", function (e){
    // console.log(e.target);
    // e.target is equal to where the user click(the clicked html element);
  if (!btn.contains(e.target)){
    profileDropdownList.classList.remove("active");
  };
});