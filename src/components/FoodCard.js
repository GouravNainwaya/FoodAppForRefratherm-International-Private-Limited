import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';

const FoodCardTwo = ({
  item,
}) => {
  const navigation = useNavigation();

  return (
    <View style={{margin: 10}}>
      <TouchableOpacity
      activeOpacity={0.80}
        onPress={() => navigation.navigate("DetailsScreen", {item})}>
        <View
          style={{
            backgroundColor: '#ffffffff',
            elevation: 3,
            // marginTop: 10,
            borderRadius: responsiveWidth(1.5),
            width: responsiveWidth(91),
          }}>
          {/* <FordFOneFifty style={{borderRadius: responsiveWidth(3), resizeMode: 'contain'}}/> */}
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://th.bing.com/th/id/OIP.Y9Ggv_GmsWWjWgnvJOc1XQHaHa?w=183&h=183&c=7&r=0&o=5&dpr=2&pid=1.7',
            }}
            // resizeMode='cover'
          />
          <View style={{marginHorizontal: responsiveWidth(3)}}>
            <Text numberOfLines={2} style={styles.title}>
              {item?.title}
            </Text>

            <Text
              numberOfLines={2}
              style={[styles.title, {fontSize: responsiveFontSize(2)}]}>
              {item?.description}
            </Text>

            <View style={{marginBottom: responsiveHeight(1)}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: responsiveHeight(1.8),
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: responsiveWidth(87),
                  }}>
                  <Text style={styles.dividerText}>Price: </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.9),
                      textAlignVertical: 'center',
                      color: 'grey',
                    }}>
                    $230
                  </Text>
                </View>

              </View>
              
            </View>

            {/* <View style={{height: "0.1%"}}/> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const FoodCard = ({list,setRatings}) => {
  return (
    <FlatList
      data={list}
      renderItem={({item, index}) => <FoodCardTwo setRatings={setRatings} key={index} item={item} />}
      keyExtractor={(item,index) => item + index}
      showsVerticalScrollIndicator={false}
      initialNumToRender={5}
    />
  );
};

export default memo(FoodCard);

const styles = StyleSheet.create({
  title: {
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(2.3),
    maxWidth: responsiveWidth(90),
    color: 'black',
  },
  dividerText: {
    //   marginLeft: responsiveWidth(2),
    color: '#74747B',
    fontSize: responsiveFontSize(2.1),
  },
  tinyLogo: {
    height: responsiveHeight(30),
    width: responsiveWidth(91),
    // aspectRatio: 7 / 4.1,
  },
});
