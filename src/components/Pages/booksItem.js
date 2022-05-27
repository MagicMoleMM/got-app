import React from 'react';
import GotService from '../../services/gotService';
import CharDetails, {Field} from '../charDetails';
import { useParams } from 'react-router-dom';

const BooksItem = () => {
    
    const gotService = new GotService()
    const {id} = useParams();
    
        return (
            <CharDetails 
                charId={id}
                getDetail={gotService.getBook}
            >
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='mediaType' label='MediaType'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>

            </CharDetails>
        )
}
export default BooksItem