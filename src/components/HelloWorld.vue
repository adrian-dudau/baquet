<!-- aici e styleul pentru butoane, schimbare aici si apare pe toate paginile -->
<style>
    a {
      text-decoration: none;
      display: inline-block;
      padding: 10px 40px;
      font-size: 24px;
    }

    a:hover {
      background-color: #ddd;
      color: black;
    }

    .previous {
      background-color: #474747;
      color: white;
    }

    .next {
      background-color: #ffb6c1;
      color: white;
    }

    .round {
      border-radius: 50%;
    }
</style>

<template>

  <div class="container">
    <h1>Bun venit in banquet</h1>

    <nav>
        <ul>
            <router-link class="next" to="/page2imbracaminte">Incepe &raquo;</router-link>
        </ul>
    </nav>
  </div>

</template>
