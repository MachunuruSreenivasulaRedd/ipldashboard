import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    TeamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({TeamsList: formattedData, isLoading: false})
  }

  renderCardList = () => {
    const {TeamsList} = this.state
    return (
      <div className="teamCardsList">
        {TeamsList.map(item => (
          <TeamCard item={item} key={item.id} />
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="HomeContainer">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderCardList()
        )}
      </div>
    )
  }
}

export default Home
