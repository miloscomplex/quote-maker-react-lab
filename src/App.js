import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm'
import QuoteCard from './components/QuoteCard'
import { connect } from 'react-redux'
import QuoteContainer from './containers/Quotes'


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <QuoteContainer props={this.props}/>
        {console.log('this.props= ', this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes  }
}

export default connect(mapStateToProps)(App);
