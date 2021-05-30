import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import axios from 'axios'
import ContentLoader from "react-native-easy-content-loader";

const { width: SCREEN_WIDTH } = Dimensions.get("screen")
const { height: SCREEN_HEIGHT } = Dimensions.get( "screen" )



const NewsPart = () => {
  const [newsdata, setNewsDta] = useState( [] )
  const api = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4ad239ccd21c482caf58d1d6e3b7f738'
  
  const fetchData = async () => {
    try {
      const response = await axios.get( api );
      setNewsDta(response.data.articles)
    } catch(e) {
      console.log(e)
    }
    
    
  }
  useEffect( () => {
    fetchData()
  },[])
  

    return (
      <View>
        {
          newsdata.length > 0 ?
            <View >
              {newsdata.map( ( news ) => {
                return(
                  <View style={styles.newsContainer} key = {news.title}>
                    <Image source={{ uri: news.urlToImage }} style={{
                      height: SCREEN_HEIGHT * 0.1,
                      width: SCREEN_WIDTH * 0.35,
                      resizeMode: 'contain',
                      marginRight: SCREEN_WIDTH * 0.03,
                      borderRadius :25
                    }} />
                    <View style={{
                      backgroundColor: '#fff',
                      width:SCREEN_WIDTH * 0.5
                    }}>
                      <Text>{ news.title }</Text>
                  </View>
                  
                </View>
                
                )
              } )}

            </View> :
            
            <View>  
              <ContentLoader active avatar pRows={4} pWidth={["100%", 200, "25%", 45]} />
          </View>
        }
      </View>
    );
  }


const styles = StyleSheet.create( {
  newsContainer: {
    elevation: 3,
    marginVertical: SCREEN_HEIGHT * 0.01,
    backgroundColor: '#fff',
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    paddingVertical: SCREEN_HEIGHT * 0.02,
    borderRadius: SCREEN_HEIGHT * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
})
export default NewsPart;