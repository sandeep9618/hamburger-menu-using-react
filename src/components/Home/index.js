import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div>
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home-img"
        />
      </div>
    </div>
  </div>
)

export default Home
