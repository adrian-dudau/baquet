
<template>

  <v-container fluid>
    <img src="../../resources/page_1/bkg_1.png" width=25%>
    <h1>Sugestii Imbracaminte</h1>

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
              height="700px"
            >
            </v-img>
            <v-card-title v-text="card.title"></v-card-title>
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
        title: 'Rochi scurte',
        cards: [
          {
            id: 1,
            clicked: false,
            title: 'Rochie Ginette',
            description: 'Rochie Ginette neagra cu paiete aplicate pe tull.',
            link: 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html',
            price: '692,99 lei',
            img: 'https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg'
          },
          {
            id: 2,
            clicked: true,
            title: 'Rochie Lorre',
            description: 'Rochie Lorre neagra cu insertii argintii la bust si brosa 3D.',
            link: 'https://www.dyfashion.ro/rochii/rochie-lorre-neagra-cu-insertii-argintii-la-bust-si-brosa-3d.html',
            price: '254,99 lei',
            img: 'https://cdn7.avanticart.ro/dyfashion.ro/pictures/rochie-lorre-neagra-cu-insertii-argintii-la-bust-si-brosa-3d-467568-0.jpeg'
          },
          {
            id: 3,
            clicked: false,
            title: 'Rochie Salma',
            description: 'Rochie Salma rosie din dantela',
            link: 'https://www.dyfashion.ro/rochie-salma-rosie-din-dantela.html',
            price: '183,99 lei',
            img: 'https://cdn7.avanticart.ro/dyfashion.ro/pictures/rochie-salma-rosie-din-dantela-438658-0.jpeg'
          },
          {
            id: 4,
            clicked: false,
            title: 'Rochie Marissa Roz',
            description: 'Rochie din voal cu tull la bust si maneci clopot lungi.',
            link: 'https://missgrey.ro/rochii/rochie-marissa-roz/',
            price: '399,00 lei',
            img: 'https://missgrey.ro/3908-small_default/rochie-marissa-roz.jpg'
          },
          {
            id: 5,
            clicked: true,
            title: 'Rochie Magenta',
            description: 'Rochie scurta cu insertii de dantela.',
            link: 'https://www.dbboutique.ro/ROCHIE-MAGENTA-d372.htm',
            price: '89 lei',
            img: 'https://www.dbboutique.ro/fotky23417/fotos/_vyrp11_372DR645_magenta_front_l.jpg'
          },
          {
            id: 6,
            clicked: true,
            title: 'Prince Charming Dress',
            description: 'Rochie Dama Prince Charming Dress beige din colectia Foggi Princess Collection.',
            link: 'https://www.foggi.ro/rochii-de-ocazie/rochie-dama-prince-charming-dress-beige-din-colectia-foggi-princess-collection-p3383/',
            price: '184 lei',
            img: 'https://www.foggi.ro/continut/produse/3383/440/fb-fs-a0066-4626.jpg'
          }
        ]
      },
      {
        id: 2,
        title: 'Rochi lungi',
        cards: [
          {
            id: 1,
            clicked: true,
            title: 'Royal Dress',
            description: 'Rochie Dama Royal Dress in Rose din Colectia Foggi Delightful.',
            link: 'https://www.foggi.ro/rochii-de-ocazie/rochie-dama-royal-dress-in-rose-din-colectia-foggi-delightful-p4140/',
            price: '250 lei',
            img: 'https://www.foggi.ro/continut/produse/4140/440/img-1470-6386.jpg'
          },
          {
            id: 2,
            clicked: false,
            title: 'Rochie lunga din voal',
            description: 'Rochie lunga de seara din voal si dantela bordo brodata si cu paiete darma.',
            link: 'https://missgrey.ro/rochii/rochie-darma-bordo/',
            price: '224,95 lei',
            img: 'https://missgrey.ro/4004-small_default/rochie-darma-bordo.jpg'
          },
          {
            id: 3,
            clicked: true,
            title: 'Rochie lunga Yasmin lila',
            description: 'Rochie lunga tip corset cu doua straturi de tull.',
            link: 'https://missgrey.ro/rochii/rochie-lunga-yasmin-lila/',
            price: '419,00 lei',
            img: 'https://missgrey.ro/5171-small_default/rochie-lunga-yasmin-lila.jpg'
          },
          {
            id: 4,
            clicked: false,
            title: 'Rochie de seara',
            description: 'Rochie Nude culoare roz-pudra, lunga simpla si eleganta fabricata din material moale si placut la atingere.',
            link: 'https://www.dbboutique.ro/ROCHIE-DE-SEARA-d283_135614894.htm',
            price: '125 lei',
            img: 'https://www.dbboutique.ro/fotky23417/fotos/_vyr__vyr_283DR1031_nude_front_l.jpg'
          },
          {
            id: 5,
            clicked: true,
            title: 'Rochie din voal turcoaz Ema cu bust fronsat',
            description: 'Rochie voal lunga cu bustul fronsat si cu fusta cumpusa dintr-o fusta clos si o fusta cu volan asimetric turqoise.',
            link: 'https://missgrey.ro/rochii/ema-turqoise/',
            price: '449 lei',
            img: 'https://missgrey.ro/2947-small_default/ema-turqoise.jpg'
          },
          {
            id: 6,
            clicked: false,
            title: 'Rochie Marilyn Bordo',
            description: 'Rochie din voal, cu bustul din voal fronsat, şliţ pe picior şi pene aplicate pe decolteu.',
            link: 'https://missgrey.ro/rochii/rochie-marilyn-bordo/',
            price: '519 lei',
            img: 'https://missgrey.ro/4932-small_default/rochie-marilyn-bordo.jpg'
          }
        ]
      },
      {
        id: 4,
        title: 'Costume Barbatesti',
        cards: [
          {
            id: 1,
            clicked: true,
            title: 'Mango',
            description: 'Sacou slim fit cu aspect texturat Brasilia',
            link: 'https://www.fashiondays.ro/p/sacou-slim-fit-cu-aspect-texturat-brasilia-barbati-mango-p2431886-2/',
            price: '449,99 lei',
            img: 'https://www.bigotti.ro/img/products/6/c/c/a/6/c/xVACMCR2DF0855140SM-1.jpg.pagespeed.ic.l-iQzYv7MW.webp'
          },
          {
            id: 2,
            title: 'Sacou Tip Smoching',
            clicked: true,
            description: 'Sacou cu guler și rever lat din țesătură combinată de culoare asortată. Mânecă lungă cu nasturi la manșetă.',
            link: 'https://www.zara.com/ro/ro/sacou-tip-smoching-p01564360.html',
            price: '399,90 lei',
            img: 'https://static.zara.net/photos///2019/I/0/2/p/1564/360/800/6/w/1924/1564360800_1_1_1.jpg?ts=1575361919201'
          },
          {
            id: 3,
            clicked: false,
            title: 'Costum Barbati SlimFit Albastru cu Dungi Maro',
            description: 'Costum slim fit, cu doi nasturi. Potrivit pentru ceremonii, întâlniri de afaceri, și evenimente.',
            link: 'https://www.monarchformen.ro/product/costum-print/',
            price: '1200 lei',
            img: 'https://i2.wp.com/www.monarchformen.ro/wp-content/uploads/2018/03/4.2.png'
          },
          {
            id: 4,
            clicked: true,
            title: 'Costum SlimFit Visiniu',
            description: 'Costum Visiniu SlimFit din lana in doua bucati.',
            link: 'https://www.monarchformen.ro/product/costum-barbati-slim-fit-visiniu-lana-2/',
            price: '1200 lei',
            img: 'https://i1.wp.com/www.monarchformen.ro/wp-content/uploads/2019/07/zaa1563.jpg'
          },
          {
            id: 5,
            clicked: false,
            title: 'Costum barbati tip Zara',
            description: 'Costum barbati office - costum fashion - costum elegant - costum nunta - costum botez - Costum Slim fit',
            link: 'https://dehaine.ro/costum-barbati-zara-online-cu-vesta-a1726',
            price: '299 lei',
            img: 'https://dehaine.ro/image/cache/catalog/-9913/638/costum-tip-zara-A1726-380x475.JPG'
          },
          {
            id: 6,
            clicked: true,
            title: 'Costum Bigotti',
            description: 'Costum Slim Mondrian negru Uni.',
            link: 'https://www.bigotti.ro/costume-barbati/costum-slim-mondrian-negru-uni-VACSCR3X710W19991',
            price: '1990 lei',
            img: 'https://www.bigotti.ro/img/products/c/b/2/0/1/e/xVACSCR3X710W1999148-3.jpg.pagespeed.ic.BXl91Cdnux.webp'
          }
        ]
      },
      {
        id: 3,
        title: 'Camasi Barbatesti',
        cards: [
          {
            id: 1,
            clicked: false,
            title: 'Camasa Alba Simpla Bigotti',
            description: 'Camasa din bumbac cu mansete pentru butoni.',
            link: 'https://www.bigotti.ro/camasi-barbati/camasa-slim-alba-uni-VACMCR2DF0855140S/',
            price: '273 lei',
            img: 'https://www.bigotti.ro/img/products/6/c/c/a/6/c/xVACMCR2DF0855140SM-1.jpg.pagespeed.ic.l-iQzYv7MW.webp'
          },
          {
            id: 2,
            clicked: false,
            title: 'Camasa Lee Cooper',
            description: 'Camasa cu maneci lungi care pot fi rulate.',
            link: 'https://ro.factcool.com/cooper-long-sleeve-aop-shirt-mens-55844093',
            price: '64 lei',
            img: 'https://i.factcool.com/cache2/234x234/catalog/products/1/de/e7/1-de-e755844093_xxl.jpg'
          },
          {
            id: 3,
            clicked: true,
            title: 'Camasa Ombre',
            description: 'Camasa Sim Fit neagra cu maneci lungi.',
            link: 'https://ro.factcool.com/index.php?route=product/product&product_id=1004615',
            price: '84 lei',
            img: 'https://i.factcool.com/cache2/234x234/catalog/products/13/65/98/13-65-9813514_4.jpg'
          },
          {
            id: 4,
            clicked: true,
            title: 'Camasa Pierre Cardin',
            description: 'Camasa bleu cu maneci lungi.',
            link: 'https://ro.factcool.com/index.php?route=product/product&product_id=908763',
            price: '98 lei',
            img: 'https://i.factcool.com/cache2/234x234/catalog/products/1/bd/2b/1-bd-2b55821759_xxl.jpg'
          },
          {
            id: 5,
            clicked: true,
            title: 'Camasa BMAN',
            description: 'Camasa Slim Fit verde.',
            link: 'https://www.bman.ro/products/camasa-slim-fit-verde-bman506',
            price: '84 lei',
            img: 'https://cdn.shopify.com/s/files/1/0126/3357/1392/products/camasa-verde-IMG_9293_3fc073b3-082b-4e61-b231-5b7d330bce79_480x.jpg?v=1575549061'
          },
          {
            id: 6,
            clicked: false,
            title: 'Camasa Boss Hugo Boss',
            description: 'Camasa Slim Fit Masboot',
            link: 'https://www.fashiondays.ro/p/camasa-slim-fit-mabsoot-barbati-boss-hugo-boss-p2430895-2/',
            price: '489,99 lei',
            img: 'https://fdcdn.akamaized.net/m/390x566/products/27418/27417235/images/res_bd7fc02c46d2ad7dca355ece5b8f56a3.jpg?s=ZhmA8HU5Bug4'
          }
        ]
      }
    ]
  })
}
</script>
