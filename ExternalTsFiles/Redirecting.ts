
class Extern {
  static Dom(str:string,dom:string){
    switch (dom) {
      case 'i':
        let id = document.getElementById(str);
        return id;
        break;
    case 'c':
      let class1 = document.getElementsByClassName(str);
      return class1;
      break;
      case 'q':
        let query = document.querySelector(str);
        return query;
    }
    
    
  }
}

export class Redirct extends Extern{
  static redirect(){
    let button1 = Extern.Dom('button','q');
    let input = Extern.Dom('input','c');
    button1.addEventListener('click',(event)=>{
        location.href = "../MainComponent/Main-Html.html"
      
    });
  }
}



