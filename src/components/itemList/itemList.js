import React, {Component} from 'react';
import './itemList.css';
import { Spinner } from 'reactstrap';


export default class ItemList extends Component {

    state = {
        itemList: null
        };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList: itemList
                })
            })
    }

    renderItem(arr) {
        return arr.map((item, i) => {
            const label = this.props.renderItem(item);
            return (
                <li key={i} 
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(i) }
                    >
                    {label}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner color="secondary">Loading...</Spinner>
        }

        const items = this.renderItem(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}