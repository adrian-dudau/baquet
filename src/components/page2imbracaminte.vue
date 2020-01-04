<style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: none;
      text-align: center;
      font-family: arial;
      /*padding: 12px;*/
    }

    .price {
      color: grey;
      font-size: 22px;
    }

    .card button {
      border: none;
      outline: 0;
      padding: 12px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }

    .card button:hover {
      opacity: 0.7;
    }

    .row {
      display: flex;
      box-sizing: border-box;
    }

    .column {
      padding: 20px;
    }

</style>

<template>

  <div class="container">
    <h1>Sugestii Imbracaminte</h1>

    <nav>
      <ul>
        <router-link class="previous" to="/">&laquo; Acasa</router-link>
        <router-link class="next" to="/page3accesorii">Accesorii &raquo;</router-link>
      </ul>
    </nav>

    <div class="row">

      <div class="column">
        <div class="card">
          <img src="https://fdcdn.akamaized.net/m/780x1132/products/27602/27601484/images/res_9bbd83b3a69263b8b4b0770af819ad8b.jpg?s=v6Bz2dTO5UbJ" alt="Mango" style="width:100%">
          <h1>Mango</h1>
          <p class="price">449,99 lei</p>
          <p>Sacou slim fit cu aspect texturat Brasilia</p>
          <p><button onclick="window.location.href = 'https://www.fashiondays.ro/p/sacou-slim-fit-cu-aspect-texturat-brasilia-barbati-mango-p2431886-2/';">Cumpara</button></p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://cdn10.avanticart.ro/dyfashion.ro/pictures/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull-467743-0.jpeg" alt="Rochie Ginette" style="width:100%">
          <h1>Rochie Ginette</h1>
          <p class="price">692,99 lei</p>
          <p>Rochie Ginette neagra cu paiete aplicate pe tull</p>
          <p><button onclick="window.location.href = 'https://www.dyfashion.ro/rochii/rochie-ginette-neagra-cu-paiete-aplicate-pe-tull.html';">Cumpara</button></p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://static.zara.net/photos///2019/I/0/2/p/1564/360/800/6/w/1924/1564360800_1_1_1.jpg?ts=1575361919201" alt="Sacou Tip Smoching" style="width:100%">
          <h1>Sacou Tip Smoching</h1>
          <p class="price">399,90 lei</p>
          <p>Sacou cu guler și rever lat din țesătură combinată de culoare asortată. Mânecă lungă cu nasturi la manșetă. Buzunare frontale cu paspoal la nivelul pieptului și cu clape la nivelul șoldului. Buzunar interior. Închidere frontală cu nasture căptușit.</p>
          <p><button onclick="window.location.href = 'https://www.zara.com/ro/ro/sacou-tip-smoching-p01564360.html?v1=38590168&v2=1458207';">Cumpara</button></p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://cdn7.avanticart.ro/dyfashion.ro/pictures/rochie-lorre-neagra-cu-insertii-argintii-la-bust-si-brosa-3d-467568-0.jpeg" alt="Rochie Lorre" style="width:100%">
          <h1>Rochie Lorre</h1>
          <p class="price">254,99 lei</p>
          <p>Rochie Lorre neagra cu insertii argintii la bust si brosa 3D</p>
          <p><button onclick="window.location.href = 'https://www.dyfashion.ro/rochii/rochie-lorre-neagra-cu-insertii-argintii-la-bust-si-brosa-3d.html';">Cumpara</button></p>
        </div>
      </div>

    </div>

  </div>

</template>
