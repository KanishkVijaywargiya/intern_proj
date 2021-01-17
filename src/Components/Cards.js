import React from 'react'
import { Text, View, StyleSheet, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Cards = ({ idVal, nameVal, amountVal, addVal, createDateVal, categoryVal }) => (
    <View style={styles.outerView}>
        <View style={[styles.innerView, { marginTop: hp('0.8%') }]}>
            <Text style={styles.textKey}>Id:</Text>
            <Text style={styles.textValue}>{idVal}</Text>
        </View>
        <View style={styles.innerView}>
            <Text style={styles.textKey}>Name:</Text>
            <Text style={styles.textValue} numberOfLines={1}>{nameVal}</Text>
        </View>
        <View style={styles.innerView}>
            <Text style={styles.textKey}>Amount:</Text>
            <Text style={styles.textValue}>{amountVal}</Text>
        </View>
        <View style={styles.innerView}>
            <Text style={styles.textKey}>Address:</Text>
            <Text style={styles.textValue} numberOfLines={1}>{addVal}</Text>
        </View>
        <View style={styles.innerView}>
            <Text style={styles.textKey}>Created Date:</Text>
            <Text style={styles.textValue} numberOfLines={1}>{createDateVal}</Text>
        </View>
        <View style={[styles.innerView, { marginBottom: hp('1.5%') }]}>
            <Text style={styles.textKey}>Category:</Text>
            <Text style={styles.textValue}>{categoryVal}</Text>
        </View>
    </View>
)
export default Cards;

const styles = StyleSheet.create({
    outerView: { marginLeft: hp('2%'), marginRight: hp('2%'), backgroundColor: '#fff', marginTop: hp('2%'), borderRadius: 5, elevation: 10, shadowOpacity: 0.7, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } },
    innerView: { paddingLeft: hp('2%'), paddingTop: hp('0.3%'), flexDirection: 'row', alignItems: 'center' },
    textKey: { fontWeight: 'bold', fontSize: hp('2.3%'), marginRight: hp('1%') },
    textValue: { color: 'blue', fontSize: hp('2.3%'), flex: 1 }
})
