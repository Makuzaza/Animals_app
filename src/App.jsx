import Card from './Card'
import Header from './header'
import Footer from './footer'

function App() {

  return (
<>  
    <Header />

    <main>
      <h1>Animals</h1>
      <div><input id="search" type="text" placeholder="Search..." /></div>
      <div className="cards">
        <Card />
      </div>
    </main>
      <Footer />
      </>
  );
};

export default App;
