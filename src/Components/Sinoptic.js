import React, {Component} from 'react';

class Sinoptic extends Component {
    render() {
        return (
            <div>
                { this.props.city &&
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item"><p>Place: {this.props.city}, {this.props.country}</p></li>
                            <li className="list-group-item"><p>Temperature: {this.props.temp}</p></li>
                            <li className="list-group-item">                        <p>Pressure: {this.props.pressure}</p>
                            </li>
                            <li className="list-group-item">                        <p>Sun Down: {this.props.sunset}</p>
                            </li>
                        </ul>
                    </div>}
            </div>
        );
    }
}

export default Sinoptic;