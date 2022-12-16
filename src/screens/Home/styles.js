import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        backgroundColor: '#fff'
    },
    flex: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10
    },
    subtitle: {
        alignSelf: 'center',
        marginBottom: 15
    },
    containerSearchAndFilter: {
        flexDirection: 'row', 
        marginBottom: 20
    },
    inputSearch: {
        flex: 1, 
        marginRight: 10
    }
});

export default styles;