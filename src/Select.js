import React from 'react'
import SimpleStorage from "react-simple-storage";

import styled from 'styled-components'
import ChartReport from './ChartReport'
import mockData from './mockData'


const MainContainer = styled.div`
  position: absolute;
  left: 60px;
  top: 20px;
  color: #000000;
`;

const StyledDiv = styled.div`
  margin-top: 200px;
`;

const SelectDiv = styled.div`
  float: left;
  font-weight: bold;
  margin-right: 60px;
  bottom: 10px;
`;

const StyledLabel = styled.label`
  font-weight: 100;
`

const StyledSubheader = styled.label`
  font-style: italic;
  font-weight: 400;
  display: block;
  font-size: 20px;
  margin-bottom: 60px;
`
class Select extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      country: JSON.parse(localStorage.getItem('country')) ?
        JSON.parse(localStorage.getItem('country')) : "",
      provinces: JSON.parse(localStorage.getItem('provinces')) ?
        JSON.parse(localStorage.getItem('provinces')) : null,
      cities: JSON.parse(localStorage.getItem('cities')) ?
        JSON.parse(localStorage.getItem('cities')) : null,
      currentCity: JSON.parse(localStorage.getItem('currentCity')) ?
        JSON.parse(localStorage.getItem('currentCity')) : null,
      currentProvince: JSON.parse(localStorage.getItem('currentProvince')) ?
        JSON.parse(localStorage.getItem('currentProvince')) : null,
      current: JSON.parse(localStorage.getItem('current')) ?
        JSON.parse(localStorage.getItem('current')) : null,
    };
    console.log(this.state.currentProvince);
    console.log(this.state.currentCity);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleProvince = this.handleProvince.bind(this);
    this.handleCity = this.handleCity.bind(this);

  }
  
    countries = mockData;

  handleCountry(event) {
    this.setState({ country: event.target.value }, () => {
      localStorage.setItem('country', JSON.stringify(this.state.country))
    });

    this.setState({ provinces: this.countries.filter(item => item.id === event.target.value) }, () => {
      localStorage.setItem('provinces', JSON.stringify(this.state.provinces))
    });
    const currentProvince = this.countries.filter(item => item.id === event.target.value);
    this.setState({ cities: currentProvince[0].provinces[0].cities }, () => {
      localStorage.setItem('cities', JSON.stringify(this.state.cities))
    });
  }

  handleProvince(event) {
    let arrProvinces = [];
    const provinces = this.state.provinces;
    arrProvinces = provinces[0].provinces;
    const currentProvince = arrProvinces.filter(item => item.id === event.target.value);
    this.setState({currentProvince: currentProvince}, () => {
      localStorage.setItem('currentProvince', JSON.stringify(this.state.currentProvince))
    });
    this.setState({cities: arrProvinces.filter(item => item.id === event.target.value) }, () => {
      localStorage.setItem('cities', JSON.stringify(this.state.cities))
    });
  }

  handleCity(event) {
    let arrCities = [];
    const cities = this.state.cities;
    arrCities = cities[0].cities;
    const currentCity = arrCities.filter(item => item.id === event.target.value);
    this.setState({currentCity: currentCity}, () => {
      localStorage.setItem('currentCity', JSON.stringify(this.state.currentCity))
    });
    this.setState({current: event.target.value}, () => {
      localStorage.setItem('current', JSON.stringify(this.state.current))
    });
  }

  render() {
    let arrProvinces = [];
    let arrCities = [];

    if(this.state.provinces) {
      const provinces = this.state.provinces;
      arrProvinces = provinces[0].provinces;
    }

    if(this.state.cities) {
      const cities = this.state.cities;
      arrCities = cities[0].cities;
    }
    return (
      <MainContainer>
        <SimpleStorage parent={this} />
        <form onSubmit={this.handleSubmit}>
          <h1>Engie World Population Report</h1>
          <StyledSubheader>Prepared by: Edwardson S. Sebastian</StyledSubheader>
          <SelectDiv>
            <StyledLabel>
              Pick your country:<br /><br />
              <select onChange={this.handleCountry} style={{ width: 150}}>
                <option value="">-- Please Choose --</option>
                { 
                  this.countries.map((item) => 
                  <option key={item.id} value={item.id} selected={this.state.country === item.id ? 'selected' : ''}>{item.label}</option>)
                }
              </select>
            </StyledLabel>
          </SelectDiv>
          <SelectDiv>
            <StyledLabel>
              Pick your state:<br /><br />
              <select onChange={this.handleProvince} style={{ width: 150}}>
              {arrProvinces && arrProvinces.map((item) =>
                <option key={item.id} value={item.id} selected={this.state.currentProvince === item.id ? 'selected' : ''}>{item.label}</option>)
              }
              </select>
            </StyledLabel>
          </SelectDiv>
          <SelectDiv>
            <StyledLabel>
              Pick your city:<br /><br />
              <select onChange={this.handleCity} style={{ width: 150}}>
                {this.state.country && 
                  <option value="">-- Please Choose --</option>
                }
                {
                  arrCities && arrCities.map((item) =>
                  <option key={item.id} value={item.id}>{item.label}</option>)
                }
              </select>
            </StyledLabel>
          </SelectDiv>
        </form>
        {this.state.currentProvince &&
          <StyledDiv>
            <ChartReport data={this.state.currentProvince} current={this.state.current} />
          </StyledDiv>
        }
        
      </MainContainer>
    );
  }
}

export default Select