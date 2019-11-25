class SearchEngine extends React.Component {
    render(){
        return(

        );
    }
}
class UsersList extends React.Component {
    render(){
        return(
            const UsersList = ({users}) => {
                if (users.length > 0){                
                    return (
                    users.map(user => {
                        <li key={user}>{user}</li>
                    })
                );
                }
                return (
                    <p>Brak wyników</p>
                )

            }
        );
    }
}

const ReactApp = document.getElementById("reactRender");
ReactDOM.render(
    <SearchEngine /> ,ReactApp)