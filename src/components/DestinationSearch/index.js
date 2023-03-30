import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  getResults = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue} = this.state
    const {destinationsList} = this.props
    const DestinationResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="main-search-container">
        <h1 className="destination-search-main-heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="search"
            className="destination-search-box"
            onChange={this.getResults}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="**search icon**"
            className="search-icon-display-css"
          />
        </div>

        <ul className="destination-search-search-results">
          {DestinationResults.map(each => (
            <DestinationItem itemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
