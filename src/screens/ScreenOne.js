import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, fetchHeroesList } from '../redux/actions';

class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            heroesList: [],
        }
    }

    getHerosFromApiAsync = async () => {

        await fetch('https://simplifiedcoding.net/demos/view-flipper/heroes.php', {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {

                this.setState({ isLoading: false })
                this.setState({ heroesList: responseJson.heroes })
                //console.error(responseJson);
                //return responseJson.heroes;
                this.props.storeHeroesList(responseJson.heroes)

            })
            .catch((error) => {
                console.error(error);
            });
    }


    componentDidMount() {

        this.getHerosFromApiAsync();

        console.error(this.props.colors);
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    < ActivityIndicator size="large" color='gray' />
                </View>
            )
        }

        return (
            <View
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ScreenTwo')}>
                    <Text>Screen One</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
        colors: state.colorsReducer.colors,
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
        storeHeroesList: (heroesList) => dispatch(fetchHeroesList(heroesList)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenOne);
