import React from 'react';
import {
  StyleSheet, 
  View,
  Text,
  StatusBar
  
} from 'react-native';
import { Container, Header, Content, Tab, Tabs,Left,Right,Body ,Title} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabScreen extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor("#000")
  }
    render() {
      return (
        <Container >
          <Header style={{backgroundColor:'black'}} hasTabs >
          <Left/>
          <Body>
            <Title style={{color:'orange'}}>News App</Title>
          </Body>
          <Right />
          </Header>
          <Tabs tabBarUnderlineStyle={{backgroundColor:'orange'}}>
            <Tab 
            activeTextStyle={{color:'orange'}}
            textStyle={{color:'orange'}}activeTabStyle	={{backgroundColor:'black'}}tabStyle={{backgroundColor:'black'}}heading="General">
              <Tab1 />
            </Tab>
            <Tab activeTextStyle={{color:'orange'}}
            textStyle={{color:'orange'}}activeTabStyle	={{backgroundColor:'black'}}tabStyle={{backgroundColor:'black'}}heading="Business">
              <Tab2 />
            </Tab>
            <Tab activeTextStyle={{color:'orange'}}
            textStyle={{color:'orange'}}activeTabStyle	={{backgroundColor:'black'}}tabStyle={{backgroundColor:'black'}}heading="Technology">
              <Tab3 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }
  