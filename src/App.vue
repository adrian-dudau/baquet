
<template>
  <v-app
      id="inspire"
      dark
      >
      <v-navigation-drawer
        v-model="drawer"
        enable-resize-watcher
        app
        dark
      >
        <v-list
          dense
          class="py-0"
        >
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/31.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Bunquet</v-list-item-title>
              <v-list-item-subtitle>Ana</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', route: '/', icon: 'mdi-view-dashboard' },
        { title: 'Imbracaminte', route: '/page2imbracaminte', icon: 'mdi-hanger' },
        { title: 'Croitorii', route: '/page25croitorii', icon: 'mdi-google-street-view' },
        { title: 'Accesori', route: '/page3accesorii', icon: 'mdi-hat-fedora' },
        { title: 'Saloane', route: '/page4saloane', icon: 'mdi-home-group' },
        { title: 'Coafuri si Machiaj', route: '/page5calendar', icon: 'mdi-content-cut' }
      ]
    }
  }
}
</script>
