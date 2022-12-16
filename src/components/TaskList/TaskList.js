import { View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Text, CheckBox, Button, Modal, Card, Input } from '@ui-kitten/components'
import styles from './styles'
import { createRecord, deleteRecord } from '../../database/local'
import Icon from 'react-native-vector-icons/AntDesign';


export default function TaskList({ data = [], onChange }) {

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
   
    const renderItem = ({ item }) => {

        const onChangeStatus = () => {
            const newStatus = item.status == 'completed' ? 'pending' : 'completed';
            createRecord('Task', {
                ...item,
                id: item.id,
                status: newStatus
            }, () => {
                console.log('update task');
                onChange();
            });
        }

        const onDelete = () => {
            deleteRecord(item, () => { onChange(); });
        }

        const openModal = () => {
            setSelectedItem(item);
            setValue(item.title);
            setVisible(true);
        }

        return (
            <View style={styles.containerItem}>
               <View style={styles.row}>
                    <CheckBox
                        checked={item.status == 'completed' ? true : false}
                        onChange={onChangeStatus}
                        >
                    </CheckBox>
                    <Text category='s1' style={[styles.title, item.status == 'completed' ? styles.completed : styles.pending]} >{item.title}</Text>
               </View>
               <View style={styles.row}>
                    <TouchableOpacity onPress={onDelete} style={styles.button} >
                        <Icon color={'#FD8655'}  size={24} name='delete'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openModal}  style={styles.button} >
                        <Icon color={'#3366FF'} size={24}  name='edit' />
                    </TouchableOpacity>
               </View>
            </View>
        )
    }

    const onEdit = () => {
       
        createRecord('Task', {
            ...selectedItem,
            id: selectedItem.id,
            title: value
        }, () => {
            setVisible(false);
            onChange();
        });
    }


  return (
    <View style={styles.container} >
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            style={styles.modal}
            onBackdropPress={() => {
                    setVisible(false);
                    setSelectedItem(null);
            }}>
            <Card disabled={true}>
                <Text category='h5'>Tarea</Text>
                <Input  style={styles.inputModal}
                        value={value}
                        onChangeText={text => setValue(text)} />
                <Button onPress={() => onEdit()}>
                    Actualizar
                </Button>
            </Card>
        </Modal>

        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </View>
  )
}