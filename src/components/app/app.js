import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../Pages/characterPage/characterPage';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import HousePage from '../Pages/housePage';
import BookPage from '../Pages/bookPage/bookPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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

            <Router>
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
                        <Routes>
                            <Route path='characters' element={<CharacterPage/>}/>
                            <Route path='books' element={<BookPage/>}/>
                            <Route path='houses' element={<HousePage/>}/>
                        </Routes>
                    </Container>
                </>  
            </Router>           
        );
    }
};

