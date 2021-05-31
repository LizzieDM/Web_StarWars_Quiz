import React from 'react';
import StarShipDetail from "./StarShipDetail" ;


const Table = ({ results }) => {


    return (
        <table>
            <thead>

            </thead>
            <tbody>
            {   results.map( (planet, index) => {
                return (
                    <tr>


                            <StarShipDetail details={ planet }/>

                    </tr>
                )
            })
            }
            </tbody>
        </table>
    );
}

export default Table