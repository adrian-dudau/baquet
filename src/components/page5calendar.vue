<template>

  <v-container fluid>
    <img src="../../resources/page_1/bkg_1.png" width=25%>
    <h1> Coafuri si Machiaj </h1>

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

            <v-card-actions>

              <v-spacer></v-spacer>

              <v-btn dark icon @click="card.clicked = !card.clicked">
                <v-icon v-if="card.clicked" color="red" >mdi-heart</v-icon>
                <v-icon v-if="!card.clicked" color="grey">mdi-heart</v-icon>
              </v-btn>

            </v-card-actions>
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
        title: 'Coafuri',
        cards: [
          {
            id: 1,
            clicked: true,
            title: 'Coafura par lung cu impletitura',
            img: 'https://img.digitalag.ro/?u=https%3A%2F%2Fa1.ro%2Fuploads%2Fmodules%2Fnews%2F0%2F2019%2F5%2F15%2F866603%2F1557912366b03ce848.jpg'
          },
          {
            id: 2,
            clicked: false,
            title: 'Coc elegant lejer',
            img: 'http://www.imbracamintedama.com/wp-content/uploads/2016/08/coafuri-par-lung10.jpg'
          },
          {
            id: 3,
            clicked: true,
            title: 'Coc impletit',
            img: 'https://suntfericita.manager.ro/dbimg/images/braid_final.jpg'
          },
          {
            id: 4,
            clicked: false,
            title: 'Par prins cu impletitura',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJmVjw9YrN3zrfbrvHgrQ6ET-1i9FqJBBz2Kfv2z95f4KCb1Qa'
          },
          {
            id: 5,
            clicked: true,
            title: 'Bucle par scurt',
            img: 'https://i.pinimg.com/originals/95/e7/db/95e7db331ec533d4af1ad3ba047784d9.jpg'
          },
          {
            id: 6,
            clicked: true,
            title: 'Coafura greceasca',
            img: 'http://www.hotelalgiardinetto.it/wp-content/uploads/2019/06/grecheskaya-pricheska-na-srednie-volosi-kak-sdelat-poshagovo-s-foto.jpg'
          }
        ]
      },
      {
        id: 1,
        title: 'Machiaj',
        cards: [
          {
            id: 1,
            clicked: true,
            title: 'Machiaj de seara cu negru si alb',
            img: 'https://i2.wp.com/www.ticataca.ro/wp-content/uploads/2018/03/e9132b117a0433e8c56f9b84accb66ee.jpg?fit=564%2C564&ssl=1'
          },
          {
            id: 2,
            clicked: true,
            title: 'Machiaj pentru ochi caprui',
            img: 'https://i.pinimg.com/736x/5f/46/0f/5f460f29a27d83de28f6c2239c8bbcd1--makeup-tutorials-makeup-ideas.jpg'
          },
          {
            id: 3,
            clicked: true,
            title: 'Machiaj ochi albastri',
            img: 'https://perfectimperfecte.ro/wp-content/uploads/2016/11/ochialbastri.jpg'
          }
        ]
      }
    ]
  })
}
</script>
