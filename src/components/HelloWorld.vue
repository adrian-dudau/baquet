<style>
    .previous {
    background-color: #f1f1f1;
    color: black;
    }

    .next {
    background-color: #4CAF50;
    color: white;
    }
</style>

<template>

  <div class="container">
    <h1>Page 1</h1>

    <a href="#" class="previous">&laquo; Previous</a>
    <a href="#" class="next">Next &raquo;</a>

    <nav>
        <ul>
            <li><router-link to="/page2imbracaminte">Incepe &raquo;</router-link></li>
        </ul>
    </nav>
  </div>

</template>
