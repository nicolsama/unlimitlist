import React from 'react';

class Text extends React.Component {

    constructor(props) {
        super(props)
    }

    _highlighter(body, query) {

        if (body.match(query)) {
            const index = body.match(query).index

            const front = body.slice(0, index);
            const highlight = body.slice(index, index + query.length);
            const back = body.slice(index + query.length); 

        return (<>
            <span>{front}</span>
            <span className="highlight">{highlight}</span>
            <span>{back}</span>
            </>
            )

        } else {
            return body
        }
    }

    render() {
        return (<div
            className='editable'
            contentEditable="true"
            onKeyDown={this.props.handleKeyDown}
            onBlur={this.props.handleBlur}
            >
            <span>{this._highlighter(this.props.body, this.props.query)}</span>
        </div>)

    }

}

export default Text;