import './Planets.css';
import React, {Component} from 'react';
import axios from 'axios';
import TopBar from './TopBar.js';
import PlanetsTable from './PlanetsTable';
import {Button, Col, Row} from "react-bootstrap";
import history from "../history";

class Planets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: null,
            data: []
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.searchStarShip = this.searchStarShip.bind(this);
    }


    searchStarShip() {

        if (this.state.searchTerm !== null && this.state.searchTerm !== "") {
            console.log(this.state.searchTerm)
            axios.get('StarWars/?command=habitantsPlanet&query=' + this.state.searchTerm)
                .then(function (response) {
                    console.log(response);

                    const starShipGet = JSON.parse(JSON.stringify(response.data))
                    return starShipGet;
                }).then(res => this.setState({'data': res}))
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            this.setState({'data': null})
        }
    }

    onNameChange(event) {
        console.log("NameSearch" + event.target.value);
        this.setState({'searchTerm': event.target.value});
        console.log("NameSearch changed")
    }

    componentDidMount() {
    }

    render() {

        let table;
        if (this.state.data != null) {
            table = <PlanetsTable results={this.state.data}/>;
        }
        return (


            <div>
                <TopBar/>
                <Row className="rowMargin">
                    <Col lg={4}>
                        <h6>Search habitant by Planet Name. Introduce the name in the box</h6>
                    </Col>
                    <Col lg={6}>
                        <input type="text" value={this.searchTerm} onChange={this.onNameChange}
                               placeholder="Planet Name to search"/>
                        <Button className="button button-black" onClick={this.searchStarShip}>Search habitants by
                            Planet</Button>
                    </Col>
                    <Col>
                        <Button className="button btn-black" onClick={() => history.push('/')}>
                            Home
                        </Button>
                    </Col>
                </Row>
                <Row className="rowMargin">
                    <Col lg={4}>
                    </Col>
                    <Col lg={4}>
                    <h1> Habitants</h1>
                    </Col>
                    <Col lg={4}>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                    </Col>
                    <Col lg={4}>
                        {table}
                    </Col>
                    <Col lg={4}>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default Planets;


