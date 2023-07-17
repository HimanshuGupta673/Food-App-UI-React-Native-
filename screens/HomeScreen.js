import { View, Text, StyleSheet, ScrollView, TextInput, SafeAreaView ,Pressable,Image} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Categories from '../components/Categories';
import ItemComponents from '../components/ItemComponents';
import HotelsData from '../data/HotelsData';
import Hotels from '../components/Hotels';
export default function HomeScreen() {
    const data = HotelsData;
    return (
        <ScrollView style={{backgroundColor:"#F0F0F0"}} >
            <View style={{margin:5}}>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#D8D8D8',padding:1,borderRadius:6,margin:2}}> 
                <FontAwesome5 style={styles.whiteColor} name={'search'} size={20}></FontAwesome5>
                <TextInput style={{ paddingLeft: 5 ,color:'black'}} placeholderTextColor='grey' placeholder='Restaurant name, cuisines, or a dish' />
            </View>
            <Categories/>

            {/* banners */}
            <Pressable style={{ marginLeft: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
                  }}
                />
              </View>
            </Pressable>

            <ItemComponents/>

           {data.map((item,index)=> <Hotels key={index} restaurants={item}/>)}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    whiteColor: {
        color: '#E52B50',
        marginLeft:6
    },
    image:{
        width:150,
        height:100,
        borderRadius:7,
        marginHorizontal:8,
        marginTop:4
    }
});