import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Exercise1 = () => {
  return (
    <View style={{marginTop: 30}}>
      <Text style={{fontSize: 24}}>RP Values</Text>
      <Text style={{color: 'green'}}>Excellence</Text>
      <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
      <Text style={{fontStyle: 'italic'}}>Integrity</Text>
      <Text style={{textAlign: 'center'}}>Teamwork</Text>
      <Text style={{backgroundColor: 'black', color: 'white'}}>Enterprising</Text>
    </View>
  );
}

const Exercise2 = () => {
    return (
        <View>
            <View style={Exercise2styles.container}>
                <Text style={[Exercise2styles.boxText, Exercise2styles.title]}>Who We Are</Text>
            </View>
            <View style={Exercise2styles.container}>
                <Text style={Exercise2styles.boxText}>Our People</Text>
            </View>
            <View style={Exercise2styles.container}>
                <Text style={Exercise2styles.boxText}>Our Campus</Text>
            </View>
        </View>
    )
}

const Exercise2styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
    },
    boxText: {
        color: 'white',
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
    },
});

const Exercise3A = () => {
    return (
        <View style={[Exercise3Astyles.parent, {marginTop: 30}]}>
            <Text style={[Exercise3Astyles.child, {backgroundColor: 'powderblue'}]}>Child One</Text>
            <Text style={[Exercise3Astyles.child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
            <Text style={[Exercise3Astyles.child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
        </View>
    )
}

const Exercise3Astyles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        flex: 1,
    },
})

const Exercise3B = () => {
    return (
        <View style={[Exercise3Bstyles.parent, {marginTop: 30}]}>
            <Text style={[Exercise3Bstyles.child, {backgroundColor: 'powderblue'}]}>Child One</Text>
            <Text style={[Exercise3Bstyles.child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
            <Text style={[Exercise3Bstyles.child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
        </View>
    )
}

const Exercise3Bstyles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        flex: 1,
    },
})

const Exercise3C = () => {
    return (
        <View style={[Exercise3Cstyles.parent, {marginTop: 30}]}>
            <Text style={[Exercise3Cstyles.child, {backgroundColor: 'powderblue', maxWidth: 90}]}>Child One</Text>
            <Text style={[Exercise3Cstyles.child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
            <Text style={[Exercise3Cstyles.child, {backgroundColor: 'steelblue', maxHeight: 120}]}>Child Three</Text>
        </View>
    )
}

const Exercise3Cstyles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        flex: 1,
    },
})

const Exercise3D = () => {
    return (
        <View style={[Exercise3Dstyles.parent, {marginTop: 30}]}>
            <Text style={[Exercise3Dstyles.child, {backgroundColor: 'powderblue', flex: 1}]}>Child One</Text>
            <Text style={[Exercise3Dstyles.child, {backgroundColor: 'skyblue', flex: 2}]}>Child Two</Text>
            <Text style={[Exercise3Dstyles.child, {backgroundColor: 'steelblue', flex: 3}]}>Child Three</Text>
        </View>
    )
}

const Exercise3Dstyles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
})

const Exercise3E = () => {
    return (
        <View style={[Exercise3Estyles.parent, {marginTop: 30}]}>
            <Text style={[Exercise3Estyles.child, {backgroundColor: 'powderblue'}]}>Child One</Text>
            <Text style={[Exercise3Estyles.child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
            <Text style={[Exercise3Estyles.child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
        </View>
    )
}

const Exercise3Estyles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
        // justifyContent: 'flex-start',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-around',
        // justifyContent: 'space-between',
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
})

const Exercise4 = () => {
    return (
        <View style={Exercise4styles.parent}>
            <Text style={[Exercise4styles.child, {backgroundColor: 'powderblue'}]}>Square 1</Text>
            <Text style={[Exercise4styles.child, {backgroundColor: 'green'}]}>Square 2</Text>
            <Text style={[Exercise4styles.child, {backgroundColor: 'red'}]}>Square 3</Text>
        </View>
    )
}

const Exercise4styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    child: {
        width: 80,
        height: 80,
        textAlign: 'center',
        lineHeight: 80,
    },
})

export default Exercise4;
