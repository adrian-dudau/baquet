
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
              height="350px"
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
            clicked: true,
            title: 'Colier Argint The Black Heart',
            description: 'Colier fin, din argint 925 placat cu rodiu negru, cu un element central stilizat in forma de inima, cu zirconii negre, fatetate.',
            link: 'https://www.ioana-preda.ro/produs/colier-argint-the-black-heart/',
            price: '164,99 lei',
            img: 'https://www.ioana-preda.ro/wp-content/uploads/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/1/2/125158/thumb900x900/1196682673/colier-argint-the-black-heart.jpg'
          },
          {
            id: 2,
            clicked: false,
            title: 'Geanta Plic',
            description: 'Call It Spring, Geanta plic de piele sintetica, cu detalii de piele intoarsa sintetica Stienta, Negru.',
            link: 'https://www.emag.ro/call-it-spring-geanta-plic-de-piele-sintetica-cu-detalii-de-piele-intoarsa-sintetica-stienta-negru-stienta-98/pd/DMB3DFBBM/',
            price: '49,99 lei',
            img: 'https://s12emagst.akamaized.net/products/14035/14034445/images/res_c918ab6d4aebe08ab03e5d4a6aa8eed7_full.jpg'
          },
          {
            id: 3,
            clicked: true,
            title: 'Geanta aurie compacta, Meli Melo',
            description: 'Geanta aurie compacta, Meli Melo',
            link: 'https://www.melimeloparis.ro/geanta-auriecompacta/p',
            price: '109,99 lei',
            img: 'https://melimeloparis.vteximg.com.br/arquivos/ids/185786-1200-auto?width=1200&height=auto&aspect=true'
          }
        ]
      },
      {
        id: 2,
        title: 'Pantofi Femei',
        cards: [
          {
            id: 1,
            clicked: true,
            title: 'Pantofi cu toc dama argintii Nakami',
            description: 'Pantofi cu toc dama argintii Nakami',
            link: 'https://www.modlet.ro/pantofi-cu-toc/109796-pantofi-cu-toc-dama-argintii-nakami-rl.html',
            price: '110,90 lei',
            img: 'https://static.modlet.ro/208784-thickbox_default/pantofi-dama-cu-toc-champagne-nakami-rl.jpg'
          },
          {
            id: 2,
            clicked: true,
            title: 'Pantofi dama cu toc rosii Amesia',
            description: 'Pantofi dama cu toc rosii Amesia',
            link: 'https://www.modlet.ro/pantofi-cu-toc/108467-pantofi-dama-cu-toc-rosii-amesia-rl.html',
            price: '29,90 lei',
            img: 'https://static.modlet.ro/205120-thickbox_default/pantofi-dama-cu-toc-rosii-amesia-rl.jpg'
          },
          {
            id: 3,
            clicked: true,
            title: 'Pantofi Grumio negri cu toc',
            description: 'Pantofi Grumio negri cu toc',
            link: 'https://www.modlet.ro/pantofi-stiletto/100622-pantofi-dama-grumio-negri-cu-toc.html',
            price: '110,90 lei',
            img: 'https://static.modlet.ro/157945-thickbox_default/pantofi-dama-grumio-negri-cu-toc.jpg'
          },
          {
            id: 4,
            clicked: false,
            title: 'Pantofi din piele naturala',
            description: 'Pantofi Piele Salamen rosii',
            link: 'https://www.modlet.ro/pantofi-piele-dama/24962-pantofi-dama-piele-salamen-rosii.html',
            price: '266,90 lei',
            img: 'https://static.modlet.ro/105373-thickbox_default/pantofi-dama-piele-salamen-rosii.jpg'
          },
          {
            id: 5,
            clicked: true,
            title: 'Pantofi dama cu platforma rosii Nidula',
            description: 'Pantofi dama cu platforma rosii Nidula',
            link: 'https://www.modlet.ro/pantofi-cu-platforma/108564-pantofi-dama-cu-platforma-rosii-nidula.html',
            price: '39,90 lei',
            img: 'https://static.modlet.ro/196968-thickbox_default/pantofi-dama-cu-platforma-rosii-nidula.jpg'
          },
          {
            id: 6,
            clicked: false,
            title: 'Pantofi eleganti cu toc stiletto din lac',
            description: 'Pantofi eleganti cu toc stiletto din lac',
            link: 'https://www.poema.ro/pantofi-eleganti-po14021809-negru.html',
            price: '48 lei',
            img: 'https://static.poema.ro/media/catalog/product/cache/1/thumbnail/130x194.13/9df78eab33525d08d6e5fb8d27136e95/p/o/po14021809-n-1.jpg'
          }
        ]
      },
      {
        id: 3,
        title: 'Accesori Baieti',
        cards: [
          {
            id: 1,
            clicked: false,
            title: 'Papion cu structura de otomana',
            description: 'Papion confecționat din mătase cu structură orizontală. Închidere ajustabilă cu cârlig metalic.',
            link: 'https://www.zara.com/ro/ro/papion-cu-structur%C4%83-de-otoman%C4%83-p07347492.html?v1=34141750&v2=1458207',
            price: '59,90 lei',
            img: 'https://static.zara.net/photos///2020/V/0/2/p/7347/392/800/2/w/913/7347392800_1_1_1.jpg?ts=1577980951635'
          },
          {
            id: 2,
            clicked: true,
            title: 'Cravata bleumarin slim batista Bierce',
            description: 'Cravata bleumarin slim batista Bierce',
            link: 'https://www.onore.ro/cravata-bleumarin-slim-batista-bierce-p372',
            price: '68 lei',
            img: 'https://www.onore.ro/uploads/produse/detalii/372-0-cravata-bleumarin-batista-bierce_1.jpg'
          },
          {
            id: 3,
            clicked: false,
            title: 'Ceas de buzunar camuflat negru',
            description: 'Ceas de buzunar camuflat negru',
            link: 'https://www.trendhim.ro/ceas-de-buzunar-camuflat-negru-p.html',
            price: '249,00 lei',
            img: 'https://res.cloudinary.com/trendhim/image/upload/f_auto,c_pad,q_auto,w_90,h_90/media/catalog/product/8/-/8-2_132.jpg'
          }
        ]
      },
      {
        id: 4,
        title: 'Pantofi Baieti',
        cards: [
          {
            id: 1,
            clicked: true,
            title: 'Pantofi Bigotti',
            description: 'Pantofi negri din piele naturala.',
            link: 'https://www.bigotti.ro/incaltaminte-barbati/pantofi/pantofi-negri-piele-naturala-VOPFSR4EU43299999/',
            price: '270 lei',
            img: 'https://www.bigotti.ro/img/products/e/a/6/2/b/2/xVOPFSR4EU4329999942-1.jpg.pagespeed.ic.GEXv8wggoZ.webp'
          },
          {
            id: 2,
            clicked: true,
            title: 'Pantofi Bigotti',
            description: 'Pantofi maro piele naturala.',
            link: 'https://www.bigotti.ro/incaltaminte-barbati/pantofi/pantofi-maro-piele-naturala-VBPFSR2DQ22299999/',
            price: '234 lei',
            img: 'https://www.bigotti.ro/img/products/e/f/1/0/d/4/VBPFSR2DQ2229999942-1.jpg'
          },
          {
            id: 3,
            clicked: false,
            title: 'Pantofi Guardi',
            description: 'Pantofi navy.',
            link: 'https://h-8.eu/product/17247/pantofi-elegan%C5%A3i/7n-19087-navy',
            price: '104 lei',
            img: 'https://cdn1.h-8.eu/images/products/resized/1/7/2/4/7/c/7n-19087-navy-1r.jpg'
          },
          {
            id: 4,
            clicked: false,
            title: 'Pantofi Daniele Gilardo',
            description: 'Pantofi negri de piele cu model.',
            link: 'https://h-8.eu/product/15460/pantofi-elegan%C5%A3i/i7at-18519-black',
            price: '257 lei',
            img: 'https://cdn1.h-8.eu/products_pics/86922294d7fbe61409b75ceab201c48d7AT-18519-BLACK.JPG'
          },
          {
            id: 5,
            clicked: false,
            title: 'Pantofi Daniele Gilardo',
            description: 'Pantofi pentru barbati din piele naturala. Culoarea oferita - negru. Partea interioară este din piele naturala.',
            link: 'https://h-8.eu/product/18121/pantofi-elegan%C5%A3i/7at-19945-black',
            price: '213 lei',
            img: 'https://cdn1.h-8.eu//images/products/full/1/8/1/2/1/c/7at-19945-black-1.jpg'
          },
          {
            id: 6,
            clicked: true,
            title: 'Pantofi Daniele Gilardo',
            description: 'Pantofi pentru bărbaţi din piele naturală. Culoarea oferită - maro. Partea interioară este din piele naturală.',
            link: 'https://h-8.eu/product/18352/pantofi-elegan%C5%A3i/7at-19946-brown',
            price: '239 lei',
            img: 'https://cdn1.h-8.eu//images/products/full/1/8/3/5/2/c/7at-19946-brown-1.jpg'
          }
        ]
      }
    ]
  })
}
</script>
