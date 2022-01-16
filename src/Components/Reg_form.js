import React, {Component} from 'react';

import '../css/style.css';
import '../css/register.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class RegForm extends Component {
    render() {
        return (
            <div>
                <div className="container2">
                <h1 className="logo_name4">Registration</h1>

                <div className="inp-row">
                    <label for="inp-name">Name</label>
                    <input required type="text" placeholder="Your name" id="inp-name"/>
                </div>

                <div className="inp-row">
                    <label for="inp-sname">Surname</label>
                    <input required type="text" placeholder="Your surname" id="inp-sname"/>
                </div>

                <div className="inp-row">
                    <form>
                        <label for="age">Age</label>
                        <input type="number" step="1" min="8" max="100" value="18" id="age" name="age"/>
                    </form>
                </div>
                <div className="inp-row">
                    <label>Please select your gender:</label>
                    <input type="radio" id="contactChoice1"
                           name="contact" value="male"/>
                    <label htmlFor="contactChoice1" className="radiobuttons">Male</label>
                    <input type="radio" id="contactChoice2"
                           name="contact" value="female"/>
                    <label htmlFor="contactChoice2" className="radiobuttons">Female</label>
                    <input type="radio" id="contactChoice3"
                           name="contact" value="other"/>
                    <label htmlFor="contactChoice3">Other</label>
                </div>

                <div className="inp-row">
                    <label for="inp-email">Email</label>
                    <input required type="text" placeholder="Your email" id="inp-email"/>
                </div>

                <div className="inp-row">
                    <label for="inp-passwd">Password</label>
                    <input required type="password" placeholder="Your password" id="inp-passwd"/>
                </div>

                <div className="inp-row">
                    <label for="text">Tell about You</label>
                    <textarea id="text" name="text"
                              rows="5" cols="33">It was a dark and stormy night...</textarea>
                </div>

                <div>
                    <input id="submit-btn" type="submit" value="Submit" className="button"/>
                </div>
            </div>
            </div>
        );
    }
}

export default RegForm;