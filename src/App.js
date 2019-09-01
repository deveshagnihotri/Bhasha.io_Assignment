import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: "Winter Is Coming",
      spiltWords: [],
      afterWord: [],
      len: 0
    };
  }

  componentDidMount = () => {
    const spiltWords = this.shuffule(this.state.inputString.split(" "));
    this.setState({
      spiltWords
    });
  };

  shuffule = arr => {
    var i = arr.length;
    if (i === 0) {
      return arr;
    }
    while (--i) {
      var j = Math.floor(Math.random() * (i + 1));
      var a = arr[i];
      var b = arr[j];
      arr[i] = b;
      arr[j] = a;
    }
    return arr;
  };

  removeItem = item => {
    const update = this.state.spiltWords.filter(data => data !== item);
    this.setState({
      spiltWords: update
    });
  };

  moveItem = item => {
    const afterWord = this.state.afterWord;
    afterWord.push(item);
    this.setState({
      afterWord: afterWord
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first_container}>
          <View>
            <Text style={styles.textContainer}>Pick The Word In Order</Text>
          </View>
        </View>
        <View style={styles.second_container}>
          <View>
            <Text style={styles.textContainer}>{this.state.inputString}</Text>
          </View>
        </View>
        <View style={styles.third_container}>
          <View style={{ flexDirection: "row", margin: 20 }}>
            {this.state.afterWord.map((item, key) => (
              <Text key={key} style={styles.text1Container}>
                {item}
              </Text>
            ))}
          </View>
        </View>

        {this.state.spiltWords.length !== 0 ? (
          <View style={styles.fifth_container}>
            <View style={{ flexDirection: "row", margin: 20 }}>
              {this.state.spiltWords.map((item, key) => (
                <Text
                  key={key}
                  style={styles.text1Container}
                  onPress={() => {
                    this.moveItem(item);
                    this.removeItem(item);
                  }}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.fourth_container}>
            <View style={styles.bottomContainer}>
              {this.state.inputString === this.state.afterWord.join(" ") ? (
                <Text style={styles.textButton_Container}> Correct </Text>
              ) : (
                <Text style={styles.textButton_Container}>
                  Wrong! Do It Again
                </Text>
              )}
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    height: 500,
    width: 300,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 20
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "center",
    fontSize: 20,
    padding: 20,
    marginTop: 10
  },
  text1Container: {
    backgroundColor: "#2196F3",
    flex: 1,
    paddingLeft: 10,
    justifyContent: "center",
    fontSize: 20,
    padding: 20,
    margin: 10,
    borderRadius: 5
  },
  first_container: {
    height: 60,
    backgroundColor: "#BDBDBD",
    width: 290,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2
  },
  second_container: {
    height: 60,
    backgroundColor: "#BDBDBD",
    width: 290,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2
  },
  third_container: {
    height: 100,
    backgroundColor: "#BDBDBD",
    width: 290,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2
  },
  fourth_container: {
    height: 60,
    borderBottomWidth: 2,
    backgroundColor: "#9E9E9E",
    width: 290,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2
  },
  fifth_container: {
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 2,
    width: 290,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2
  },
  textButton_Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  bottomContainer: {
    height: 40,
    backgroundColor: "#4CAF50",
    width: 150,
    alignItems: "center",
    borderRadius: 5
  }
});

export default App;
