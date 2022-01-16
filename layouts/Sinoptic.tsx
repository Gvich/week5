import React, {Component} from 'react';

class Sinoptic extends Component {
    render() {
        return (
            <div>
                { this.props.city &&
                    <div>
                        <ul className="list-group container7">
                            <li className="list-group-item lists"><p >Place: {this.props.city}, {this.props.country}</p></li>
                            <li className="list-group-item lists"><p>Temperature: {this.props.temp}</p></li>
                            <li className="list-group-item lists">                        <p>Pressure: {this.props.pressure}</p>
                            </li>
                            <li className="list-group-item lists">                        <p>Sun Down: {this.props.sunset}</p>
                            </li>
                        </ul>
                    </div>}
            </div>
        );
    }
}

export default Sinoptic;