import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import IconButton from './IconButton';
import SearchInput from './SearchInput';
import Avatar from './Avatar';
type Props = {};

const ListHeader: FC<Props> = ({}) => {
  return (
    <View style={[styles.container]}>
                  <View style={{flexDirection:"row",justifyContent:"space-between"}} >
                <View>
                   <Text style={styles.header}>Let's explore</Text>
                   <Text style={styles.subTitle}>The world !</Text>
                </View>
               <Avatar />
           </View>
     
      <View style={[styles.searchBar]}>
        <SearchInput />
     
      </View>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#545264',
  },
  subTitle: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: '600',
    color: '#545264',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});