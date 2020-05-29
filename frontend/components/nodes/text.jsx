import React from 'react';

class Text extends React.Component {

    constructor(props) {
        super(props)
    }

    _highlighter(span, query) {

        let text = span.props.children;

        if (query && text.match(query)) {
            const index = text.match(query).index
            const front = text.slice(0, index);
            const highlight = text.slice(index, index + query.length);
            const back = text.slice(index + query.length); 

        return (<>
            <span 
                className="editable"
                contentEditable="true"
                onBlur={this.props.onBlur}
                onKeyDown={this.props.onKeyDown}
                ref={this.props.ref}>
                    <span>{front}</span>
                    <span className="highlight">{highlight}</span>
                    <span>{back}</span>
            </span> 
            </>
            )

        } else {
            return <span
                className="editable"
                contentEditable="true"
                onBlur={this.props.onBlur}
                onKeyDown={this.props.onKeyDown}
                ref={this.props.ref}>{text}</span>
        }
    }

    render() {
        return (<>
                    {this._highlighter(this.props.children, this.props.query)}
                </>);
    }

}

export default Text;