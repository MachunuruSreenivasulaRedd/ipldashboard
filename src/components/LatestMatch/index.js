import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const [
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    ] = [
      latestMatchDetails.umpires,
      latestMatchDetails.result,
      latestMatchDetails.man_of_the_match,
      latestMatchDetails.date,
      latestMatchDetails.venue,
      latestMatchDetails.competing_team,
      latestMatchDetails.competing_team_logo,
      latestMatchDetails.first_innings,
      latestMatchDetails.second_innings,
    ]
    return (
      <div className="latestDetailsContainer">
        <div className="teamDetails">
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <div className="imageContainer">
            <img
              src={competingTeamLogo}
              className="image"
              alt={`latest match ${competingTeam}`}
            />
          </div>
        </div>
        <div className="inningsDetails">
          <hr className="line" />
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
