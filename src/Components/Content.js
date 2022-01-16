import React, {Component} from 'react';

import tower2 from '../image/tower2.svg'
import Vector from '../image/Vector.svg'
import pluses from '../image/pluses.svg'
import mail from '../image/mail.svg'


class Content extends Component {
    render() {
        return (
            <div>
                <div className="container2">
                    <div className="side_photo">
                        <img src={tower2}/>
                    </div>
                    <div className="content">
                        <p className="text1">BEST AIRLINES IN THE WORLD</p>
                        <img src={Vector} className="vector2"/>
                            <h1 className="text2">Travel, enjoy
                                and live a new
                                and full life</h1>
                            <p className="text3">We analyze air tickets - we compare
                                prices and transfer options, determining
                                the cheapest air tickets and the most
                                optimal flight option (direct or with a
                                convenient transfer).</p>
                            <button type="submit" formMethod="get" className="button">Find out more</button>
                    </div>
                    <img src={Vector} className="vector"/>
                </div>
                <div className="container3">
                    <div className="rectangle">
                        <p className="text4">Subscribe to get information, latest news and other interesting offers
                            about AIRSTAR</p>

                        <p><input type="text" name="email" placeholder="Your email" size="18" className="input"/></p>

                        <button type="submit" formMethod="get" className="button">Subscribe</button>
                        <img src={mail} className="vector3"/>
                    </div>
                    <div>
                        <img src={pluses} className="vector4"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;