import { View, Text, Modal, Pressable, ScrollView ,TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React, { useContext,useState,useEffect } from 'react'
import { CartItems } from '../Context'
import { useNavigation } from '@react-navigation/native'

export default function ViewCart(props) {

    const [modal, setModal] = useState(false);
    const {cart , setCart} = useContext(CartItems)
    const navigation = useNavigation();
    const {setAdditems} = props


    const total = cart.map((item) => Number(item.price.replace("₹", ""))).reduce((prev, curr) => prev + curr, 0);
    const deliveryCharge = Number(30);
    const donation = Number(3);
    const { restaurentName } = props;

    
    const onPress = () => {
        setModal(false);
    
        setAdditems(0)
        setCart([]);
        navigation.navigate("OrderData",{
          restaurentName: restaurentName
        });    
      }

    const checkOut = () => {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    backgroundColor: "rgba(0,0,0,0.7)",
                }}
            >
                <Pressable
                    onPress={() => setModal(false)}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <AntDesign
                        style={{ paddingBottom: 10 }}
                        name="closecircle"
                        size={34}
                        color="black"
                    />
                </Pressable>

                <View
                    style={{
                        backgroundColor: "white",
                        height: 500,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "red",
                            textAlign: "center",
                            paddingTop: 12,
                            fontSize: 17,
                            paddingBottom: 9,
                            borderBottomColor: "#C0C0C0",
                            borderBottomWidth: 0.8,
                        }}
                    >
                        {restaurentName}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            borderBottomColor: "#C0C0C0",
                            borderBottomWidth: 0.8,
                            padding: 10,
                        }}
                    >
                        <MaterialIcons style={{}} name="timer" size={24} color="green" />
                        <Text
                            style={{
                                color: "black",
                                fontSize: 17,
                                fontWeight: "600",
                                marginLeft: 6,
                            }}
                        >
                            Delivery in 30 mins
                        </Text>
                    </View>
                    <ScrollView>
                        <View
                            style={{
                                borderBottomColor: "#D0D0D0",
                                borderBottomWidth: 1,
                            }}
                        />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, paddingBottom: 4,color:'black' }}>Offers</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons
                                    name="brightness-percent"
                                    size={24}
                                    color="blue"
                                />
                                <Text style={{ marginLeft: 10,color:'black' }}>Select a Promo code</Text>
                            </View>
                        </View>

                        <View
                            style={{
                                borderBottomColor: "#D0D0D0",
                                borderBottomWidth: 1,
                            }}
                        />

                        <View style={{ padding: 10 }}>
                            <Text
                                style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 10,color:'black' }}
                            >
                                Climate conscious delivery
                            </Text>
                            <View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <MaterialCommunityIcons
                                        name="food-fork-drink"
                                        size={27}
                                        color="#ADFF2F"
                                    />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text
                                            style={{
                                                color: "#228B22",
                                                fontWeight: "600",
                                                fontSize: 15,
                                            }}
                                        >
                                            Dont send cultery, tissues and straws
                                        </Text>
                                        <Text
                                            style={{
                                                color: "black",
                                                fontWeight: "600",
                                                fontSize: 14,
                                            }}
                                        >
                                            Thank you for caring about the environment
                                        </Text>
                                    </View>
                                    <Pressable>
                                        <AntDesign
                                            style={{ marginLeft: 10 }}
                                            name="checksquare"
                                            size={24}
                                            color="green"
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                borderBottomColor: "#D0D0D0",
                                borderBottomWidth: 0.8,
                            }}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                padding: 10,
                            }}
                        >
                            <FontAwesome5 name="leaf" size={24} color="#20B2AA" />
                            <Text style={{ marginLeft: 10, fontSize: 15,color:'black', paddingRight:8 }}>
                                We fund environmental projects to offset carbon footprint of
                                our deliveries
                            </Text>
                        </View>

                        <View
                            style={{
                                borderBottomColor: "#D0D0D0",
                                borderBottomWidth: 3,
                            }}
                        />

                        <View style={{ backgroundColor: "#FEF5E7" }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: 10,
                                }}
                            >
                                <Text style={{color:'black'}}>Item total</Text>
                                <Text style={{color:'black'}}>
                                    {" ₹"}
                                    {total}
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: 10,
                                }}
                            >
                                <Text style={{color:'black'}}>Delivery charge upto 1 km</Text>
                                <Text style={{color:'black'}} >
                                    {" ₹"}
                                    {deliveryCharge}
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: 10,
                                }}
                            >
                                <Text style={{color:'black'}}>Donate ₹3 to Feeding India </Text>
                                <Text style={{color:'black'}}>
                                    {" ₹"}
                                    {donation}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                borderBottomColor: "#D0D0D0",
                                borderBottomWidth: 3,
                            }}
                        />
                    </ScrollView>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingVertical: 14,
                            padding: 10,
                            shadowColor: "#686868",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 1,
                            shadowRadius: 2,
                            elevation: 5,
                        }}
                    >
                        <Text
                            style={{
                                color: "red",
                                fontWeight: "bold",
                                paddingBottom: 3,
                                fontSize: 17,
                            }}
                        >
                            GrandTotal
                        </Text>
                        <Text style={{ color: "red", fontSize: 17, fontWeight: "600" }}>
                            {"₹"}
                            {total + donation + deliveryCharge}
                        </Text>
                    </View>
                    <TouchableOpacity
                    onPress={onPress}
                        style={{
                            backgroundColor: "white",
                            padding: 10,
                            alignItems: "center",
                            backgroundColor: "#e52d27",

                        }}
                        activeOpacity={0.9}
                    >
                        <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <>
            <Modal
                animationType="slide"
                visible={modal}
                transparent={true}
                onCloseRequest={() => setModal(false)}
            >
                {checkOut()}
            </Modal>
            <View>
                {total === 0 ? null : (
                    <Pressable
                        style={{
                            position: "absolute",
                            bottom: 30,
                            left: 100,
                            borderRadius: 6,
                            backgroundColor: "#FF3366",
                        }}
                        onPress={() => setModal(true)}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 18,
                                textAlign: "center",
                                padding: 10,
                                width: 180,
                            }}
                        >
                            View Cart • {"₹"}
                            {total}
                        </Text>
                    </Pressable>

                )}
            </View>
        </>
    )
}