
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
        { title: 'Imbracaminte', route: '/page2imbracaminte', icon: 'mdi-image' },
        { title: 'Croitorii', route: '/page25croitorii', icon: 'mdi-help-box' },
        { title: 'Accesori', route: '/page3accesorii', icon: 'mdi-image' },
        { title: 'Saloane', route: '/page4saloane', icon: 'mdi-help-box' },
        { title: 'Coafuri si Make-up', route: '/page5calendar', icon: 'mdi-help-box' }
      ]
    }
  }
}
</script>
