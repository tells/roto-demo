import React, { Component } from "react";
// import axios from "axios";
import responseData from "./data.json";
import PlayerList from "./PlayerList";

// Main container that handles state during page loads.
// ./ApolloApp.js would do something similar with GraphQL if it were working
class SimpleApp extends Component {
  state = {
    teamName: "",
    fantasyPlayers: []
  };
  componentDidMount() {
    // upon loading the component, assign state to be passed to child component
    this.setState({
      teamName: responseData.data.auth.fantasyTeam.name,
      fantasyPlayers: responseData.data.auth.fantasyTeam.fantasyPlayers
    });
    // Attempted to use a raw ajax request since the url below
    // worked well with simple GET/POST requests on HTTP clients
    // axios({
    //   url:
    //     "https://api-qa.squadql.com/graphql?query=query%20test%20{%20%20auth(token%3A%20%22f1432e0d-557d-466f-877c-8fc6631e7594%201209600.DXI9Xg.hJQWCPmhzOyCBMWPXRAj2mutuaA%22)%20{%20%20%20%20fantasyTeam(id%3A%20%22118f812b-6505-4d01-8d62-4d9aab7592d4%22)%20{%20%20%20%20%20%20name%20%20%20%20%20%20fantasyPlayers%20{%20%20%20%20%20%20%20%20isStarting%20%20%20%20%20%20%20%20eligiblePositions%20%20%20%20%20%20%20%20realPlayer%20{%20%20%20%20%20%20%20%20%20%20fullName%20%20%20%20%20%20%20%20%20%20imageUrl%20%20%20%20%20%20%20%20}%20%20%20%20%20%20}%20%20%20%20}%20%20}}&operationName=test&raw",
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     origin: "https://api-qa.squadql.com"
    //   }
    // })
    //   .then(res => {
    //     console.log(res);
    //     this.setState(...res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  // can pass state through a spread operator since object keys
  // match those of the expected props
  render() {
    return <PlayerList {...this.state} />;
  }
}

export default SimpleApp;
