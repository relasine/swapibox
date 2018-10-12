import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
    wrapper.instance().fetchCall = jest.fn()
  });

  const defaultState = {
    totalFavorites: 0,
    currentSelection: '',
    openingCrawl: {},
    people: [],
    vehicles: [],
    planets: [],
    error: false,
    loading: true,
  };

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should call crawlCall() on componentDidMount', () => {
    wrapper.instance().crawlCall = jest.fn()
    wrapper.instance().componentDidMount()
    expect(wrapper.instance().crawlCall).toHaveBeenCalled()
  });

  it('should call fetch when crawlCall is called', async () => {
    const mockFetch = jest.fn()
    wrapper.instance().fetchCall = mockFetch
    await wrapper.instance().crawlCall()
    expect(mockFetch).toHaveBeenCalled()

  });

  it('should set state when crawlCallis called', () => {

  });

  it('should call callFetchPeople if people is currentSelection', () => {

  });

  it('should call callFetchVehicles if vehicles is currentSelection', () => {

  });

  it('should call callFetchPlanets if planets is currentSelection', () => {

  });

  it('should call fetchVehicles if callFetchVehicles is called', () => {

  });

  it('should set state after callFetchVehicles is called', () => {

  });

  it('should call fetchPeople if callFetchPeople is called', () => {

  });

  it('should set state after callFetchPeople is called', () => {

  });

  it('should call fetchPlanets if callFetchPlanets is called', () => {

  });

  it('should set state after callFetchPlanets is called', () => {

  });


})
