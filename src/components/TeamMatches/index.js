import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

let color = 'dc'
class TeamMatches extends Component {
  state = {
    teamDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    if (id === 'RCB') {
      color = 'rcb'
    } else if (id === 'KKR') {
      color = 'kkr'
    } else if (id === 'CSK') {
      color = 'csk'
    } else if (id === 'KXP') {
      color = 'kxp'
    } else if (id === 'RR') {
      color = 'rr'
    } else if (id === 'MI') {
      color = 'mi'
    }
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamDetails: formattedData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader width={50} height={50} type="Oval" color="#ffffff" />
      </div>
    ) : (
      <div className={`teamMatchesContainer ${color}`}>
        <div className="bannerImageContainer">
          <img
            src={teamDetails.teamBannerUrl}
            alt="team banner"
            className="bannerImage"
          />
        </div>
        <div className="latestMatchesContainer">
          <h2 className="latestHeading">Latest Matches</h2>
          <LatestMatch
            latestMatchDetails={teamDetails.latestMatchDetails}
            key={teamDetails.latestMatchDetails.competing_team}
          />
        </div>
        <h1 className="recentHeading">Recent Matches</h1>
        <div className="recentMatchesContainer">
          {teamDetails.recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} details={eachMatch} />
          ))}
        </div>
      </div>
    )
  }
}
export default TeamMatches
