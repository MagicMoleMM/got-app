import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../../services/gotService';


const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {Field};

export default class CharDetails extends Component {

    state = {
        item: null,
    } 
    
    gotService = new GotService();

    updateChar() {
        const {charId} = this.props;
        const {getDetail} = this.props;
        if (!charId) {
            return;
        }
        getDetail(charId)
            .then((item) => {
                this.setState({
                    item: item
                })
            })
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    render() {

        if (!this.state.item) {
            return <span className="select-error">Please, select a character</span>
        }

        const {item} = this.state;
        const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}