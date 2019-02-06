import React, { Component } from "react";
import CardsList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

//el que recibe
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };

  //nombre del estado que tendra  ,estado.nombredelreducer.propiedad de regresa
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  //SUPER CALLS DE CONSTRUCTOR OF COMPONENT

  componentDidMount() {
    this.props.onRequestRobots(); //mandas a ejecutar para mandar a llamar la API
  }

  render() {
    const { searchField, onSearchChange, robots } = this.props; //this is parte of props that we receive of redux

    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardsList robots={filterRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
