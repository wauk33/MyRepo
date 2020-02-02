import React from "react";
import ReactDOM from "react-dom";
import './main.css';

import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#f44336'
    }
  }
}
);
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

  listSelector(e){
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    const elementMouseIsOver = document.elementFromPoint(mouseX, mouseY);
    
  }

  render() {
    
    return(
      <div>
        <div className="header">
          <h1>FindO!</h1>
        </div>
        <input type="search" onClick={this.filterUsers.bind(this)} onInput={this.filterUsers.bind(this)}/>
        <div className="menu">
        <ThemeProvider theme={theme}>
          <Button onClick={this.addUser.bind(this)} variant="contained" color="primary">dodaj</Button>
          <Button onClick={this.remUser.bind(this)} variant="contained" color="secondary">usuń</Button>
          <Button variant="contained" color="">edytuj</Button>
        </ThemeProvider>
        </div>
        <UsersList users={this.state.filteredU} onClick={this.listSelector} />
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
  <p className="void">Brak wyników!</p>);
}

ReactDOM.render(<App />, document.getElementById('root'));

