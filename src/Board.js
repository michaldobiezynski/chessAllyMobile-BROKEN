import React, { useCallback, useRef, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Chess } from "chess.js";

import Background from "./Background";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
});

const Board = () => {
  const chess = new Chess();
  const [state, setState] = useState({
    player: "w",
    board: chess.board(),
  });
  const onTurn = useCallback(() => {
    setState({
      player: state.player === "w" ? "b" : "w",
      board: chess.board(),
    });
  }, [chess, state.player]);
  return (
    <View style={styles.container}>
      <Background />
    </View>
  );
};

export default Board;
