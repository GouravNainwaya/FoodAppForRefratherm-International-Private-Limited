import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps  } from '@react-navigation/native-stack';

type RootStackParamList = {
  DetailsScreen: { item: Item };
};

type FoodCardProps = {
  item: Item;
};

type Item = {
  title: string;
  description: string;
  image: string;
};

const FoodCardTwo: React.FC<FoodCardProps> = ({ item }) => {
  const navigation = useNavigation<NativeStackScreenProps <RootStackParamList>>();

  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('DetailsScreen', { item: item })
        }>
        <View
          style={{
            backgroundColor: '#ffffffff',
            elevation: 3,
            borderRadius: responsiveWidth(1.5),
            width: responsiveWidth(91),
          }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item?.image,
            }}
          />
          <View style={{ marginHorizontal: responsiveWidth(3) }}>
            <Text numberOfLines={2} style={styles.title}>
              {item?.title}
            </Text>

            <Text
              numberOfLines={2}
              style={[
                styles.title,
                { fontSize: responsiveFontSize(2) },
              ]}>
              {item?.description}
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
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

type FoodCardListProps = {
  list: Item[];
};

const FoodCard: React.FC<FoodCardListProps> = ({ list }) => {
  return (
    <FlatList
      data={list}
      renderItem={({ item, index }) => (
        <FoodCardTwo key={index} item={item} />
      )}
      keyExtractor={(item, index) => index.toString()}
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
    color: '#74747B',
    fontSize: responsiveFontSize(2.1),
  },
  tinyLogo: {
    height: responsiveHeight(30),
    width: responsiveWidth(91),
  },
});
