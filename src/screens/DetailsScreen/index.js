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
import {Rating} from 'react-native-ratings';
import {ScrollView} from 'react-native-gesture-handler';

const RenderHeading = ({text}) => {
  return (
    <Text
      style={{
        color: '#000000',
        fontWeight: '600',
        fontSize: responsiveFontSize(2.50),
        lineHeight: responsiveHeight(5.50)
      }}>
      {text}
    </Text>
  );
};

const DetailsScreen = ({route}) => {
  const {item} = route?.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{margin: 10}}>
          <View
            style={{
              backgroundColor: '#ffffffff',
              elevation: 1,
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

                {/* Ingredients */}
                <TouchableOpacity
                  disabled
                  style={{
                    flexDirection: 'row',
                    marginVertical: responsiveHeight(1),
                    justifyContent: 'space-between',
                  }}>
                  <ScrollView>
                    <RenderHeading text={'Ingredients'} />
                    {item?.ingredients?.map(item => {
                      return <Text key={item} style={{color: 'grey'}}>{item}</Text>;
                    })}
                  </ScrollView>
                  <Rating
                    type="custom"
                    imageSize={19}
                    ratingCount={5}
                    style={{paddingVertical: 10}}
                    isDisabled
                    startingValue={item?.rating}
                  />
                </TouchableOpacity>
                {/* Ingredients */}

                {/* Specialities */}
                <TouchableOpacity
                  disabled
                  style={{
                    flexDirection: 'row',
                    marginVertical: responsiveHeight(1),
                    justifyContent: 'space-between',
                  }}>
                  <ScrollView>
                    <RenderHeading text={'Specialties'} />
                    {item?.specialties?.map(item => {
                      return <Text key={item} style={{color: 'grey'}}>{item}</Text>;
                    })}
                  </ScrollView>
                </TouchableOpacity>
                {/* Specialities */}

                {/* Ratings */}
                <ScrollView>
                  <RenderHeading text={'Reviews'} />
                  {item?.reviews?.map(item => {
                    return (
                      <View
                      key={item?.id}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          // marginVertical: responsiveHeight(1.3),
                        }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <Image
                            style={styles.tinyLogo2}
                            source={{
                              uri: 'https://th.bing.com/th/id/OIP.GGWpKrO1aNTwObSGDWutWAHaHa?w=185&h=185&c=7&r=0&o=5&dpr=2&pid=1.7',
                            }}
                            borderRadius={responsiveWidth(12)}
                          />
                        </View>
                        <View
                          style={{
                            flex: 5,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                            // height: responsiveHeight(16),
                          }}>
                          <View style={{}}>
                            <Text
                              style={{
                                fontSize: responsiveFontSize(1.95),
                                // height: responsiveHeight(3.2),
                                color: 'black',
                                fontWeight: '700',
                              }}>
                              {item?.name}
                            </Text>
                            <Text
                            numberOfLines={2}
                              style={{
                                fontWeight: '500',
                                fontSize: responsiveFontSize(1.85),
                                color: 'grey',
                                width: responsiveWidth(50)
                              }}>
                              {item?.comment}
                            </Text>
                          </View>
                          <View style={{alignItems: 'center'}}>
                            <Rating
                              type="custom"
                              imageSize={16}
                              ratingCount={5}
                              style={{width: responsiveWidth(20)}}
                              isDisabled
                              startingValue={item?.rating}
                            />
                          <Text
                            numberOfLines={2}
                              style={{
                                fontSize: responsiveFontSize(1.70),
                                // height: responsiveHeight(3.2),
                                color: 'black',
                                fontWeight: '400',
                                // textAlign: 'center',
                              }}>
                              Cerifyed user
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
                {/* Ratings */}

                <RenderHeading text={'Similar Items'} />

                <ScrollView horizontal>
                  {item?.similarItems?.map((item) => {
                    return (
                      <View
                      key={item?.id}
                        style={{
                          flexDirection: 'row',
                          borderRadius: responsiveWidth(0.20),
                          alignItems: 'center',
                          elevation: 0.10,
                          marginHorizontal: responsiveHeight(1.3),
                          padding: 5,
                          borderColor: 'transparent',
                          // backgroundColor: 'red',
                          width: responsiveWidth(60),
                          marginVertical: responsiveHeight(1)
                        }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <Image
                            style={{height: responsiveWidth(16), width: responsiveWidth(16)}}
                            source={{
                              uri: 'https://th.bing.com/th/id/OIP.Y9Ggv_GmsWWjWgnvJOc1XQHaHa?w=183&h=183&c=7&r=0&o=5&dpr=2&pid=1.7',
                            }}
                            borderRadius={responsiveWidth(2)}
                          />
                        </View>
                        <View
                          style={{
                            flex: 2,
                            // justifyContent: '',
                            // flexDirection: 'row',
                            // alignItems: 'center',
                            // height: responsiveHeight(16),
                          }}>
                          <View style={{marginTop: responsiveHeight(1.50)}}>
                            <Text
                              style={{
                                fontSize: responsiveFontSize(1.95),
                                // height: responsiveHeight(3.2),
                                color: 'black',
                                fontWeight: '700',
                              }}>
                              {item?.title}
                            </Text>
                            <Text
                            numberOfLines={2}
                              style={{
                                fontWeight: '500',
                                fontSize: responsiveFontSize(1.85),
                                color: 'grey',
                              }}>
                              {item?.description}
                            </Text>
                          </View>
                          <Rating
                            type="custom"
                            imageSize={19}
                            ratingCount={5}
                            style={{alignSelf: 'flex-end',}}
                            isDisabled
                            startingValue={item?.rating}
                          />
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              {/* <View style={{height: "0.1%"}}/> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
  },
  title: {
    //   fontSize: 16,
    // ...Fonts.h3,
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
  tinyLogo2: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    marginTop: responsiveHeight(0.7),
  },
});
