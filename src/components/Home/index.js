import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="main-home">
      <div className="home-content">
        <h1 className="h1-home">Find The Job That Fits Your Life</h1>
        <p className="para-home">
          Millions of people are searching for jobs, salary, information,
          company reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button className="butt-home" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
