import React, {Component} from 'react';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock';


export default class BookPage extends Component {

        state = {
            selectedBook: null,
            error: false
        }
    
    gotService = new GotService();

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id,
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

        const itemList = (
            <ItemList 
                onCharSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}
                />
        )

        const charDetail = (
            <CharDetails 
                charId={this.state.selectedBook}
                getDetail={this.gotService.getBook}
                >
                    <Field field='numberOfPages' label='NumberOfPages'/>
                    <Field field='mediaType' label='MediaType'/>
                    <Field field='publiser' label='Publiser'/>
                    <Field field='released' label='Released'/>

                </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetail}/>
        )
    }
}