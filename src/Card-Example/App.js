import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Accordion  } from "native-base";

export default class CardExample extends Component{
    render()
    {
        return(

            <Container>
                <Header/>
                <Content >
                      <Card>
                        <CardItem header>
<Text>Hometute Example Card</Text>
                        </CardItem>

                        <CardItem>
<Body>
    <Text>
    A card is a flexible and extensible content container.
     It includes options for headers and footers, a wide 
     variety of content, contextual background colors, and
      powerful display options. If you’re familiar with Boots
      trap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those 
    components is available as modifier classes for cards.
    </Text>
</Body>
                        </CardItem>
                        <CardItem footer>
<Text>All copy rights reserved</Text>
                        </CardItem>
                    </Card>
               
                    <Card>
                        <CardItem header>
<Text>Hometute Example Card</Text>
                        </CardItem>

                        <CardItem>
<Body>
    <Text>
    A card is a flexible and extensible content container.
     It includes options for headers and footers, a wide 
     variety of content, contextual background colors, and
      powerful display options. If you’re familiar with Boots
      trap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those 
    components is available as modifier classes for cards.
    </Text>
</Body>
                        </CardItem>
                        <CardItem footer>
<Text>All copy rights reserved</Text>
                        </CardItem>
                    </Card>
               


                    <Card>
                        <CardItem header>
<Text>Hometute Example Card</Text>
                        </CardItem>

                        <CardItem>
<Body>
    <Text>
    A card is a flexible and extensible content container.
     It includes options for headers and footers, a wide 
     variety of content, contextual background colors, and
      powerful display options. If you’re familiar with Boots
      trap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those 
    components is available as modifier classes for cards.
    </Text>
</Body>
                        </CardItem>
                        <CardItem footer>
<Text>All copy rights reserved</Text>
                        </CardItem>
                    </Card>
               
               </Content>
            </Container>
        
        
        
        );
    }
}