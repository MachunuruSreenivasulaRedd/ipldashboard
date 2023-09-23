import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {teamImageUrl, id, name} = item
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <div className="teamCardContainer">
        <img src={teamImageUrl} className="teamLogo" alt={name} />
        <p className="teamName">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
