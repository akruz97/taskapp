import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerItem: {
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#3366FF'
    },
    row: {
        flexDirection: 'row' 
    },
    title: {
        marginHorizontal: 10,
    },
    completed: {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    pending: {
        textDecorationLine: 'none', 
        textDecorationStyle: 'solid'
    },
    button: {
        marginHorizontal: 10
    },
    containerModal: {
        minHeight: 192,
      },
      backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modal: {
        width: '80%'
      },
      inputModal: {
        marginVertical: 20
      }
});

export default styles;