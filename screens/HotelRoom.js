import React, { useContext,useState } from 'react'
import { Text, View, SafeAreaView, Pressable, ScrollView ,StyleSheet} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import Bike from 'react-native-vector-icons/MaterialCommunityIcons'
import MotorCycle from 'react-native-vector-icons/Fontisto'
import { useNavigation,useRoute } from '@react-navigation/native'
import menuData from '../data/MenuData'
import Menu from '../components/Menu'
import { CartItems } from '../Context'
import ViewCart from '../components/ViewCart'
export default function HotelRoom() {
    const navigation = useNavigation()
    const route = useRoute()
    const {cart , setCart} = useContext(CartItems)
    const [additems, setAdditems] = useState({});


    return (
        <  >
            <ScrollView style={{backgroundColor:'white'}}>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Pressable
                        style={{
                            paddingHorizontal: 10,
                            width: 36,
                            height: 36,
                            marginLeft: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 18,
                            backgroundColor: "#141E30",
                            paddingLeft: 5,
                            marginTop:6
                        }}
                    >
                        <Icons
                            onPress={() => navigation.goBack()}
                            name="chevron-back-outline"
                            style={{
                                textAlign: "center",
                                color: "white",
                            }}
                            size={26}
                            color="white"
                        />
                    </Pressable>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 14,
                            marginTop:9
                        }}
                    >
                        <Icons
                            style={{ paddingHorizontal: 8 }}
                            name="camera-outline"
                            size={24}
                            color="black"
                        />
                        <Icons
                            style={{ paddingHorizontal: 5 }}
                            name="bookmark-outline"
                            size={24}
                            color="black"
                        />
                        <Bike
                            style={{ paddingHorizontal: 5 }}
                            name="share-outline"
                            size={24}
                            color="black"
                        />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <Text style={styles.name}>{route.params.name}</Text>
                        <Text style={styles.cuisines}>{route.params.cuisines}</Text>
                        <Text style={styles.adress}>{route.params.smalladress}</Text>
                    </View>
                    <Pressable style={styles.rightContainer}>
                        <Pressable
                            style={{
                                marginTop: 20,
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#3CB371",
                                padding: 4,
                                paddingHorizontal: 10,
                                borderTopLeftRadius: 4,
                                borderBottomLeftRadius: 5,
                            }}
                        >
                            <Text
                                style={{
                                    marginHorizontal: 3,
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                {route.params.aggregate_rating}
                            </Text>
                            <Icons name="star" size={20} color="white" />
                        </Pressable>
                        <Pressable
                            style={{
                                marginTop: 10,
                                backgroundColor: "#ee0979",
                                opacity:0.7,
                                paddingHorizontal: 10,
                                padding: 5,
                                borderTopLeftRadius: 4,
                                borderBottomLeftRadius: 5,
                            }}
                        >
                            <Text style={{ color: "white", fontWeight: "bold" }}>30</Text>
                            <Text style={{ color: "white", fontWeight: "bold" }}>PHOTOS</Text>
                        </Pressable>
                    </Pressable>
                </View>
                <View
                    style={{
                        padding: 3,
                        marginLeft: 6,
                        marginRight: 10,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            // paddingHorizontal: 10,
                        }}
                    >
                        <Bike
                            style={{
                                backgroundColor: "#E0E0E0",
                                borderRadius: 50,
                                padding: 8,
                            }}
                            name="bike-fast"
                            size={21}
                            color="gray"
                        />
                        <View>
                            <Text style={{ marginLeft: 8, fontSize: 14, color: "#707070" }}>
                                Mode
                            </Text>
                            <Text style={{ marginLeft: 8, fontSize: 13,color: "#707070" }}>Delivery</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 10,
                        }}
                    >
                        <Icons
                            style={{
                                backgroundColor: "#E0E0E0",
                                borderRadius: 50,
                                padding: 8,
                            }}
                            name="timer-outline"
                            size={21}
                            color="gray"
                        />
                        <View>
                            <View>
                                <Text style={{ marginLeft: 6, fontSize: 14, color: "#707070" }}>
                                    TIME
                                </Text>
                            </View>
                            <Text style={{ marginLeft: 6, fontSize: 13,color: "#707070" }}>
                                30 mins or free
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Bike
                            style={{
                                backgroundColor: "#E0E0E0",
                                borderRadius: 50,
                                padding: 8,
                            }}
                            name="brightness-percent"
                            size={21}
                            color="blue"
                        />
                        <View>
                            <View>
                                <Text style={{ marginLeft: 6, fontSize: 14, color: "#707070" }}>
                                    OFFERS
                                </Text>
                            </View>
                            <Text style={{ marginLeft: 6, fontSize: 13,color: "#707070" }}>View all</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 12,
                        marginRight: 12,
                        marginTop: 15,
                        backgroundColor: "#E0E0E0",
                        borderRadius: 10,
                    }}
                >
                    <MotorCycle
                        style={{ marginLeft: 7 }}
                        name="motorcycle"
                        size={22}
                        color="#505050"
                    />
                    <Text style={{ marginLeft: 9, fontSize: 15,color:'black' }}>
                        ₹30 additional distance fee
                    </Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "700" }}>Full Menu</Text>
                    <Text
                        style={{
                            backgroundColor: "#ff1493",
                            width: 74,
                            height: 3,
                            marginTop: 6,
                        }}
                    ></Text>
                </View>

                {menuData.map((item) => (
                <Menu
                    key={item.id}
                    cart={cart}
                    setCart={setCart}
                    menu={item}
                    additems={additems[item.id] || 0}
                    setAdditems={(value) => setAdditems((prevState) => ({ ...prevState, [item.id]: value }))}
                />
                ))}


            </ScrollView>
            <ViewCart
                restaurentName={route.params.name}
                latitude={route.params.latitude}
                longitude={route.params.longitude}
                setAdditems={setAdditems}
            />
        </>
    )
}
const styles = StyleSheet.create({
    name: {
      marginHorizontal: 10,
      paddingBottom: 6,
      fontSize: 20,
      fontWeight: "700",
      color:'black'
    },
    adress: {
      fontSize: 17,
      color: "gray",
      marginHorizontal: 10,
    },
    cuisines: {
      marginHorizontal: 10,
      paddingBottom: 6,
      fontSize: 17,
      color: "#303030",
    },
    rightContainer: {
      alignItems: "flex-end",
      marginBottom: 20,
    },
  });