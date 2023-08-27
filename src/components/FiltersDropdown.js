/* eslint-disable prettier/prettier */
import React, {Children, memo, useCallback, useState} from 'react';
import {Platform, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {
    responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import UpArrow from '../assets/UpArrow';
import DownArrow from '../assets/DownArrow';

const FiltersDropdown = ({children, dropDownTitle, RenderChips}) => {
  // console.log(children);
  const [expanded, setExpanded] = useState(false);
  return (
    <Collapse
      style={{marginBottom: responsiveHeight(3),marginHorizontal: responsiveWidth(5)}}
      isExpanded={expanded}
      onToggle={e => setExpanded(!expanded)}>
      <CollapseHeader>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              
            }}>
            <Text style={{fontSize: responsiveFontSize(2.10), color: 'black'}}>
              {dropDownTitle}
            </Text>
            {expanded ? <UpArrow /> : <DownArrow />}
          </View>
          {RenderChips}
        </View>
      </CollapseHeader>
      <CollapseBody>{children}</CollapseBody>
    </Collapse>
  );
};

export default FiltersDropdown;

const styles = StyleSheet.create({});
