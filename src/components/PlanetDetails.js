
import React, {Component} from 'react';
import axios from 'axios';
import { Row} from "react-bootstrap";



class PlanetDetails  extends Component {


    constructor(props) {
        console.log("Details StarShip:" + props.details);
        super(props);

        this.state = {
            searchTerm: props.details,
            data: []
        };


    }


    componentDidMount(){

        if(this.state.searchTerm !== null && this.state.searchTerm !== ""){
            console.log(this.state.searchTerm)
            axios.get('StarWars/?command=people&goToPage='+ this.state.searchTerm)
                .then(function (response) {
                    console.log(response);
                    const peopleGet =JSON.parse(JSON.stringify(response.data))
                    //let {shipData} = starShipGet;
                    return peopleGet;
                }).then(res => this.setState({ 'data': res }))
                .catch(function (error) {
                    console.log(error);
                });
            //console.log("Datos Ship" + this.state.data.name);
        }else{
            this.setState({'data': null} )
        }
    }



    render() {

        return (

            <Row >

                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title"> { this.state.data.name}</h5>

                    </div>
                </div>

            </Row>
        );

    }
}

export default PlanetDetails;


