import React, {Component} from 'react';

class Forma extends Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod} className="input-group mb-3 outt">
                <input type="text" name="city" placeholder="City" className="form-control" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-primary button2">GET WEATHER</button>
            </form>
        );
    }
}

export default Forma;