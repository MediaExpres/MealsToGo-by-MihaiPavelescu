import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)``;

const RestaurantCardCover = styled(Card.Cover)``;

const Title = styled.Text`
  padding: 16px;
  color: red;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Unrestaurant",
    icon,
    photos = ["https://mediaexpres.ro/admin2/Images/19112.R.jpg"],
    address = "100 numarul paispe pe strada patru",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
