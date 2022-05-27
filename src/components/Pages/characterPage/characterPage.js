import React, {Component} from 'react';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock';


export default class CharacterPage extends Component {

        state = {
            selectedChar: null,
            error: false
        }
    
    gotService = new GotService();

    onItemSelected = (id) => {
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

        const itemList = (
            <ItemList 
                onCharSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}
                />
        )

        const charDetail = (
            <CharDetails 
                charId={this.state.selectedChar}
                getDetail={this.gotService.getCharacters}
                >
                    <Field field='gender' label='Gender'/>
                    <Field field='born' label='Born'/>
                    <Field field='died' label='Died'/>
                    <Field field='culture' label='Culture'/>

                </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetail}/>
        )
    }
}