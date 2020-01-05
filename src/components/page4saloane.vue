<template>

  <div>
    <img src="../../resources/page_1/bkg_1.png" width=25%>
    <h1>Saloane </h1>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="salon in salons"
          :key="salon.id.title"
          :cols=6
        >
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >

            <v-container fluid>
              <v-layout row wrap justify-center>
              <v-flex >
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="item in salon.text_reviews"
                  :key="item.id"
                  :src="item.img"
                >

            <v-container
              fill-height
              fluid
              pa-0 ma-0 pb-3
            >
            <v-layout fill-height align-end>
              <v-flex >
                <v-card color="gray" class="pa-2">
                <span class="headline white--text" v-text="item.txt">                               </span>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          </v-carousel-item>
        </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          v-model="salon.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">{{salon.rating}} ({{salon.reviews}})</div>
      </v-row>

        <div class="my-4 subtitle-1 black--text">
          {{salon.subtitle}}
        </div>

        <v-card-text>
          <div>{{salon.description}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Servicii Oferite</v-card-title>

        <v-expansion-panels focusable>
        <v-expansion-panel
          v-for="categorie_serviciu in salon.categori_servicii"
          :key="categorie_serviciu.id"
        >
          <v-expansion-panel-header>{{categorie_serviciu.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-simple-table fixed-header height="300px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Serviciu</th>
                    <th class="text-left">Pret</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="serviciu in categorie_serviciu.servici" :key="serviciu.id">
                    <td>{{ serviciu.title }}</td>
                    <td>{{ serviciu.pret }} RON </td>
                  </tr>
                </tbody>
              </template>
          </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-card-actions>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Programari</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Programare</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Nume*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Prenume"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Email*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Telefon*" required></v-text-field>
                    </v-col>
                   <v-col cols="12" sm="6" md="4">
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-menu
                      v-model="menu1"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="time"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker v-model="time" @input="menu1 = false"></v-time-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-autocomplete
                        :items="['Coafat scurt', 'Coafat mediu', 'Coafat lung', 'Coafat ocazie', 'Impletit', 'Suvite mediu', 'Suvite lung', 'Manichiura clasica', 'Pedichiura semi-permanenta']"
                        label="Serviciu"
                        multiple
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
  </div>

</template>

<script>
export default {
  data: () => ({
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    menu2: false,
    time: null,
    menu1: false,
    loading: false,
    salons: [
      {
        id: 1,
        name: 'Chic Salon',
        image: '../../resources/page_1/bkg_1.png',
        subtitle: 'Chic Salon – Ingrijire completa intr-un singur loc!',
        description: 'De peste 10 ani in domeniul infrumusetarii centrele Chic Salon by BeautyOne ofera o gama larga de servicii, fiind insa specializate in remodelarea corporala, estetica faciala avansata si epilare definitiva.',
        rating: '4.9',
        reviews: '3',
        text_reviews: [
          {
            id: 1,
            img: 'https://chicsalon.ro/wp-content/uploads/2017/03/Chic-Salon-Izvor-4.jpg',
            txt: 'Servicii profesionale; Personal amabil'
          },
          {
            id: 2,
            img: 'https://chicsalon.ro/wp-content/uploads/2017/03/Chic-Salon-Izvor-7.jpg',
            txt: 'Personal excelent; Foarte cumunicativ si mereu cu sugesti bune'
          },
          {
            id: 3,
            img: 'https://chicsalon.ro/wp-content/uploads/2017/03/Chic-Salon-Izvor-5.jpg',
            txt: 'Preturi cam mari'
          }
        ],
        categori_servicii: [
          {
            id: 1,
            title: 'Coafura si Culoare',
            servici: [
              {
                id: 1,
                title: 'Coafat scurt',
                pret: '50'
              },
              {
                id: 2,
                title: 'Coafat mediu',
                pret: '60'
              },
              {
                id: 3,
                title: 'Coafat lung',
                pret: '70'
              },
              {
                id: 4,
                title: 'Coafat ocazie',
                pret: '160'
              },
              {
                id: 5,
                title: 'Impletit',
                pret: '40'
              },
              {
                id: 6,
                title: 'Suvite mediu',
                pret: '165'
              },
              {
                id: 7,
                title: 'ImpSuvite lungletit',
                pret: '200'
              }
            ]
          },
          {
            id: 2,
            title: 'Manichiura si Pedichiura',
            servici: [
              {
                id: 1,
                title: 'Manichiura clasica',
                pret: '50'
              },
              {
                id: 2,
                title: 'Manichiura semi-permanenta',
                pret: '95'
              },
              {
                id: 3,
                title: 'Manichiura semi-permanenta french',
                pret: '105'
              },
              {
                id: 4,
                title: 'Manichiura barbati',
                pret: '45'
              },
              {
                id: 5,
                title: 'Pedichiura clasica',
                pret: '75'
              },
              {
                id: 6,
                title: 'Pedichiura semi-permanenta',
                pret: '120'
              },
              {
                id: 7,
                title: 'Pedichiura semi-permanenta french',
                pret: '130'
              },
              {
                id: 8,
                title: 'Pedichiura barbati',
                pret: '55'
              }
            ]
          },
          {
            id: 3,
            title: 'Machiaj',
            servici: [
              {
                id: 1,
                title: 'Machiaj de zi',
                pret: '150'
              },
              {
                id: 2,
                title: 'Machiaj seara/ocazie',
                pret: '250'
              },
              {
                id: 3,
                title: 'Machiaj mireasa',
                pret: '350'
              },
              {
                id: 4,
                title: 'Machiaj editorial',
                pret: '250'
              }
            ]
          },
          {
            id: 4,
            title: 'Cosmetica si Epilat',
            servici: [
              {
                id: 1,
                title: 'Epilat scurt',
                pret: '35'
              },
              {
                id: 2,
                title: 'Epilat lung femei',
                pret: '40'
              },
              {
                id: 3,
                title: 'Epilat lung barbati',
                pret: '55'
              },
              {
                id: 4,
                title: 'Epilat barbati',
                pret: '19'
              },
              {
                id: 5,
                title: 'Epilat mustata',
                pret: '19'
              },
              {
                id: 6,
                title: 'Pensat',
                pret: '25'
              },
              {
                id: 7,
                title: 'Pensat stilizare',
                pret: '35'
              },
              {
                id: 8,
                title: 'Pensat barbati',
                pret: '35'
              }
            ]
          },
          {
            id: 5,
            title: 'Bronzare organica',
            servici: [
              {
                id: 1,
                title: 'Bronzare organica cu DHA',
                pret: '130'
              }
            ]
          }
        ]
      },
      {
        id: 1,
        name: 'Chic Salon',
        image: '../../resources/page_1/bkg_1.png',
        subtitle: 'Chic Salon – Ingrijire completa intr-un singur loc!',
        description: 'De peste 10 ani in domeniul infrumusetarii centrele Chic Salon by BeautyOne ofera o gama larga de servicii, fiind insa specializate in remodelarea corporala, estetica faciala avansata si epilare definitiva.',
        rating: '4.9',
        reviews: '3',
        text_reviews: [
          {
            id: 1,
            img: 'https://chicsalon.ro/wp-content/uploads/2017/03/Chic-Salon-Izvor-4.jpg',
            txt: 'Servicii profesionale; Personal amabil'
          },
          {
            id: 2,
            img: 'https://chicsalon.ro/wp-content/uploads/2017/03/Chic-Salon-Izvor-7.jpg',
            txt: 'Personal excelent; Foarte cumunicativ si mereu cu sugesti bune'
          },
          {
            id: 3,
            img: 'https://chicsalon.ro/wp-content/uploads/2017/03/Chic-Salon-Izvor-5.jpg',
            txt: 'Preturi cam mari'
          }
        ],
        categori_servicii: [
          {
            id: 1,
            title: 'Coafura si Culoare',
            servici: [
              {
                id: 1,
                title: 'Coafat scurt',
                pret: '50'
              },
              {
                id: 2,
                title: 'Coafat mediu',
                pret: '60'
              },
              {
                id: 3,
                title: 'Coafat lung',
                pret: '70'
              },
              {
                id: 4,
                title: 'Coafat ocazie',
                pret: '160'
              },
              {
                id: 5,
                title: 'Impletit',
                pret: '40'
              },
              {
                id: 6,
                title: 'Suvite mediu',
                pret: '165'
              },
              {
                id: 7,
                title: 'ImpSuvite lungletit',
                pret: '200'
              }
            ]
          },
          {
            id: 2,
            title: 'Manichiura si Pedichiura',
            servici: [
              {
                id: 1,
                title: 'Manichiura clasica',
                pret: '50'
              },
              {
                id: 2,
                title: 'Manichiura semi-permanenta',
                pret: '95'
              },
              {
                id: 3,
                title: 'Manichiura semi-permanenta french',
                pret: '105'
              },
              {
                id: 4,
                title: 'Manichiura barbati',
                pret: '45'
              },
              {
                id: 5,
                title: 'Pedichiura clasica',
                pret: '75'
              },
              {
                id: 6,
                title: 'Pedichiura semi-permanenta',
                pret: '120'
              },
              {
                id: 7,
                title: 'Pedichiura semi-permanenta french',
                pret: '130'
              },
              {
                id: 8,
                title: 'Pedichiura barbati',
                pret: '55'
              }
            ]
          },
          {
            id: 3,
            title: 'Machiaj',
            servici: [
              {
                id: 1,
                title: 'Machiaj de zi',
                pret: '150'
              },
              {
                id: 2,
                title: 'Machiaj seara/ocazie',
                pret: '250'
              },
              {
                id: 3,
                title: 'Machiaj mireasa',
                pret: '350'
              },
              {
                id: 4,
                title: 'Machiaj editorial',
                pret: '250'
              }
            ]
          },
          {
            id: 4,
            title: 'Cosmetica si Epilat',
            servici: [
              {
                id: 1,
                title: 'Epilat scurt',
                pret: '35'
              },
              {
                id: 2,
                title: 'Epilat lung femei',
                pret: '40'
              },
              {
                id: 3,
                title: 'Epilat lung barbati',
                pret: '55'
              },
              {
                id: 4,
                title: 'Epilat barbati',
                pret: '19'
              },
              {
                id: 5,
                title: 'Epilat mustata',
                pret: '19'
              },
              {
                id: 6,
                title: 'Pensat',
                pret: '25'
              },
              {
                id: 7,
                title: 'Pensat stilizare',
                pret: '35'
              },
              {
                id: 8,
                title: 'Pensat barbati',
                pret: '35'
              }
            ]
          },
          {
            id: 5,
            title: 'Bronzare organica',
            servici: [
              {
                id: 1,
                title: 'Bronzare organica cu DHA',
                pret: '130'
              }
            ]
          }
        ]
      }
    ]
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
