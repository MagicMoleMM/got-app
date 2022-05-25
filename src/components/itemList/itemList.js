import React, {Component} from 'react';
import './itemList.css';
import GotService from '../../services/gotService';
import { Spinner } from 'reactstrap';


export default class ItemList extends Component {

    state = {
        charList: null
        };

    gotSerice = new GotService();

    componentDidMount() {
        this.gotSerice.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList: charList
                })
            })
    }

    renderItem(arr) {
        return arr.map((item, i) => {
            return (
                <li key={i} 
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(41 + i) }
                    >
                    {item.name}
                </li>
            )
        })
    }

    render() {

        const {charList} = this.state;

        if (!charList) {
            return <Spinner color="secondary">Loading...</Spinner>
        }

        const items = this.renderItem(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}