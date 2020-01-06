import React, {Component, PureComponent} from "react"
import './Article.css'

class Article extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            // isOpen: props.defaultOpen,
            count: 0
        }
    }
    

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.defaultOpen !==this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }
    render() {
        const { article, isOpen, onBtnClick } = this.props
        const body = isOpen && <section>{article.text}</section>
        return (
            <div className="card" onClick={this.incrementCounter}>
                <div class="card-header">
                	<h2 className="text-center text-muted">
                        {article.title}
                    </h2>
                    <p class="looked">
                        clicked {this.state.count}
                    </p>
                </div>
                <div class="card-body">
                    {body}
                    <p className="text-uppercase date">creating date: {(new Date(article.date)).toDateString()}</p>
                    <button onClick={onBtnClick}  className="btn btn-outline-secondary">{isOpen ? "close article" : "open article"}</button>
                </div>
            </div>
        )
        
    }
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}


export default Article;