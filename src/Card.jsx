

const Card = () => {
    return (
    <div class='card'>
      <img src="fox.jpg" />   
      {/* <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      rel="stylesheet"
    /> */}
      {/* <span class="material-symbols-outlined">close</span>
    */}
      <h2>Title</h2>

      <button>close</button>
      <button>-</button>
      <span class="material-symbols-outlined">close</span>
      <button>+</button>
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