import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView
} from 'react-native';
import NewsPart from '../components/NewsPart'

const News = () => {

  return (
      <SafeAreaView style = {{paddingTop:25}}>
        <ScrollView >
          <NewsPart/>
        </ScrollView>
      </SafeAreaView>
    );
}
export default News;
