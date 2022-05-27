import React from 'react';
import ItemList from '../../itemList';
import GotService from '../../../services/gotService';
import { useNavigate } from 'react-router-dom';

const BookPage = () => {

    const navigate = useNavigate();
    const gotService = new GotService();

        return (
            <ItemList 
                onCharSelected={charId => {
                    navigate(`${charId + 1}`)
                }}
                getData={gotService.getAllBooks}
                renderItem={({name}) => name}
            />
        )
}
export default BookPage;

