import React from "react";
import ReactDOM from "react-dom";



const allUsers = ["Michal", "Asia", "Basia", "Kasia", "Stasia", "Marcin", "Aga", "Dalla"];



class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      filteredU: allUsers
    };
  }

  filterUsers(event){
    const textInput = event.currentTarget.value;
    const filteredU =  allUsers.filter(user => user.toLowerCase().includes(textInput.toLowerCase()));
    this.setState({filteredU})
  }


  addUser(){
    let input = document.querySelector("input");
    let textInput = input.value;

    if(textInput !== '' && textInput !== "Aby dodać kontakt wpisz nazwę.." && textInput !== "Aby usunąć kontakt wpisz nazwę.." ){
    const capitalTextInput = textInput.charAt(0).toUpperCase() + textInput.slice(1);
    const addNew = allUsers.unshift(capitalTextInput);

    this.setState({addNew});
    }
    else{
      return(
        input.style.fontSize = "15px",
        input.style.color = "darkgrey",
        input.value = "Aby dodać kontakt wpisz nazwę..",
        input.addEventListener('click', ()=>{
          input.value = '';
          input.style.color = "black";
          input.style.fontSize = "20px";
        })
      );
    }
  }

  remUser(){
    let input = document.querySelector("input");
    let textInput = input.value;
    
    if(textInput !== '' && textInput !== "Aby usunąć kontakt wpisz nazwę.." && allUsers.indexOf(textInput) > -1){
    const findUserIndex = allUsers.indexOf(textInput);
    const removeUser = allUsers.splice(findUserIndex, 1);

    this.setState({removeUser});
    }
    else{
      return(
        input.style.fontSize = "15px",
        input.style.color = "darkgrey",
        input.value = "Aby usunąć kontakt wpisz nazwę..",
        input.addEventListener('click', ()=>{
          input.value = '';
          input.style.color = "black";
          input.style.fontSize = "20px";
        })
      );
    }
  }

  render() {
    
    return(
      <div>
        <div className="header">
          <h1>FindO!</h1>
        </div>
        <input type="search" onClick={this.filterUsers.bind(this)} onInput={this.filterUsers.bind(this)}/>
        <div className="menu">
          <button onClick={this.addUser.bind(this)}>+ dodaj</button>
          <button onClick={this.remUser.bind(this)}>- usuń</button>
        </div>
        <UsersList users={this.state.filteredU} />
      </div>
    );
  }
}


const UsersList = ({users}) => {
  if(users.length > 0){
  return(
    <ul>
    {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  );
}
return(
  <p>Brak wyników!</p>);
}

ReactDOM.render(<App />, document.getElementById('root'));

