class ReactComp extends React.Component{
    render(){
    return (
        <div>
        <ReactCompHeader />
        <main className="mainCon">
        <ReactCompContactsList />
        </main>
        </div>
    );
  }
}
class ReactCompHeader extends React.Component{
  render (){
    return (
        <header className="header">

        <div className="headerCon">
    
          <a href="#" className="headerItem">
            <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
          </a>
          <a href="#" className="headerTitle">
          Lista kontaktów
          </a>
          <div className="headerItem">
            <button className="button">Dodaj</button>
          </div>
    
        </div>
      </header>
    );
  }
}
class ReactCompContactsList extends React.Component{
  render(){
    return (
        <div className="list">
            <ReactCompContactItem 
            avatar="typeofweb1"
            name="Lena"
            role="JavaScript Developer"
            />
            <ReactCompContactItem 
             avatar="typeofweb2"
             name="Brian"
             role="Human Resources"
            />
            <ReactCompContactItem 
            avatar="typeofweb3"
            name="Rick"
            role="QA"
            />
        </div>
    );
  }
}
class ReactCompContactItem extends React.Component{
  render(){
    const {avatar, name, role} = this.props
    const imgUrl = `https://api.adorable.io/avatars/55/${avatar}.png`;
    return (
        <div className="item">
        <img src={imgUrl} className="avatar" />
        <div className="content">
          <h4 className="header">{name}</h4>
          <div className="description">{role}</div>
        </div>
      </div>
    );
  }
}

const ReactRender = document.getElementById("reactRender");
ReactDOM.render(<ReactComp />, ReactRender);




/*
ReactDOM.render (
    <ReactApp />,
)
class ReactApp extends React.Component {
        constructor() {
            super();
            this.state = {counter: 0};
        }


render (){
  return (
    <div>
      <button>+</button>
      <output>{this.state.counter}</output>
      <button>-</button>
    </div>
  );
}
}


const char1 = {
  name: "John",
  age: "16",
  work: "Discovery"
}

const char2 = {
  name: "Brian",
  age: "16",
  work: "Disco"
}

const char3 = {
  name: "Lillyn",
  age: "16",
  work: "very"
}


let obj1 = document.getElementById("obj1");
let obj2 = document.getElementById("obj2");
let obj3 = document.getElementById("obj3");


obj1.innerText = ("Name: " + char1.name + " Age:" + char1.age + " Work:" + char1.work);
obj2.innerText = ("Name: " + char2.name + " Age:" + char2.age + " Work:" + char2.work);
obj3.innerText = ("Name: " + char3.name + " Age:" + char3.age + " Work:" + char3.work); */