import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {details} = this.props
    const [competingTeamLogo, competingTeam, result, matchStatus] = [
      details.competing_team_logo,
      details.competing_team,
      details.result,
      details.match_status,
    ]
    return (
      <div className="matchCard">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="img"
        />
        <p className="name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatus}>{matchStatus}</p>
      </div>
    )
  }
}

export default MatchCard
