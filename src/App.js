import Greeting from "./Challenge/Greeting" 

class Greeting extends React.Component {
  render() {
    return (
    <div>
    <h1>Hello, world!</h1>
    <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}
{/* <Greeting name="alek permana"/> */}