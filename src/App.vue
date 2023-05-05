<template>
  <v-app id="app" style="overflow: hidden">
    <v-container
      fluid
      style="
        padding: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
      "
    >
      <v-row style="margin-top: 120px">
        <v-col cols="12">
          <v-card
            class="mx-auto overflow-hidden"
            style="
              border-radius: 0;
              min-height: 100vh;
              background-color: white;
              box-shadow: none;
            "
          >
            <v-app-bar
              v-if="!['Login'].includes($router.currentRoute.name)"
              fixed
              dark
              style="
                box-shadow: none;
                padding-top: 20px;
                padding-left: 5%;
                padding-right: 0;
                height: 100px;
                background: linear-gradient(0deg, #f8f9fa, #dadbdb);
              "
            >
              <v-container fluid>
                <v-row>
                  <v-col cols="3">
                    <v-btn
                      style="background-color: transparent; box-shadow: none"
                    >
                      <img
                        style="height: 60px"
                        src="https://vecino.villaallende.gov.ar/etramites/img/logo.3dc8f11b.png"
                      /> </v-btn
                  ></v-col>
                  <v-col cols="6" style="text-align: center">
                    <h2
                      style="font-size: 28px; font-weight: bold; color: dimgray"
                    >
                      E-Tramites
                    </h2>
                  </v-col>
                  <v-col
                    cols="3"
                    style="
                      text-align: right;
                      background-color: rgb(45, 53, 58);
                      padding: 5px;
                      padding-right: 15px;
                      border-top-left-radius: 10px;
                      border-bottom-left-radius: 10px;
                      right: 0px;
                      position: fixed;
                    "
                    ><v-menu bottom left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          icon
                          v-bind="attrs"
                          v-on="on"
                          style="width: auto"
                        >
                          <v-avatar size="50px">
                            <img
                              alt="Avatar"
                              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                            /> </v-avatar
                          >&nbsp;
                          <label>Martin Velez</label>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item v-for="(item, i) in items" :key="i">
                          <v-list-item-title>{{
                            item.title
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu></v-col
                  >
                </v-row>
              </v-container>
            </v-app-bar>
            <router-view />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  components: {},
  created() {
    /*if(!['Login'].includes($router.currentRoute.name)){
		if (this.$storage.getTextOrInt("cuit") == "") {
			this.$router.push("Login/");
		}
	}*/
  },

  methods: {},
  mounted() {
    // this.$nextTick(() => {
    // 	console.log(window.wtb_event_widgets)
    // 	// window[window.wtb_event_widgets.pop()].init();
    // });
  },
};
</script>
