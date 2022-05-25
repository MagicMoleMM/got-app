import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';


export default class CharacterPage extends Component {

        state = {
            selectedChar: null,
            error: false
        }
    
    gotService = new GotService();

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id,
            error: false
        })
    }

    componentDidCatch () {
        this.setState({
            error: true
        })
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
        <Row>
            <Col md='6'>
                <ItemList 
                onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacters}
                // renderItem={(item) => item.name}
                />
            </Col>
            <Col md='6'>
                <CharDetails charId={this.state.selectedChar}/>
            </Col>
        </Row>
        )
    }
}