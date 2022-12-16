import { View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input, Button } from '@ui-kitten/components'
import styles from './styles';
import TaskList from '../../components/TaskList/TaskList';
import realm, { createRecord } from '../../database/local';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/Header';
import { IndexPath, Text } from '@ui-kitten/components';
import Filter from '../../components/Filter';

const options = [
  {
    label: 'Todas',
    value: 'all'
  },
  {
    label: 'Completadas',
    value: 'completed'
  },
  {
    label: 'Pendientes',
    value: 'pending'
  }
];

export default function Home() {

  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [search, setSearch] = useState('');

  useEffect(() => {
   getTaskFiltered();
  }, [selectedIndex, search]);

  const getTaskFiltered = () => {
    const filterValue = options[selectedIndex.row].value;
    let taskFiltered = realm.objects('Task');

    if (filterValue !== 'all'){
      taskFiltered = realm.objects('Task').filtered(`status = '${filterValue}'`);
    }

    if(search !== ''){
      taskFiltered = taskFiltered.filter(x => String(x.title).toLowerCase().includes(search.toLowerCase()))
    }

    setTasks(taskFiltered);
  
  }

  const refreshTask = () => getTaskFiltered();

  const saveTask = () => {

    if(value == ''){
      Alert.alert('Campo vacio', 'Escriba una tarea');
      return; 
    }
    
    let dataTask = {
      id: uuidv4(),
      title: value,
      status: 'pending'
    }

    createRecord('Task', dataTask , () => {
      setValue('');
      refreshTask();
    });
  };

  const onSelect = index => setSelectedIndex(index)

  const getCountTaskCompleted = () => realm.objects('Task').filter(x => x.status == 'completed').length; 

  const getCountAllTask = () => realm.objects('Task').length; 

  return (
    <View style={styles.container}>
       <Header title={'Mis tareas'} />
       <Text category='h6' style={styles.subtitle} >Tareas completadas: {getCountTaskCompleted()} de {getCountAllTask()}</Text>

       <View style={styles.containerSearchAndFilter}>
          <Input
              style={styles.inputSearch}
              placeholder='Buscar...'
              value={search}
              onChangeText={text => setSearch(text)}
            />
          <Filter options={options} selectedIndex={selectedIndex} onSelect={onSelect}/>
       </View>

       <TaskList data={tasks} onChange={() => refreshTask()} />

       <View style={[styles.row]}>
          <View style={[styles.flex, { marginRight: 10 }]}>
            <Input
              placeholder='Escribe una nueva tarea'
              value={value}
              onChangeText={text => setValue(text)}
            />
          </View>
          <View style={{ width: '30%' }}>
            <Button onPress={() => saveTask()}>
              Agregar
            </Button>
          </View>
       </View>

    </View>
  )
}