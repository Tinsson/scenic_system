import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './common.css'

class Copyright extends Component{
    static propTypes = {
        start: PropTypes.number,
        end: PropTypes.number,
        name: PropTypes.string
    }

    render(){
        return(
            <div className="copyright">
                <p>copyright © {this.props.start}-{this.props.end} by {this.props.name}</p>
            </div>
        )
    }
}

export default Copyright;