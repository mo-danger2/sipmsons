import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'
import Homer from './components/ProfileCard/Homer.jsx'
import Lisa from './components/ProfileCard/Lisa.jsx'
import Marge from './components/ProfileCard/Marge.jsx'
import Maggie from './components/ProfileCard/Magiie.jsx'
import Bart from './components/ProfileCard/Bart.jsx'

function App(props) {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <Homer pic={homer} />
              <Lisa pic={lisa} />
              <Maggie pic = {maggie}/>
              <Marge pic = {marge}/>
              <Bart pic={bart} />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
