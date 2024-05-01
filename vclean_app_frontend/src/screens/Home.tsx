import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {Icon} from '@rneui/themed';
import {Color, FontFamily} from '../components/GlobalStyles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('.././assets/images/homeImage.png')}
        style={styles.backImage}
      />
      <SafeAreaView style={styles.SafeAreacontainer}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.slider}>
            <Image
              source={require('.././assets/images/recycling.jpg')}
              style={styles.heroPhoto}
            />
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={styles.iconCover}>
                <Image source={require('.././assets/images/dustbin.png')} />
              </View>
              <Text style={styles.iconText}>Dustbin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={styles.iconCover}>
                <Image source={require('.././assets/images/report.png')} />
              </View>
              <Text style={styles.iconText}>Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={styles.iconCover}>
                <Image source={require('.././assets/images/mapIcon.png')} />
              </View>
              <Text style={styles.iconText}>Drop Point</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={styles.iconCover}>
                <Image source={require('.././assets/images/truck.png')} />
              </View>
              <Text style={styles.iconText}>Pick Up</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.larticale}>Latest Articles</Text>

            {Array.from({length: 5}, (_, index) => (
              <Articles key={index} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

function Articles() {
  return (
    <TouchableOpacity style={styles.articlesContainer}>
      <View style={styles.aConatinarLeft}>
        <Image
          source={require('.././assets/images/185704.jpg')}
          style={{height: '100%', width: 175, resizeMode: 'cover'}}
        />
      </View>
      <View style={styles.aConatinarRight}>
        <View style={styles.catogoryTag}>
          <Text style={styles.catogoryTagText}>Blog and Articles</Text>
        </View>

        <Text style={styles.HeadingText}>
          Recycling: Waste Exchange Solution for Blessing
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon color="#D9D9D9" name={'calendar'} type="octicon" size={18} />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: FontFamily.poppinsR,
              fontSize: 12,
            }}>
            25 July 2024
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bone,
    alignItems: 'center',
  },
  backImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
  },

  SafeAreacontainer: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    // backgroundColor: 'pink',
    padding: 10,
  },

  slider: {
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },

  heroPhoto: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },

  iconContainer: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: Color.grey,
    elevation: 20,
    shadowColor: Color.grey,
    width: 350,
    height: 120,
    marginTop: 15,
  },

  iconCover: {
    width: 60,
    height: 60,
    backgroundColor: '#daf8e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  iconText: {
    fontFamily: FontFamily.poppinsR,
    fontSize: 12,
    marginTop: 3,
    fontWeight: 'bold',
    color: Color.softBlack,
  },
  larticale: {
    fontSize: 15,
    marginTop: 20,
    fontFamily: FontFamily.poppinsM,
    color: Color.darkGrey,
    marginBottom: 10,
    marginLeft: 5,
  },

  articlesContainer: {
    width: 350,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 20,
    shadowColor: Color.grey,
    marginBottom: 10,
  },

  aConatinarLeft: {
    flex: 0.5,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  aConatinarRight: {
    backgroundColor: Color.white,
    flex: 0.5,
    height: 146,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

    padding: 15,
  },

  catogoryTag: {
    backgroundColor: '#daf8e6',
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 5,
    width: 125,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  catogoryTagText: {
    color: Color.tertiaryGreen,
    fontFamily: FontFamily.poppinsM,
    fontSize: 12,
  },
  HeadingText: {
    color: Color.softBlack,
    fontFamily: FontFamily.poppinsSB,
    fontSize: 15,
  },
});

export default Home;
