import React from 'react';
// import { useDispatch } from 'react-redux'
import { removeQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'

/* Use the store and not own dispatch props.store.dispatch */
const QuoteCard = (props) =>

  <div>
      { console.log('props=' , props, 'store=', props.store)}
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          <footer>
            - author <cite title="Source Title">{props.quote.author}</cite>
          </footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btln-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(event) => props.store.dispatch(upvoteQuote(props.quote.id))
            }
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={(event) => props.store.dispatch(downvoteQuote(props.quote.id))
            }
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={(event) => props.store.dispatch(removeQuote(props.quote.id))}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <div>Votes: { props.quote.votes }</div>
      </div>
    </div>
  </div>;

const mapStateToProps = state => state

export default QuoteCard;
