import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Header from '../Components/Header.js'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cards from '../Components/Cards.js';
import { getUser } from '../Api/Api.js';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            user: [],
        }
    }

    userDataFromApi = async () => {
        this.setState({
            loading: true
        })
        let users = await getUser();
        console.log("USERS::", users)
        this.setState({
            user: [...users],
            loading: false
        })
        console.log("UserState", this.state.user);
    }

    componentDidMount() {
        this.userDataFromApi()
    }

    renderItem = ({ item, index }) => {
        console.log('vcda::', item.name);
        return (
            <Cards idVal={item.key} nameVal={item.name} amountVal={item.amount} addVal={item.address} createDateVal={item.createdDate} categoryVal={item.category} />
        )
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loaderMainView}>
                    <Header title='User List' color='#0A79DF' style={[styles.header]} />
                    <View style={styles.loader}>
                        <ActivityIndicator size='large' color='blue' />
                    </View>
                </View>
            )
        }
        console.log('id:', this.state.user[0]);
        return (
            <View style={{ backgroundColor: '#EAF0F1', flex: 1 }}>
                <Header title='User List' color='#0A79DF' style={[styles.header]} />
                <FlatList
                    style={styles.spacer}
                    showsVerticalScrollIndicator={false}
                    data={this.state.user.sort((a, b) => a.key < b.key ? -1 : 1)}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.key.toString()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        elevation: 10,
        shadowOpacity: 0.7,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 }
    },
    spacer: {
        marginBottom: hp('2%')
    },
    loaderMainView: {
        flex: 1
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
