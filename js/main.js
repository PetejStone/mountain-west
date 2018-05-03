const navIcon = document.querySelector('#nav-icon');
const testimony = document.querySelectorAll(".testimony");
const user = document.querySelectorAll(".user");
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


//random user API

$.ajax({
  url: 'https://randomuser.me/api/?results=4&inc=name,picture,email,registered',
  dataType: 'JSON',
  success: function(data) {
    members = data.results;


    for (let i=0; i < testimony.length; i++) {
      let photo = members[i].picture.large;
      let firstName = members[i].name.first[0].toUpperCase() + members[i].name.first.substring(1);
      let lastName = members[i].name.last[0].toUpperCase();

      let name = firstName +' '+ lastName;

      testimony[i].children[0].src = photo;
      user[i].innerHTML = "  -"+name;
    }


} //End of function(data)

}); //End of Ajax
//--------------------------------------------------------------------------------------
////////////////////////End of Random User Generator///////////////////////
//----------------------------------------------------------------------------------------

//nav functionality
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");

  nav.classList.toggle('show');
  header.classList.toggle('slide-left');
  main.classList.toggle('slide-left');
  footer.classList.toggle('slide-left');


});
