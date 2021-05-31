import './Tables.css'
import React from 'react';
import PlanetDetail from "./PlanetDetails" ;


const PlanetsTable = ({ results }) => {


    return (
        <table className="tableMargin">
            <thead>

            </thead>
            <tbody>
            {   results.map( (planet, index) => {
                return (
                    <tr>


                        <PlanetDetail details={ planet }/>

                    </tr>
                )
            })
            }
            </tbody>
        </table>
    );
}

export default PlanetsTable