import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/characterPage';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import './app.css';



export default class App extends Component {

    state = {
        isToggleOn: true,
        error: false
    };

    gotService = new GotService();

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    handleClick = () => {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
    }
    
    render() {

        const {isToggleOn} = this.state;
        const rundom = isToggleOn ? <RandomChar/> : null;
        
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                         {rundom}
                         <Button 
                            outline
                            color="warning"
                            className='btn'
                            onClick={this.handleClick}
                            >{isToggleOn ? 'OFF Rundom Character' : 'ON Rundom Character'}
                         </Button>   
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onCharSelected={this.onCharSelected}
                            getData={this.gotService.getAllBooks}
                            />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onCharSelected={this.onCharSelected}
                            getData={this.gotService.getAllHouses}
                            />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

};

