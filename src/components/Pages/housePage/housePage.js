import React, {Component} from 'react';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock';


export default class HousePage extends Component {

        state = {
            selectedHouse: null,
            error: false
        }
    
    gotService = new GotService();

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id,
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
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name}
                />
        )

        const charDetail = (
            <CharDetails 
                charId={this.state.selectedHouse}
                getDetail={this.gotService.getHouse}
                >
                    <Field field='region' label='Region'/>
                    <Field field='worlds' label='Worlds'/>
                    <Field field='titles' label='Titles'/>
                    <Field field='overlord' label='Overlord'/>
                    <Field field='ancestralWeapons' label='AncestralWeapons'/>

                </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetail}/>
        )
    }
}