import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingButtonText from '../../atoms/SettingButtonBoolean';

import TimeTable from '@mikezzb/react-native-timetable';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';

const events = [
  {
    courseId: 'AIST3020',
    title: 'Intro to Computer Systems',
    section: '- - LEC',
    day: 2,
    startTime: '11:30',
    endTime: '12:15',
    location: 'Online Teaching',
    color: 'rgba(253,149,141,1)',
  },
  {
    courseId: 'AIST3020',
    title: 'Intro to Computer Systems',
    section: '- - LEC',
    day: 3,
    startTime: '16:30',
    endTime: '18:15',
    location: 'Online Teaching',
    color: 'rgba(253,149,141,1)',
  },
  {
    courseId: 'AIST3020',
    title: 'Intro to Computer Systems',
    section: '-L01 - LAB',
    day: 2,
    startTime: '16:30',
    endTime: '17:15',
    location: 'Online Teaching',
    color: 'rgba(253,149,141,1)',
  },
  {
    courseId: 'CSCI2100',
    title: 'Data Structures',
    section: 'A - LEC',
    day: 1,
    startTime: '16:30',
    endTime: '17:15',
    location: 'Online Teaching',
    color: 'rgba(241,153,40,1)',
  },
  {
    courseId: 'CSCI2100',
    title: 'Data Structures',
    section: 'A - LEC',
    day: 3,
    startTime: '14:30',
    endTime: '16:15',
    location: 'Online Teaching',
    color: 'rgba(241,153,40,1)',
  },
  {
    courseId: 'CSCI2100',
    title: 'Data Structures',
    section: 'AT02 - TUT',
    day: 4,
    startTime: '17:30',
    endTime: '18:15',
    location: 'Online Teaching',
    color: 'rgba(241,153,40,1)',
  },
  {
    courseId: 'ELTU2014',
    title: 'English for ERG Stds I',
    section: 'BEC1 - CLW',
    day: 2,
    startTime: '10:30',
    endTime: '11:15',
    location: 'Online Teaching',
    color: 'rgba(3,218,197,1)',
  },
  {
    courseId: 'ELTU2014',
    title: 'English for ERG Stds I',
    section: 'BEC1 - CLW',
    day: 4,
    startTime: '8:30',
    endTime: '10:15',
    location: 'Online Teaching',
    color: 'rgba(3,218,197,1)',
  },
  {
    courseId: 'ENGG2780',
    title: 'Statistics for Engineers',
    section: 'B - LEC',
    day: 1,
    startTime: '12:30',
    endTime: '14:15',
    location: 'Online Teaching',
    color: 'rgba(0,142,204,1)',
  },
  {
    courseId: 'ENGG2780',
    title: 'Statistics for Engineers',
    section: 'BT01 - TUT',
    day: 3,
    startTime: '12:30',
    endTime: '14:15',
    location: 'Online Teaching',
    color: 'rgba(0,142,204,1)',
  },
  {
    courseId: 'GESC1000',
    title: 'College Assembly',
    section: '-A01 - ASB',
    day: 5,
    startTime: '11:30',
    endTime: '13:15',
    location: 'Online Teaching',
    color: 'rgba(187,134,252,1)',
  },
  {
    courseId: 'UGEB1492',
    title: 'Data Expl - Stat in Daily Life',
    section: '- - LEC',
    day: 4,
    startTime: '14:30',
    endTime: '17:15',
    location: 'Lady Shaw Bldg LT5',
    color: 'rgba(102,204,255,1)',
  },
  {
    courseId: 'UGEC1685',
    title: 'Drugs and Culture',
    section: '- - LEC',
    day: 4,
    startTime: '11:30',
    endTime: '13:15',
    location: 'Lee Shau Kee Building LT5',
    color: 'rgba(255,111,199,1)',
  },
  {
    courseId: 'Eat!',
    title: 'No work on SUNDAY!',
    section: '',
    day: 7,
    startTime: '12:30',
    endTime: '13:15',
    location: 'Home',
    color: 'rgba(50,144,144,1)',
  },
  {
    courseId: 'Manga!',
    title: '',
    section: '',
    day: 6,
    startTime: '16:30',
    endTime: '19:15',
    location: 'Home',
    color: 'rgba(211,124,177,1)',
  },
];

export const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function getTimetableFromDate(date) {
  return `${date.getHours()}:${
    date.getMinutes() < 10 ? (date.getMinutes() === 0 ? '00' : '0') : ''
  }${date.getMinutes()}`;
}

const Schedule = props => {
  const data = [
    {label: 'English', value: 'English'},
    {label: 'Vietnamese', value: 'Vietnamese'},
  ];
  const [language, setLanguage] = React.useState('English');
  const [notifications, setNotifications] = React.useState(true);
  const {role, email} = props.route.params;

  const [modalVisible, setModalVisible] = React.useState(false);
  const [eventGroups, setEventGroups] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);
  const [items, setItems] = React.useState(
    WEEKDAYS.map((value, index) => {
      return {
        label: value,
        value: index + 1,
      };
    }),
  );

  const [timePickerStart, setTimePickerStart] = React.useState(false);
  const [timePickerEnd, setTimePickerEnd] = React.useState(false);

  const [timeStart, setTimeStart] = React.useState(new Date(Date.now()));
  const [timeEnd, setTimeEnd] = React.useState(new Date(Date.now()));

  function onTimeSelectedStart(_event, value) {
    setTimeStart(value);
    setTimePickerStart(false);
  }

  function onTimeSelectedEnd(_event, value) {
    setTimeEnd(value);
    setTimePickerEnd(false);
  }

  React.useEffect(() => {
    const f = async () => {
      try {
        const value = await AsyncStorage.getItem(`schedule/${email}`);
        if (value != null) setEventGroups(JSON.parse(value));
      } catch (error) {
        console.error(error);
      }
    };
    f();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
        style={{
          height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        }}
      />
      <View style={styles.top}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{flex: 35}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="chevron-back-outline" size={28} color="#333" />
          </TouchableOpacity>
          <Dropdown
            style={{
              flex: 40,
              backgroundColor: '#3787ff',
              height: 26,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 4,
            }}
            placeholderStyle={{
              fontSize: 14,
              color: 'white',
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
            }}
            selectedTextStyle={{
              fontSize: 14,
              color: 'white',
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
            }}
            iconStyle={{width: 20, height: 20, tintColor: 'white'}}
            labelField="label"
            valueField="value"
            value={language}
            data={data}
            placeholder="English"
            renderLeftIcon={() => (
              <View style={{paddingRight: 4}}>
                <Ionicons name="globe-outline" size={18} color="white" />
              </View>
            )}
            onChange={item => {
              setLanguage(item.value);
            }}
          />
          <View style={{flex: 35, height: 28}}>
            <TouchableOpacity
              style={{position: 'absolute', right: 0}}
              onPress={() => {}}>
              <Ionicons
                name="notifications-circle-outline"
                size={28}
                color="#555"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 16}}>
          <SettingButtonText
            label="Hey, Thanhf.-. do you want to sync notifications to your Google calendar"
            iconRight="chevron-forward-outline"
            isSelected={notifications}
            onPress={() => {
              setNotifications(!notifications);
            }}
          />
        </View>
      </View>
      <View style={styles.below}>
        <View style={{marginVertical: 16}}>
          <Text
            style={{fontFamily: 'Poppins-Medium', color: '#333', fontSize: 20}}>
            Today Class Schedule
          </Text>
        </View>
        {/* Calendar view section begin*/}
        <View
          style={{
            flex: 60,
            backgroundColor: '#fff',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <TimeTable
            headerStyle={{backgroundColor: '#3787ff'}}
            configs={{
              startHour: 0,
              endHour: 24,
            }}
            events={events}
            eventOnPress={event =>
              alert(
                'Class:' +
                  event.courseId +
                  '\n' +
                  'Description:' +
                  event.title +
                  '\n' +
                  'Start Time: ' +
                  event.startTime +
                  '\n' +
                  'End Time: ' +
                  event.endTime +
                  '\n' +
                  'Location:' +
                  event.location +
                  '\n',
              )
            }
          />
        </View>

        <Modal
          animationType={'slide'}
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
            <TextInput
              style={styles.inputField}
              placeholder="Course id"
              placeholderTextColor="#a1b4d4"
            />
            <TextInput
              style={styles.inputField}
              placeholder="Description"
              placeholderTextColor="#a1b4d4"
            />
            <DropDownPicker
              zIndex={3000}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Choose a date"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                zIndex: -1,
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 12,
                  paddingHorizontal: 28,
                  borderRadius: 4,
                  elevation: 3,
                  backgroundColor: '#e4f1f9',
                }}
                onPress={() => {
                  setTimePickerStart(!timePickerStart);
                }}>
                <Text style={{color: 'black', fontFamily: 'Poppins-Medium'}}>
                  {' '}
                  Start time{' '}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#e4f1f9',
                  textAlign: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                <Text style={{color: 'black', fontSize: 16}}>
                  {getTimetableFromDate(timeStart)}
                </Text>
              </View>
              {timePickerStart && (
                <DateTimePicker
                  value={timeStart}
                  mode="time"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={false}
                  onChange={onTimeSelectedStart}
                />
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                zIndex: -1,
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 12,
                  paddingHorizontal: 32,
                  borderRadius: 4,
                  elevation: 3,
                  backgroundColor: '#e4f1f9',
                }}
                onPress={() => {
                  setTimePickerEnd(!timePickerEnd);
                }}>
                <Text style={{color: 'black', fontFamily: 'Poppins-Medium'}}>
                  {' '}
                  End time{' '}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#e4f1f9',
                  textAlign: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                <Text style={{color: 'black', fontSize: 16}}>
                  {getTimetableFromDate(timeEnd)}
                </Text>
              </View>
              {timePickerEnd && (
                <DateTimePicker
                  value={timeEnd}
                  mode="time"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={false}
                  onChange={onTimeSelectedEnd}
                />
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                zIndex: -1,
                width: '100%',
                gap: 12,
                marginTop: 24,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 12,
                  paddingHorizontal: 32,
                  borderRadius: 4,
                  elevation: 3,
                  backgroundColor: '#e4f1f9',
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{color: 'black', fontFamily: 'Poppins-Medium'}}>
                  {' '}
                  Exit{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 12,
                  paddingHorizontal: 28,
                  borderRadius: 4,
                  elevation: 3,
                  backgroundColor: '#e4f1f9',
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{color: 'black', fontFamily: 'Poppins-Medium'}}>
                  {' '}
                  Submit{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Calendar view section end*/}

        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              backgroundColor: '#3787ff',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 16,
              borderRadius: 28,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="add" color="#fff" size={24} />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: '#fff',
                }}>
                Add New Schedule
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Schedule;
