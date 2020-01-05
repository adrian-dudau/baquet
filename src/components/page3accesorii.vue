
<template>

  <v-container fluid>
    <img src="../../resources/page_1/bkg_1.png" width=25%>
    <h1>Sugestii Accesorii</h1>

      <v-container fluid
         v-for="category in categories"
          :key="category.id">

        <h2>{{category.title}}</h2>

        <v-row dense>
        <v-col
          v-for="card in category.cards"
          :key="card.id"
          :cols=4
        >
          <v-card height="100%">
            <v-img
              :src="card.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-text>
              {{card.description}}
            </v-card-text>

            <v-row dense>
              <v-col></v-col>
              <v-col class="align-center">
                <v-icon color="green" >mdi-cash</v-icon>
                {{card.price}}
              </v-col>
              <v-col></v-col>
            </v-row>
            <v-row dense>
              <v-col class="align-end">
              <v-card-actions>

                <v-spacer></v-spacer>

                <v-btn
                  text
                  dark
                  color="deep-purple accent-4"
                  :href="card.link"
                >
                  Comanda
                </v-btn>

                <v-btn dark icon @click="card.clicked = !card.clicked">
                  <v-icon v-if="card.clicked" color="red" >mdi-heart</v-icon>
                  <v-icon v-if="!card.clicked" color="grey">mdi-heart</v-icon>
                </v-btn>

              </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        id: 1,
        title: 'Accesorii Fete',
        cards: [
          {
            id: 1,
            clicked: false,
            title: 'Sacou slim fit cu aspect texturat Basilia',
            description: '',
            price: '449,99',
            link: 'https://www.fashiondays.ro/p/sacou-slim-fit-cu-aspect-texturat-brasilia-barbati-mango-p2431886-2/',
            img: 'https://fdcdn.akamaized.net/m/780x1132/products/27602/27601484/images/res_9bbd83b3a69263b8b4b0770af819ad8b.jpg?s=v6Bz2dTO5UbJ'
          },
          {
            id: 2,
            title: 'Rochie Ginette',
            clicked: true,
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          },
          {
            id: 3,
            title: 'Rochie Ginette',
            clicked: true,
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          }
        ]
      },
      {
        id: 2,
        title: 'Accesorii Baieti',
        cards: [
          {
            id: 1,
            clicked: false,
            title: 'Sacou slim fit cu aspect texturat Basilia',
            description: '',
            price: '449,99',
            link: 'https://www.fashiondays.ro/p/sacou-slim-fit-cu-aspect-texturat-brasilia-barbati-mango-p2431886-2/',
            img: 'https://fdcdn.akamaized.net/m/780x1132/products/27602/27601484/images/res_9bbd83b3a69263b8b4b0770af819ad8b.jpg?s=v6Bz2dTO5UbJ'
          },
          {
            id: 2,
            title: 'Rochie Ginette',
            clicked: true,
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          },
          {
            id: 3,
            title: 'Rochie Ginette',
            clicked: true,
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          }
        ]
      },
      {
        id: 3,
        title: 'Pantofi Fete',
        cards: [
          {
            id: 1,
            clicked: false,
            title: 'Sacou slim fit cu aspect texturat Basilia',
            description: '',
            price: '449,99',
            link: 'https://www.fashiondays.ro/p/sacou-slim-fit-cu-aspect-texturat-brasilia-barbati-mango-p2431886-2/',
            img: 'https://fdcdn.akamaized.net/m/780x1132/products/27602/27601484/images/res_9bbd83b3a69263b8b4b0770af819ad8b.jpg?s=v6Bz2dTO5UbJ'
          },
          {
            id: 2,
            title: 'Rochie Ginette',
            clicked: true,
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          },
          {
            id: 3,
            title: 'Rochie Ginette',
            clicked: true,
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          }
        ]
      },
      {
        id: 4,
        title: 'Pantofi Baieti',
        cards: [
          {
            id: 1,
            clicked: false,
            title: 'Sacou slim fit cu aspect texturat Basilia',
            description: '',
            price: '449,99',
            link: 'https://www.fashiondays.ro/p/sacou-slim-fit-cu-aspect-texturat-brasilia-barbati-mango-p2431886-2/',
            img: 'https://fdcdn.akamaized.net/m/780x1132/products/27602/27601484/images/res_9bbd83b3a69263b8b4b0770af819ad8b.jpg?s=v6Bz2dTO5UbJ'
          },
          {
            id: 2,
            title: 'Rochie Ginette',
            clicked: true,
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          },
          {
            id: 3,
            title: 'Rochie Ginette',
            clicked: true,
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          }
        ]
      }
    ]
  })
}
</script>
