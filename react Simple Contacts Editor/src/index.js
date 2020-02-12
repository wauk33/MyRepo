import React from "react";
import ReactDOM from "react-dom";
import List from 'react-list-select';
import values from 'lodash/values'
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

const allUsers =["Oliwia", "Maciek", "Michał", "Kasia", "Ewelina", "Marcin","Aga"]
const descriptions = ["Friend"];
const users =["Oliwia", "Maciek", "Michał", "Kasia", "Ewelina", "Marcin","Aga"]
let descs = ['friend', 'boyfriend', 'boss', 'skoss', 'josh', 'dogh']

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
          <TextField id="filled-basic" label="Wpisz imię" color="primary" variant="standard"  onChange={this.filterUsers.bind(this)} />
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

const Avatar = ({user, index}) => {
let sex;
console.log(user);
if((user).slice(-1) === "a") sex = 2
else sex = 1
let avatarurl
if(sex === 2){
  avatarurl = "images/avatar" + index + sex + ".png";
}else
if(sex === 1) {
  sex++;
  avatarurl = "images/avatar" + index + ".png";
}
    return(
      <img className="avatar" alt="" src={avatarurl}></img>
    );
}
const Description = ({index}) => {

  let descID;
  let descMap = descs.map((desc, Dindex) => <div key={desc}>{desc}{descID = Dindex}{console.log(descID)}</div>)
  // let description = descMap[descID].key
  const defaultDesc = descMap[0].key
    return(
    <div>{defaultDesc} {console.log(descID)}</div>
    );
}
  
const UsersList = ({users}) => {
  if(users.length > 0){
  return(
    <ul>
      {users.map((user, index) =>

      <li key={user}>
      <Avatar user={user} index={index} />

      <div>
        <p className="username">
        {user}
        </p>
      </div>

      <Description index={index} />
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










class List2 extends React.Component{
  

  
  constructor() {
    super();

    this.state = {
      filteredList: allUsers,
      description: descriptions,
    };
  }

  filterUsers(event){
    const textInput = event.currentTarget.value;
    const filteredList = allUsers.filter(user => user.toLowerCase().includes(textInput.toLowerCase()));
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
  render(){
    
    return(
      <div>
        <div className="header">
        <h1>Findo</h1>
      </div>
      <ThemeProvider theme={theme}>
      <form className="input" noValidate autoComplete="off">
        <TextField id="filled-basic" label="Wpisz imię" color="primary" variant="standard"  onChange={this.filterUsers.bind(this)} />
      </form>

      <div className="menu">
        <Button onClick={this.addNewUser.bind(this)} variant="contained" color="primary">dodaj</Button>
        <Button onClick={this.remUser.bind(this)} variant="contained" color="secondary">usuń</Button>
        <Button onClick={this.editUser.bind(this)} variant="contained" color="default">edytuj</Button>
      </div>
      </ThemeProvider>  
    <List items={this.state.filteredList} selected={[0]} onChange={(selected: number) => (console.log(selected))} />
      <UserElement users={this.state.filteredList} />
      </div>
      );
}
}
  
const UserElement = ({users}) => {
  if(users.length > 0){
    return(
      <ul>
          {users.map((user, Uindex) => 
           <div>
           <Avatar user={user} index={Uindex} /> <p className="username">{user}</p> <Description index={Uindex} />
           </div>
          )}
      </ul>);
  }
 else{
  return(
    <p className="void">Brak wyników!</p>
    );
  }
}

ReactDOM.render(<List2 />, document.getElementById('listcontainer'));