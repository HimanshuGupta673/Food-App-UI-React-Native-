import React, { Component } from 'react'
import { StyleSheet, Text, View ,Pressable,Image} from 'react-native'

export default class ItemComponents extends Component {
  render() {
    return (
      <View>
        <Text style={{color:'black',fontSize:18,fontWeight:'bold',padding:4,marginLeft:4,marginVertical:6}}>Eat what makes you happy</Text>

        <Pressable>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 7,
                }}
              >
                <View style={{ margin: 6 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "gray",
                      margin: 8,
                      textAlign: "center",
                    }}
                  >
                    Thalis
                  </Text>
                </View>

                <View style={{ margin: 6 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "gray",
                        margin: 8,
                        textAlign: "center",
                    }}
                  >
                    Pizzas
                  </Text>
                </View>

                <View style={{ margin: 6 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-SsbTrLAm9o9ABakjoILX9G5LIDNJnVwvA&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "gray",
                      margin: 8,
                      textAlign: "center",
                    }}
                  >
                    Burger
                  </Text>
                </View>

                <View style={{ margin: 6 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "gray",
                        margin: 8,
                        textAlign: "center",
                    }}
                  >
                    Dosas
                  </Text>
                </View>
              </View>
            </Pressable>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    MiddleImage:{
        width:70,
        height:70,
        borderRadius:35,
        resizeMode:"cover",
      }
})
