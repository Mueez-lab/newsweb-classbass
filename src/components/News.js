import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: `us`,
        category: `general`
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c6fe5fad3ea4a92b694981b8068b17e&pageSize=21&page=1`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
    }
    handlePreClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c6fe5fad3ea4a92b694981b8068b17e&pageSize=21&page=${this.state.page - 1}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            loading: false,
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c6fe5fad3ea4a92b694981b8068b17e&pageSize=21&page=${this.state.page + 1}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    
    render() {
        return (
            <div className='content my-3'>
                <h1 className="text-center">News World-Top Headlines <span style={{textShadow: '0px 0px 2px hotpink,0px 0px 2px hotpink,0px 0px 3px black,0px 0px 3px black'}}> <br />{this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} Category</span></h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="cardnews col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title/* .slice(0, 45)  */: ""} description={element.description ? element.description/* .slice(0, 88)  */: ""} imageurl={element.urlToImage} newsUrl={element.url}  author={element.author? element.author: "unknown"}  time={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between ">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary btn-sm" onClick={this.handlePreClick}>Previous Page</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-secondary btn-sm" onClick={this.handleNextClick}>Next Page</button>
                </div>
            </div>
        )
    }
}

export default News
