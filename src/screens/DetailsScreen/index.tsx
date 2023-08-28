import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Details: { item: Item };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Item = {
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  specialties: string[];
  isVegetarian: boolean;
  rating: number;
  reviews: Review[];
  similarItems: Item[];
};

type Review = {
  id: string;
  name: string;
  comment: string;
  rating: number;
};

type RenderHeadingProps = {
  text: string;
};

const RenderHeading: React.FC<RenderHeadingProps> = ({ text }) => {
  return (
    <Text
      style={{
        color: '#000000',
        fontWeight: '600',
        fontSize: responsiveFontSize(2.5),
        lineHeight: responsiveHeight(5.5),
      }}>
      {text}
    </Text>
  );
};

type DetailsScreenProps = {
  route: DetailsScreenRouteProp;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <View
            style={{
              backgroundColor: '#ffffffff',
              elevation: 1,
              borderRadius: responsiveWidth(1.5),
              width: responsiveWidth(91),
            }}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: item.image,
              }}
            />
            <View style={{ marginHorizontal: responsiveWidth(3) }}>
              <Text numberOfLines={2} style={styles.title}>
                {item.title}
              </Text>
              <Text
                numberOfLines={2}
                style={[styles.title, { fontSize: responsiveFontSize(2) }]}>
                {item.description}
              </Text>
              <View style={{ marginBottom: responsiveHeight(1) }}>
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
                    {item.ingredients.map((ingredient) => (
                      <Text key={ingredient} style={{ color: 'grey' }}>
                        {ingredient}
                      </Text>
                    ))}
                  </ScrollView>
                  <Rating
                    type="custom"
                    imageSize={19}
                    ratingCount={5}
                    style={{ paddingVertical: 10 }}
                    isDisabled
                    startingValue={item.rating}
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
                    {item.specialties.map((specialty) => (
                      <Text key={specialty} style={{ color: 'grey' }}>
                        {specialty}
                      </Text>
                    ))}
                  </ScrollView>
                </TouchableOpacity>
                {/* Specialities */}
                {/* Choose Veg & Non Veg */}
                <TouchableOpacity
                  disabled
                  style={{
                    flexDirection: 'row',
                    marginVertical: responsiveHeight(1),
                    justifyContent: 'space-between',
                  }}>
                  <ScrollView>
                    <RenderHeading text={'Check Veg & Non Veg'} />
                    <Text style={{ color: 'grey' }}>
                      Vegetarian: {item.isVegetarian ? 'true' : 'false'}
                    </Text>
                  </ScrollView>
                </TouchableOpacity>
                {/* Specialities */}
                {/* Ratings */}
                <ScrollView>
                  <RenderHeading text={'Reviews'} />
                  {item.reviews.map((review) => (
                    <View key={review.id}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                          <Image
                            style={styles.tinyLogo2}
                            source={{
                              uri:
                                'https://th.bing.com/th/id/OIP.GGWpKrO1aNTwObSGDWutWAHaHa?w=185&h=185&c=7&r=0&o=5&dpr=2&pid=1.7',
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
                          }}>
                          <View style={{}}>
                            <Text
                              style={{
                                fontSize: responsiveFontSize(1.95),
                                color: 'black',
                                fontWeight: '700',
                              }}>
                              {review.name}
                            </Text>
                            <Text
                              numberOfLines={2}
                              style={{
                                fontWeight: '500',
                                fontSize: responsiveFontSize(1.85),
                                color: 'grey',
                                width: responsiveWidth(50),
                              }}>
                              {review.comment}
                            </Text>
                          </View>
                          <View style={{ alignItems: 'center' }}>
                            <Rating
                              type="custom"
                              imageSize={16}
                              ratingCount={5}
                              style={{ width: responsiveWidth(20) }}
                              isDisabled
                              startingValue={review.rating}
                            />
                            <Text
                              numberOfLines={2}
                              style={{
                                fontSize: responsiveFontSize(1.7),
                                color: 'black',
                                fontWeight: '400',
                              }}>
                              Cerifyed user
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  ))}
                </ScrollView>
                {/* Ratings */}
                <RenderHeading text={'Similar Items'} />
                <ScrollView horizontal>
                  {item.similarItems.map((similarItem) => (
                    <View
                      key={similarItem.id}
                      style={{
                        flexDirection: 'row',
                        borderRadius: responsiveWidth(0.2),
                        alignItems: 'center',
                        elevation: 0.1,
                        marginHorizontal: responsiveHeight(1.3),
                        padding: 5,
                        borderColor: 'transparent',
                        width: responsiveWidth(60),
                        marginVertical: responsiveHeight(1),
                      }}>
                      <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image
                          style={{
                            height: responsiveWidth(16),
                            width: responsiveWidth(16),
                          }}
                          source={{
                            uri:
                              'https://th.bing.com/th/id/OIP.Y9Ggv_GmsWWjWgnvJOc1XQHaHa?w=183&h=183&c=7&r=0&o=5&dpr=2&pid=1.7',
                          }}
                          borderRadius={responsiveWidth(2)}
                        />
                      </View>
                      <View
                        style={{
                          flex: 2,
                        }}>
                        <View style={{ marginTop: responsiveHeight(1.5) }}>
                          <Text
                            style={{
                              fontSize: responsiveFontSize(1.95),
                              color: 'black',
                              fontWeight: '700',
                            }}>
                            {similarItem.title}
                          </Text>
                          <Text
                            numberOfLines={2}
                            style={{
                              fontWeight: '500',
                              fontSize: responsiveFontSize(1.85),
                              color: 'grey',
                            }}>
                            {similarItem.description}
                          </Text>
                        </View>
                        <Rating
                          type="custom"
                          imageSize={19}
                          ratingCount={5}
                          style={{ alignSelf: 'flex-end' }}
                          isDisabled
                          startingValue={similarItem.rating}
                        />
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>
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
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(2.3),
    maxWidth: responsiveWidth(90),
    color: 'black',
  },
  dividerText: {
    color: '#74747B',
    fontSize: responsiveFontSize(2.1),
  },
  tinyLogo: {
    height: responsiveHeight(30),
    width: responsiveWidth(91),
  },
  tinyLogo2: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    marginTop: responsiveHeight(0.7),
  },
});
