//Page 1:
clickSubmit = () => {
let userName = document.getElementById("userName").value
let password = document.getElementById("password").value
if(userName=="abcd" && password=="1234")
  {
    clickSubmitNewPage(userName, password)
    window.close("HomePage.html");
    window.open("WelcomePage.html");
  }
  if(userName=="")
  {
    alert('Please enter a value to the User Name')
  }
  if(password=="")
  {
    alert('Please enter a value to the Password')
  }
  if(password=="" && userName=="")
  {
    alert('Please enter your deatels')
  }
  // else 
  // {
  //   prompt('The deatels arent correct')
  // }
}
///i need to fix
console.log(window.location.href);

const clickSubmitNewPage = (userName, password) =>{
  if(userName == "abcd" && password == "1234")
  {
    // window.open("https://www.w3schools.com");
    window.close("HomePage.html");
    window.open("WelcomePage.html");
    // window.location.href("./WelcomePage.html");
    // window.location.href = './WelcomePage.html';
  }
}


  // {
  //   // window.location.href = './../WelcomePage.html';
  //     // window.open="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"

  // }
  // return true;
 

