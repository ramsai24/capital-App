import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  changeCapital = event => {
    console.log(event.target.value)
    this.setState({countryId: event.target.value})
  }

  render() {
    const {countryId} = this.state

    const filteredCountryList = countryAndCapitalsList.filter(
      each => each.id === countryId,
    )

    console.log(filteredCountryList)

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1>Countries And Capitals</h1>
          <select
            className="selectEl"
            id="countriesList"
            onChange={this.changeCapital}
          >
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <lable htmlFor="countriesList">is capital of which country?</lable>
          <h1>{filteredCountryList[0].country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
