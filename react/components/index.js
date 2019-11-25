class App extends React.Component {
    constructor(){
        super();
        this.state = {counter: 0}
    }
    render(){
        return(
            <div>
                <button onClick={this.increment.bind(this)}>
                +
                </button>
                <output>{this.state.counter}</output>
                <button onClick={this.decrement.bind(this)}>
                -
                </button>
            </div>
        );
    }
    increment() {
        this.setState(prevState, function() {
            counter: prevState.counter + 1
        })
    }
    decrement() {
        this.setState(prevState, function() {
            counter: prevState.counter - 1
        })
    }
}
const ReactRender = document.getElementById("reactRender");
ReactDOM.render(<App />, ReactRender);



