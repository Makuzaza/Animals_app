

const Card = (props) => {
    return (
    <div class='cards'>
      <h2>Name: {props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Card;



// class Welcome extends Component {
//   render() {
//     return 
//     <h1>Hello, {this.props.name}</h1>;
//   }
// }