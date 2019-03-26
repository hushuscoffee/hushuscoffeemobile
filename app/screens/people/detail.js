import React, { Component } from "react";
import { Image, Dimensions } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  H3,
  H2,
  Text,
  Card,
  View
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;

class DetailPeople extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="navigate" style={{ color: "black" }} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>People</Title>
          </Body>
          <Right>
            <Button transparent>
              {/* <Icon name='search' style={{color:"black"}}/> */}
            </Button>
            <Button transparent>
              {/* <Icon name='more' style={{color:"black"}}/> */}
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
            <Grid>
              <Col style={styles.colImage}>
                {/* <Image source={people} style={styles.imageDetail} /> */}
                <H2 style={{ marginTop: 15, fontWeight: "bold" }}>
                  Amendo Mariesto Sitinjak
                </H2>
                <H3 style={styles.mt}>Writer and Traveler</H3>
                <Text style={styles.mt}>Indonesia, Laguboti</Text>
                <Text style={styles.mt}>
                  +62 821-6587-7722 - amendo_s@del.ac.id
                </Text>
                <Text style={styles.mt}>https://medium.com/@amendo_s </Text>
                <Text>https://www.linkedin.com/amendo-sitinjak</Text>
              </Col>
            </Grid>
          </Card>

          <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
            <Grid>
              <Col>
                <Text style={{ textAlign: "center" }}>
                  I grew up in an entrepreneurial family and passionate with
                  everything about coffee, cause i see that enjoying coffee is
                  the same as enjoying art. the taste, the aroma, and the latte
                  art are truly a divine combination!
                </Text>
              </Col>
            </Grid>
          </Card>

          <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
            <Grid>
              <Col>
                <H3 style={{ textAlign: "center" }}>Achievements</H3>
              </Col>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>
                  U.S.COFFEECHAMPS– PRELIMINARIES
                </Text>
              </Row>
              <Row>
                <Text>
                  http: //www.uscoffeechampionships.org/preliminaries/ Specialty
                  Coffee Association
                </Text>
              </Row>
              <Row>
                <Text>January 2018</Text>
              </Row>
              <Row>
                <Text>I was the 1 st winner</Text>
              </Row>

              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>
                  INDONESIA BARISTA CHAMPIONSHIP 2018
                </Text>
              </Row>
              <Row>
                <Text>
                  http:
                  //indonesiacoffeeevents.com/hasil-kompetisi/ibc2018-elimination-result/
                  Barista Guild Indonesia
                </Text>
              </Row>
              <Row>
                <Text>January 2018</Text>
              </Row>
              <Row>
                <Text>2nd East</Text>
              </Row>
              <View style={styles.line} />
            </Grid>
          </Card>

          <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
            <Grid>
              <Col>
                <H3 style={{ textAlign: "center" }}>Experience</H3>
              </Col>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Coordinator Barista</Text>
              </Row>
              <Row>
                <Text>Warunk Upnormal, Greater Jakarta Area, Indonesia</Text>
              </Row>
              <Row>
                <Text>https: //www.warunkupnormal.com/</Text>
              </Row>
              <Row>
                <Text>April 2017 - June 2017</Text>
              </Row>
              <Row>
                <Text>
                  Memastikan bahwa produk yang akan disajikan selalu higienis,
                  dalam keadaan baik dan menarik serta melayani pelanggan dengan
                  ramah, sopan & berbicara dengan jelas
                </Text>
              </Row>

              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Barista</Text>
              </Row>
              <Row>
                <Text>
                  PappaRich Group, Selayang Mall, Kuala Lumpur, Malaysia
                </Text>
              </Row>
              <Row>
                <Text>http: //www.papparich.com.my</Text>
              </Row>
              <Row>
                <Text>July 2017 - August 2017</Text>
              </Row>
              <Row>
                <Text>Menyediakan produk ke pelanggan dalam keadaan baik</Text>
              </Row>
              <View style={styles.line} />
            </Grid>
          </Card>

          <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
            <Grid>
              <Col>
                <H3 style={{ textAlign: "center" }}>Skill</H3>
              </Col>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Testing</Text>
              </Row>
              <Row>
                <Text>Intermediate proficiency</Text>
              </Row>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Programming</Text>
              </Row>
              <Row>
                <Text>Intermediate proficiency</Text>
              </Row>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Deploy</Text>
              </Row>
              <Row>
                <Text>Advanced proficiency</Text>
              </Row>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Analysis</Text>
              </Row>
              <Row>
                <Text>Advanced proficiency</Text>
              </Row>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Web Development</Text>
              </Row>
              <Row>
                <Text>Professional proficiency</Text>
              </Row>
              <View style={styles.line} />
            </Grid>
          </Card>

          <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
            <Grid>
              <Col>
                <H3 style={{ textAlign: "center" }}>Languange</H3>
              </Col>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>English</Text>
              </Row>
              <Row>
                <Text>Full professional proficiency</Text>
              </Row>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Indonesia</Text>
              </Row>
              <Row>
                <Text>Native or bilingual proficiency</Text>
              </Row>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Batak</Text>
              </Row>
              <Row>
                <Text>Native or bilingual proficiency</Text>
              </Row>
              <View style={styles.line} />
              <Row style={styles.mt}>
                <Text style={{ fontWeight: "bold" }}>Mandarin</Text>
              </Row>
              <Row>
                <Text>Limited working proficiency</Text>
              </Row>
              <View style={styles.line} />
            </Grid>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default DetailPeople;
