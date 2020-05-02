import React from 'react';
import {
  StyleSheet, 
  View,
  Alert,
  Text,
  ActivityIndicator
  
} from 'react-native';
import { Container, Header, Content, List, ListItem,Left,Right,Body ,Thumbnail,Button, Item} from 'native-base';
import Modals from '../components/modal'
import {getlistOfNews} from '../service/news'
import DataItem from '../DataItems'

export default class tab3 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            data:null,
            setModalVisible:false,
            modalNewsData:{}
        }
    }

    handleItemOnPress=(newsdata)=>{
        this.setState({
            setModalVisible:true,
            modalNewsData:newsdata
        })
    }
    
    handleItemOnClose=()=>{
        this.setState({
            setModalVisible:false,
            modalNewsData:{}
        })
    }
    componentDidMount(){
        getlistOfNews('technology').then(data =>{
            this.setState
            ({
                isLoading:false,
                data:data
            })
        },error =>{
            Alert.alert('error','something went wrong');
        })
    }

    
    render(){
        let view =this.state.isLoading?(
            <View>
         <ActivityIndicator animating={this.state.isLoading}/>
         <Text style={{textAlign:"center"}}>Please Wait</Text>
            </View>
        ):(<List
            dataArray={this.state.data}
            renderRow={(item)=>{
                return <DataItem onPress={this.handleItemOnPress} data={item}/>
            }}
        />)
      return(
        <Container>
        <Content>
          {view}
        </Content>
        <Modals
            showModal={this.state.setModalVisible}
            newsDatas={this.state.modalNewsData}
            onClose={this.handleItemOnClose}
        />
      </Container>
    );
      
    }
  }
          
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center'
      
  
    }
  });
  
  
  