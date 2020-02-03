import React from "react";
import ReactDOM from "react-dom";
import './main.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#f44336'
    },
  },
  input: {
      color: 'white',
    },
});

const allUsers = ["Oliwia", "Asia", "Michał", "Kasia", "Ewelina", "Marcin", "Aga"];
let input = document.querySelector(".input");



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
        input.label = "Aby dodać kontakt wpisz nazwę..",
        input.addEventListener('click', ()=>{
          input.label = '';
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
        input.label = "Aby usunąć kontakt wpisz nazwę..",
        input.addEventListener('click', ()=>{
          input.label = '';
          input.style.color = "black";
          input.style.fontSize = "20px";
        })
      );
    }
  }

  listSelector(){
    let mouseX = document.clientX;
    let mouseY = document.clientY;
    let mouseIsOver = document.elementFromPoint(mouseX, mouseY);
    console.log(mouseIsOver);
  }

  render() {
    return(
      <div>
        <div className="header">
          <h1>FindO!</h1>
        </div>
        <ThemeProvider theme={theme}>
        <form className="input" noValidate autoComplete="off">
          <TextField id="filled-basic" label="Wpisz imię" color="primary" variant="standard" onChange={this.filterUsers.bind(this)} />
        </form>

        <div className="menu">
          <Button onClick={this.addUser.bind(this)} variant="contained" color="primary">dodaj</Button>
          <Button onClick={this.remUser.bind(this)} variant="contained" color="secondary">usuń</Button>
          <Button variant="contained" color="default">edytuj</Button>
        </div>
        </ThemeProvider>
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

