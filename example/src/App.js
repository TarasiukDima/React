import React, {PureComponent} from 'react';
import ArticleList from './components/ArticleList'
import articles from './fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.PureComponent {
  state = {
    reverted: false
  }
  render(){
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-3 text-center font-weight-bold">Example</h1>
          <button className="btn btn-danger" onClick={this.revert}>revert</button>
        </div>
        <ArticleList articles = { this.state.reverted ? articles.slice().reverse() : articles }/>
      </div>
    );
  }

  revert = () => this.setState({
      reverted : !this.state.reverted
    })
}

export default App;
