import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SimpleReactFooter from "simple-react-footer";


class Foot extends Component {
    render() {
        const description = "__________________________________________________________________________";
        const title = "AIRSTAR";
        const columns = [
            {
                title: "COMPANY",
                resources: [
                    {
                        name: "About",
                        link: "/about"
                    },
                    {
                        name: "Careers",
                        link: "/careers"
                    },
                    {
                        name: "Contact",
                        link: "/contact"
                    }
                ]
            },
            {
                title: "SUPPORT",
                resources: [
                    {
                        name: "Help",
                        link: "/help"
                    },
                    {
                        name: "Privacy",
                        link: "/privacy"
                    },
                    {
                        name: "Terms",
                        link: "/terms"
                    }
                ]
            },
            {
                title: "VISIT",
                resources: [
                    {
                        name: "Locations",
                        link: "/locations"
                    },
                    {
                        name: "Culture",
                        link: "/culture"
                    }
                ]
            }
        ];
        return <nav
            role="navigation" className="navbar-fixed-bottom footer-container footer"
        ><SimpleReactFooter
            description={description}
            title={title}
            columns={columns}
            linkedin="fluffy_cat_on_linkedin"
            facebook="fluffy_cat_on_fb"
            twitter="fluffy_cat_on_twitter"
            instagram="fluffy_cat_live"
            youtube="UCFt6TSF464J8K82xeA?"
            pinterest="fluffy_cats_collections"
            copyright="AIRSTAR"
            iconColor="white"
            backgroundColor="black"
            fontColor="white"
            copyrightColor="white"
        /></nav>
    }
}

export default Foot;