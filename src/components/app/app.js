import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import './app.css';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            selectedChar: null,
            error: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.onCharSelected = this.onCharSelected.bind(this);
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onCharSelected(id) {
        this.setState({
            selectedChar: id
        })
    }

    handleClick() {
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
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
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

