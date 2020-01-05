<template>

  <v-container fluid>
    <img src="../../resources/page_1/bkg_1.png" width=25%>
    <h1> Sugestii Croitorii </h1>

    <v-container fluid
         v-for="category in croitori"
          :key="category.id">

        <v-row dense>
        <v-col
          v-for="card in category.cards"
          :key="card.id"
          :cols=6
        >
          <v-card height="100%">
            <v-img
              :src="card.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="500px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-text>
                {{card.review}}
            </v-card-text>

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
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    croitori: [
      {
        id: 1,
        cards: [
          {
            id: 1,
            clicked: true,
            title: 'Picasso - Croitorie Femei',
            review: 'Croitoreasa a fost foarte atenta si rabdatoare cu toate cerintele mele ( Ana )',
            link: 'https://www.croitoriepicasso.ro/rochii-de-bal/',
            img: 'https://www.croitoriepicasso.ro/wp-content/uploads/2019/03/rochie-bal.jpg'
          },
          {
            id: 2,
            clicked: true,
            title: 'Retoucherie - Croitorie Barbati',
            review: 'a ajung la probe a fost foarte usor, rapid si convenabil. (Marius)',
            link: 'http://www.retoucherie.ro/croitorie-costume-barbati-comanda/',
            img: 'http://retoucherie.ro/wp-content/uploads/2017/01/frame_60.png'
          }
        ]
      }
    ]
  })
}
</script>
