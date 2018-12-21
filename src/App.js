import React, { Component } from 'react';
import './App.css';
import Table from "react-bootstrap/es/Table";
import Panel from "react-bootstrap/es/Panel";

import {ApiAiClient} from "api-ai-javascript";
import Dictaphone from "./Dictaphone";

class App extends Component {
  constructor(props) {
    super(props);

    const idxs = [9,3,4,5,8,7,1,6,2];
    const holes = [];

    for (let i = 0; i < 9; i++) {
      holes.push({
          hole: i+1,
          score: null,
          par: i === 0 || i === 5 ? 3 : (i === 6 || i === 2 ? 5 : 4),
          idx: idxs[i],
      });
    }

    const client = new ApiAiClient({accessToken: '7b63687e42d648798dc229503c1e8b2b'});
    console.log(client.getApiVersion());

    this.state = {
      holes: holes,
      client: client
    };

    //recognition.lang = 'en-AU';
  }

  sendToDialogFlow = (text) => {
      this.state.client.textRequest(text)
          .then((response) => {
              console.log(response);
              if (response.result.metadata.intentName === 'Enter Score') {
                  let holeNumber = response.result.parameters.holeNumber;
                  if (!holeNumber) {
                      holeNumber = this.getNextIndex() + 1;
                      console.log(holeNumber);
                  }
                  const score = response.result.parameters.shots;
                  const scorePhrase = response.result.parameters.ScorePhrase;
                  this.setScore(Number(holeNumber), score, scorePhrase);
              }
          })
          .catch((error) => {
              console.log(error);
          });
  };

  getNextIndex = () => {
      return this.state.holes.indexOf(this.state.holes.find(hole => !hole.score));
  };

  setScore = (hole, score, scorePhrase) => {
      const start = this.state.holes.slice(0, hole-1);
      const middle = this.state.holes.slice(hole-1, hole);
      const end = this.state.holes.slice(hole, this.state.holes.length);
      if (scorePhrase) {
          middle[0].score = middle[0].par + Number(scorePhrase);
      } else if (score) {
          middle[0].score = score;
      }
      const array = start.concat(middle).concat(end);
      console.log(array);
      this.setState({holes: array});
  };

  shotTotal = () => {
      return this.state.holes.map(hole => hole.score).reduce((s1, s2) => Number(s1) + Number(s2));
  };

  render() {
    return (
      <div className="App" style={
        {
          height: '100%',
          width: '100%',
          display: 'table',
          position: 'absolute',
          top: 0,
          left: 0
        }}>
        <div style={{
            display: 'table-cell',
            verticalAlign: 'middle'
        }}>
          <Panel bsStyle="primary" style={{maxWidth: '400px', verticalAlign: 'middle', margin: 'auto'}}>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Scorecard</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Hole</th>
                  <th>Par</th>
                  <th>Index</th>
                  <th>Player 1</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.holes.map(hole => {
                        return (
                            <tr key={hole.hole}>
                              <td>{hole.hole}</td>
                              <td>{hole.par}</td>
                              <td>{hole.idx}</td>
                              <td>{hole.score}</td>
                            </tr>
                        );
                    })
                }
                <tr>
                    <td>Total</td>
                    <td/>
                    <td/>
                    <td>{this.shotTotal()}</td>
                </tr>
                </tbody>
              </Table>
            </Panel.Body>
          </Panel>
          <Dictaphone sendAudio={this.sendToDialogFlow}/>
        </div>
      </div>
    );
  }
}

export default App;
