import React from "react";
import ReactDOM from "react-dom";
import './main.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const third = purple.A500;

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

const allUsers =["Oliwia", "Asia", "Michał", "Kasia", "Ewelina", "Marcin","Aga"]
const descriptions = ["Friend"];



class AppComponent extends React.Component {
  
  constructor() {
    super();

    this.state = {
      filteredList: allUsers,
      description: descriptions,
    };
  }

  filterUsers(event){
    const textInput = event.currentTarget.value;
    const filteredList =  allUsers.filter(user => user.toLowerCase().includes(textInput.toLowerCase()));
    this.setState({filteredList})
  }

  makeUppercase(e){
    let input = document.querySelector("input");
    let textInput = input.value;
    const makeUpper = textInput.charAt(0).toUpperCase();
    this.setState({makeUpper});
  }

  addNewUser(){
    let input = document.querySelector("input");

    let textInput = input.value;
    if(textInput !== ''){
    const capitalTextInput = textInput.charAt(0).toUpperCase() + textInput.slice(1);
    const addUser = allUsers.unshift(capitalTextInput);

    this.setState({addUser});
    }
  }

  remUser(){
    let input = document.querySelector("input");

    let textInput = input.value;
    if(textInput !== ''){
    const removeUser = allUsers.splice(allUsers.indexOf(textInput), 1);
      console.log(removeUser)
    this.setState({removeUser});
    }
  }
  editUser(){

  } 

  selectUser(){

  }
  render() {



    return(
      <div>
        <div className="header">
          <h1>Findo</h1>
        </div>
        <ThemeProvider theme={theme}>
        <form className="input" noValidate autoComplete="off">
          <TextField id="filled-basic" label="Wpisz imię" color="primary" variant="standard" fullWidth="true" onChange={this.filterUsers.bind(this)} />
        </form>

        <div className="menu">
          <Button onClick={this.addNewUser.bind(this)} variant="contained" color="primary">dodaj</Button>
          <Button onClick={this.remUser.bind(this)} variant="contained" color="secondary">usuń</Button>
          <Button onClick={this.editUser.bind(this)} variant="contained" color="default">edytuj</Button>
        </div>
        </ThemeProvider>
        <UsersList onClick={this.selectUser.bind(this)} users={this.state.filteredList} descs={this.state.description} />
      </div>
    );
  }
}

const Avatar = ({users}) => {
  const avatarurl = "images/avatar.png";
    return(
      <img className="avatar" alt="" src={avatarurl}></img>
    );
}

const UsersList = ({users, descs}) => {
  if(users.length > 0){
  return(
    <ul>
      {users.map((user, index) =>

      <li key={user}>
      <Avatar />

      <div>
        <p className="username">
        {user}
        </p>
    
        {descs.map((desc) => 
        <p className="description" key={desc}>
        {desc}
        </p>
 )} 
      </div>


      </li>)}
    </ul>);
  }
else{
return(
  <p className="void">Brak wyników!</p>
  );
}
}

ReactDOM.render(<AppComponent />, document.getElementById('root'));

