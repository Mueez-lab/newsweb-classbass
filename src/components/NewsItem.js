import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, newsUrl , author, time, source} = this.props;
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <div className="card" style={{ width: "20rem" }}>
                <span class="position-absolute translate-middle badge rounded-pill text-bg-info" style={{left:'95%'}}>{source}</span>
                    <img src={!imageurl ? "https://s.yimg.com/uu/api/res/1.2/N5ELBmNPPZaC.MrYarB8Kw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/2d3ab840-3d13-11ee-bcef-dab10f0e1c37.cf.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        <div className="card-body">
                                <p className="card-text"><small className="text-body-secondary"> By {author} <br />{ new Date(time).toGMTString()}</small></p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
