import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useCallback, useRef, useMemo, useEffect} from 'react';
import lists from '../../Data';
import FoodCard from '../../components/FoodCard';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Search from '../../assets/Search';
import FiltersLogo from '../../assets/Filter';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import FiltersDropdown from '../../components/FiltersDropdown';
import {Rating} from 'react-native-ratings';
import MultiSelect from 'react-native-multiple-select';
import {SquishButton} from 'react-native-squish-button';

const RenderHeader = ({
  setlist,
  setShowBottomSheet,
  list,
  FilteredArray,
}) => {
  const [text, onChangeText] = React.useState('');

  const handleSearch = text => {
    onChangeText(text);
    if (text?.length) {
      const filtered = FilteredArray.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      );
      setlist(filtered);
    } else {
      // If the search query is empty, restore the original list
      setlist(FilteredArray);
    }
  };

  return (
    <View style={{zIndex: 1, width: '90%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // paddingRight: 10,
          // height: responsiveHeight(6),
          backgroundColor: '#ffffff',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Search height={20} width={20} />
          <TextInput
            style={{color: 'black'}}
            onChangeText={handleSearch}
            value={text}
            placeholderTextColor="#94939C"
            placeholder="Search Here"
          />
        </View>
        <FiltersLogo
          onPress={() => setShowBottomSheet(v => (v == -1 ? 1 : -1))}
        />
      </View>
    </View>
  );
};

const Specialitiesitems = [
  {
    id: 'Ondo',
    name: 'Japanese',
  },
  {
    name: 'Italian',
    value: 1,
  },
  {
    name: 'Asian',
    value: 2,
  },
  {
    id: 'Ondo',
    name: 'Vegetarian',
  },
  {
    name: 'Thai',
    value: 1,
  },
  {
    name: 'Vietnamese',
    value: 2,
  },
  {
    name: 'American',
    value: 2,
  },
];

const Home = () => {
  // variables
  const [list, setlist] = useState(lists);
  const [selectedRatings, setSelectedRatings] = useState(0);
  const [selectedSpecialities, setselectedSpecialities] = useState([]);
  const [FilteredArray, setFilteredArray] = useState(list);
  const [
    handleVegetarianAndNonVegetarian,
    setHandleVegetarianAndNonVegetarian,
  ] = useState('Both');
  const [showBottomSheet, setShowBottomSheet] = useState(-1);
  const multiSelectRef = useRef(null);

  useEffect(() => {
    setFilteredArray(list)
  }, [FilteredArray])

  const onSelectedItemsChange = selectedItems => {
    console.log(selectedItems);
    setselectedSpecialities(selectedItems);
  };

  const toggleVegetarian = () => {
    setHandleVegetarianAndNonVegetarian(!handleVegetarianAndNonVegetarian);
  };

  let filteredSpecialities = [];
  let filteredRatings = [];
  let filtredVegetarian = [];

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '40%'], []);

  const applyFiletrs = (selectedIngredients, ratings, vergetarian) => {
    let showIncredients = false;
    let showRatings = false;
    let showVergetarian = false;

    if (selectedIngredients?.length) {
      filteredSpecialities = lists.filter(item => {
        return selectedIngredients.some(ingredient =>
          item.specialties.includes(ingredient),
        ); // if you  want all incredents so you can do every
      });
      showIncredients = true;
    }

    if (ratings) {
      filteredRatings = lists.filter(item => {
        return Math?.round(item?.rating) == ratings;
      });
      showRatings = true;
    }

    if (vergetarian != 'Both') {
      filtredVegetarian = lists.filter(item => {
        return item?.isVegetarian == vergetarian;
      });
      showVergetarian = true;
    }

    if (showIncredients || showRatings || showVergetarian) {
      let temp = [
        ...filteredSpecialities,
        ...filteredRatings,
        ...filtredVegetarian,
      ];
      setlist(temp);
      setselectedSpecialities([]);
      setSelectedRatings(0);
      setHandleVegetarianAndNonVegetarian('Both');
      setFilteredArray(JSON.parse(JSON.stringify(list)))
      return;
    }
    setFilteredArray(JSON.parse(JSON.stringify(list)))
    setlist(lists);
  };

  const clearFilters = () => {
    setselectedSpecialities([]);
    setSelectedRatings(0);
    setHandleVegetarianAndNonVegetarian('Both');
    setlist(lists);
    setFilteredArray(JSON.parse(JSON.stringify(list)))
  };
  // console.log('listads', JSON.stringify(list));

  return (
    <View style={styles.container}>
      <RenderHeader
        setlist={setlist}
        list={list}
        setShowBottomSheet={setShowBottomSheet}
        FilteredArray={FilteredArray}
        setFilteredArray={setFilteredArray}
      />
      <FoodCard list={list} />
      <BottomSheet
        ref={bottomSheetRef}
        index={showBottomSheet}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        footerComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                clearFilters();
                bottomSheetRef?.current?.close();
              }}>
              <SquishButton
                width={190}
                height={90}
                color={'#4E5372'}
                squish={7}
                radius={5}
                text="Clear Filters"
                textStyle={{
                  color: 'white',
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                applyFiletrs(
                  selectedSpecialities,
                  selectedRatings,
                  handleVegetarianAndNonVegetarian,
                );
                bottomSheetRef?.current?.close();
              }}>
              <SquishButton
                width={190}
                height={90}
                color="#434534"
                squish={7}
                radius={5}
                text="Apply Filetrs"
                textStyle={{
                  color: 'white',
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
        onClose={() => setShowBottomSheet(-1)}>
        <BottomSheetScrollView>
          <FiltersDropdown dropDownTitle="Ratings">
            <Rating
              type="custom"
              imageSize={19}
              ratingCount={5}
              style={{paddingVertical: 10}}
              startingValue={0}
              onFinishRating={v => setSelectedRatings(v)}
            />
          </FiltersDropdown>
          <FiltersDropdown dropDownTitle="Specialties">
            <MultiSelect
              hideTag={true}
              items={Specialitiesitems}
              uniqueKey="name"
              ref={multiSelectRef}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedSpecialities}
              selectText="Pick Specialties"
              searchInputPlaceholderText="Search Items..."
              onChangeInput={text => console.log(text)}
              altFontFamily="ProximaNova-Light"
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{color: '#CCC'}}
              styleDropdownMenu={{
                backgroundColor: 'red',
                width: responsiveWidth(98),
              }}
              // submitButtonColor="#CCC"
              // submitButtonText="Submit"
            />
          </FiltersDropdown>
          <FiltersDropdown dropDownTitle="Choose Veg & Non Veg">
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={toggleVegetarian}>
                <SquishButton
                  width={190}
                  height={90}
                  color={
                    handleVegetarianAndNonVegetarian == 'Both'
                      ? 'white'
                      : handleVegetarianAndNonVegetarian
                      ? '#4E5372'
                      : 'white'
                  }
                  squish={7}
                  radius={5}
                  text="Vegetarian"
                  textStyle={{
                    color:
                      handleVegetarianAndNonVegetarian == 'Both'
                        ? 'black'
                        : handleVegetarianAndNonVegetarian
                        ? 'white'
                        : 'black',
                    fontFamily: 'Helvetica',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleVegetarian}>
                <SquishButton
                  width={190}
                  height={90}
                  // color="#4E5372"
                  color={
                    handleVegetarianAndNonVegetarian == 'Both'
                      ? 'white'
                      : !handleVegetarianAndNonVegetarian
                      ? '#4E5372'
                      : 'white'
                  }
                  squish={7}
                  radius={5}
                  text="Non Vegetarian"
                  textStyle={{
                    color:
                      handleVegetarianAndNonVegetarian == 'Both'
                        ? 'black'
                        : !handleVegetarianAndNonVegetarian
                        ? 'white'
                        : 'black',
                    fontFamily: 'Helvetica',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                />
              </TouchableOpacity>
            </View>
          </FiltersDropdown>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
  },
});
