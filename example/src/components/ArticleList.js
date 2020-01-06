import React, { PureComponent } from 'react'
import Article from './Article/Article'

export default class ArticleList extends PureComponent{
    state = {
        openArticleId: null
    }
    render(){
        const articleElements = this.props.articles.map((article, index) => 
            <li className="col-6 text-justify " key={article.id}>
                <Article article = {article} 
                        isOpen = {this.state.openArticleId === article.id}
                        onBtnClick = {this.handleClick.bind(this, article.id)}
                />
            </li>
        )
        return( 
            <ul className="row">
                {articleElements}
            </ul>
        )
    }
    handleClick = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })
}