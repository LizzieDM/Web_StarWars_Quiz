import './App.css';
import React, {Component} from 'react';
import TopBar from './components/TopBar.js';
import {Button, Col, Row} from 'react-bootstrap';
import history from './history';
import imgStarShip from './starship.png';
import imgPlanet from './planetBelsavis.png';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar/>

                    <div className="subcontainerBody">
                        <Row>
                        <Col>
                            <Row>
                                <img src={imgPlanet} alt="starship" className="image"/>
                            </Row>
                            <Row>

                                <Button className="button btn-black" onClick={() => history.push('/Planets')}>
                                    See Inhabitants by Planet
                                </Button>
                            </Row>
                        </Col>
                        <Col></Col>
                        <Col>
                            <Row>
                                <img src={imgStarShip} alt="starship" className="image"/>
                            </Row>
                            <Row>
                                <Button className="button btn-black" onClick={() => history.push('/StarShips')}> See the
                                    Starships by Character</Button>
                            </Row>
                        </Col>
                    </Row>
                    </div>

            </div>
        );

    }
}

export default App;

