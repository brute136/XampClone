export class Logger {
  static loginOrSignUp(){
    let i = 0;
      let c = document.getElementsByClassName('on');
      let input = document.getElementById('on');
      let btn = document.querySelector('button');
      
      
      let onClick = c[0];
      onClick.addEventListener('click',()=>{
        if (i==0){
          onClick.innerHTML = "Create New Accout";
          input.style.display = 'none';
         i = 1;
         btn.innerHTML = "Login";
        }
        else{
          onClick.innerHTML = "Already Have Account";
          input.style.display = '';
          btn.innerHTML = "SignUp";
          i = 0;
        }
      });
      {
       
    }
  }
}
