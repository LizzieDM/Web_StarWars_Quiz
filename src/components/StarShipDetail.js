
import React, {Component} from 'react';
import axios from 'axios';
import { Row} from "react-bootstrap";



class StarShipDetails  extends Component {


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
            axios.get('StarWars/?command=starShip&goToPage='+ this.state.searchTerm)
                .then(function (response) {
                    console.log(response);
                    const starShipGet =JSON.parse(JSON.stringify(response.data))
                    //let {shipData} = starShipGet;
                    return starShipGet;
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
                            <h6 className="card-subtitle mb-2 text-muted">{ this.state.data.model}</h6>
                            <p className="card-text"> Manufacturer:{ this.state.data.manufacturer}</p>
                            <p className="card-text"> Cost in credits:{ this.state.data.cost_in_credits}</p>
                            <p className="card-text"> Length:{ this.state.data.length}</p>
                            <p className="card-text"> Crew:{ this.state.data.crew}</p>
                            <p className="card-text"> Passengers:{ this.state.data.passengers}</p>
                            <p className="card-text"> Cargo Capacity:{ this.state.data.cargo_capacity}</p>
                            <p className="card-text"> Consumables:{ this.state.data.consumables}</p>
                            <p className="card-text"> Hyperdrive Rating:{ this.state.data.hyperdrive_rating}</p>
                            <p className="card-text"> MGLT:{ this.state.data.MGLT}</p>
                            <p className="card-text"> Starship Class:{ this.state.data.starship_class}</p>
                        </div>
                    </div>

            </Row>
        );

    }
}

export default StarShipDetails;


