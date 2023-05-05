<template>
  <v-container
    fluid
    style="
      background-color: #f3f3f3;
      padding: 0;
      max-width: 100% !important;
      overflow-x: hidden !important;
      overflow-y: hidden !important;
      margin-top: -71px;
    "
    dense
    v-if="$vuetify.breakpoint.name == 'xs'"
  >
    <v-card class="mx-auto overflow-hidden" style="border-radius: 0">
      <v-app-bar
        color="deep-purple"
        dark
        style="
          height: 150px;
          padding-top: 20px;
          padding-left: 10px;
          background-color: #214594 !important;
        "
        class="mobile"
      >
        <v-app-bar-nav-icon
          @click.stop="drawer2 = !drawer2"
          style="background-color: transparent !important"
        ></v-app-bar-nav-icon>
        <v-btn
          :href="logos.logo1.link"
          :target="logos.logo1.target"
          style="height: 0px"
        >
          <img
            class="mx-auto"
            :src="logos.logo1.src"
            style="height: 30px; margin-left: 0px"
          />
        </v-btn>
        <v-toolbar-items class="hidden-sm-and-down">
          <ul style="padding-left: 8px"></ul>
        </v-toolbar-items>
        <v-spacer></v-spacer>

        <v-btn
          light
          text
          @click="drawer = true"
          style="height: 0px; width: 0px"
        >
          <v-img
            style="height: 50px; width: 50px; border-radius: 50%"
            src="https://niufleex.com/wp-content/uploads/2022/03/avatar.png"
          ></v-img>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer2"
        absolute
        temporary
        style="background-color: #f77c0a"
      >
        <v-list nav dense>
          <v-toolbar-items>
            <ul style="padding-left: 8px; margin-top:80px;">
              <li
                style="list-style: none"
                v-for="item in items"
                :key="item.boton"
              >
                <v-btn
                  :href="item.link"
                  :target="item.target"
                  v-if="item.subitems.length == 0"
                  text
                  elevation="0"
                  style="background-color: transparent !important; color: white"
                >
                  {{ item.boton }}</v-btn
                >
                <v-menu
                  :close-on-content-click="false"
                  open-on-hover
                  bottom
                  offset-y
                  v-else
                  style="background-color: transparent !important"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      text
                      elevation="0"
                      style="
                        background-color: #214594 !important;
                        color: white;
                      "
                      v-on="on"
                    >
                      {{ item.boton }}&nbsp;
                      <i style="font-size: 14px" class="fa fa-chevron-down"></i
                    ></v-btn>
                  </template>

                  <v-list
                    style="background-color: #214594 !important"
                  >
                    <v-list-item
                      v-for="item2 in item.subitems"
                      :key="item2.boton"
                    >
                      <v-btn
                        text
                        elevation="0"
                        style="
                          background-color: transparent !important;
                          color: white;
                        "
                        :href="item2.link"
                        :target="item2.target"
                      >
                        {{ item2.boton }}
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </li>
            </ul>
          </v-toolbar-items>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer v-model="drawer" absolute temporary right>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <section style="background-color: #214594; padding-top: 60px">
        <FooterUno></FooterUno>
      </section>
      <section style="background-color: #214594; padding-top: 60px">
        <FooterDos></FooterDos>
      </section>
    </v-card>
  </v-container>
  <v-container
    fluid
    style="
      background-color: #f3f3f3;
      padding: 0;
      max-width: 100% !important;
      overflow-x: hidden !important;
      overflow-y: hidden !important;
      margin-top: -71px;
    "
    v-else-if="
      $vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'md'
    "
  >
    <v-card class="mx-auto overflow-hidden" style="border-radius: 0">
      <v-app-bar
        color="deep-purple"
        dark
        style="
          height: 150px;
          padding-top: 20px;
          padding-left: 10px;
          background-color: #214594 !important;
        "
        class="mobile"
      >
        <v-app-bar-nav-icon
          @click.stop="drawer2 = !drawer2"
          style="background-color: transparent !important"
        ></v-app-bar-nav-icon>
        <v-btn
          :href="logos.logo1.link"
          :target="logos.logo1.target"
          style="height: 0px"
        >
          <img
            class="mx-auto"
            :src="logos.logo1.src"
            style="height: 30px; margin-left: 0px"
          />
        </v-btn>
        <v-toolbar-items class="hidden-sm-and-down">
          <ul style="padding-left: 8px"></ul>
        </v-toolbar-items>
        <v-spacer></v-spacer>

        <v-btn
          light
          text
          @click="drawer = true"
          style="height: 0px; width: 0px"
        >
          <v-img
            style="height: 50px; width: 50px; border-radius: 50%"
            src="https://niufleex.com/wp-content/uploads/2022/03/avatar.png"
          ></v-img>
        </v-btn>
      </v-app-bar>
          <section style="background-color: white; padding-top: 60px; margin-bottom: 60px;">
            <Intro></Intro>
          </section>    
      <v-navigation-drawer
        v-model="drawer2"
        absolute
        temporary
        style="background-color: #f77c0a"
      >
        <v-list nav dense>
          <v-toolbar-items>
            <ul style="padding-left: 8px; margin-top:80px;">
              <li
                style="list-style: none"
                v-for="item in items"
                :key="item.boton"
              >
                <v-btn
                  :href="item.link"
                  :target="item.target"
                  v-if="item.subitems.length == 0"
                  text
                  elevation="0"
                  style="background-color: transparent !important; color: white"
                >
                  {{ item.boton }}</v-btn
                >
                <v-menu
                  :close-on-content-click="false"
                  open-on-hover
                  bottom
                  offset-y
                  v-else
                  style="background-color: transparent !important"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      text
                      elevation="0"
                      style="
                        background-color: #214594 !important;
                        color: white;
                      "
                      v-on="on"
                    >
                      {{ item.boton }}&nbsp;
                      <i style="font-size: 14px" class="fa fa-chevron-down"></i
                    ></v-btn>
                  </template>

                  <v-list
                    style="background-color: #214594 !important"
                  >
                    <v-list-item
                      v-for="item2 in item.subitems"
                      :key="item2.boton"
                    >
                      <v-btn
                        text
                        elevation="0"
                        style="
                          background-color: transparent !important;
                          color: white;
                        "
                        :href="item2.link"
                        :target="item2.target"
                      >
                        {{ item2.boton }}
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </li>
            </ul>
          </v-toolbar-items>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer v-model="drawer" absolute temporary right>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
          <section style="background-color: white; padding-top: 60px; margin-bottom: 60px;">
            <Intro></Intro>
          </section>    
      <section style="background-color: #214594; padding-top: 60px">
        <FooterUno></FooterUno>
      </section>
      <section style="background-color: #214594; padding-top: 60px">
        <FooterDos></FooterDos>
      </section>
    </v-card>
  </v-container>
  <v-container fluid style="padding: 0" v-else>
    <v-row>
      <v-col cols="12"> <Comprarahora /> </v-col>>
    </v-row>
    <v-row style="margin-top: -45px">
      <v-col cols="12">
        <v-card
          class="mx-auto overflow-hidden"
          style="
            border-radius: 0;
            min-height: 100vh;
            backgroundcolor: #1c3e89;
            box-shadow: none;
          "
        >
          <v-app-bar
            color="deep-purple"
            dark
            style="
              height: 96px;
              box-shadow: none;
              padding-top: 20px;
              padding-left: 5%;
              padding-right: 3%;
              background-color: #1c3e89 !important;
            "
          >
            <v-btn
              :href="logos.logo1.link"
              :target="logos.logo1.target"
              style="height: 0px"
            >
              <img :src="logos.logo1.src" style="width: 171px; height: 56px" />
            </v-btn>
            <v-toolbar-items class="hidden-sm-and-down">
              <ul style="padding-left: 8px">
                <li
                  style="list-style: none; height: 100%; display: inline"
                  v-for="item in items"
                  :key="item.boton"
                >
                  <v-btn
                    elevation="0"
                    :href="item.link"
                    :target="item.target"
                    text
                    dark
                    class="btnmenu"
                  >
                    {{ item.boton }}</v-btn
                  >
                </li>
              </ul>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <div class="iface">
              <i
                aria-hidden="true"
                style="height: 17px; width: 17px"
                class="far fa-bookmark"
              ></i>
            </div>
            <v-text-field
              background-color="rgb(15, 49, 122)"
              color="#608DF0"
              style="
                padding-top: 25px;
                font-family: DM Sans, Sans-serif;
                font-size: 18px;
                font-weight: 500;
                line-height: 1.2em;
                letter-spacing: 0px;
                box-shadow: none !important;
              "
              solo
              text
              label="   Buscar"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>

            <v-btn
              light
              text
              @click="drawer = true"
              style="margin-right: 55px; height: 0px; width: 0px"
              class="btnUsu"
            >
              <v-img
                style="height: 54px; width: 54px; border-radius: 50%"
                src="https://niufleex.com/wp-content/uploads/2022/03/avatar.png"
              ></v-img>
            </v-btn>
          </v-app-bar>
          <v-navigation-drawer v-model="drawer" absolute temporary right>
            <v-list nav dense>
              <v-list-item-group
                v-model="group"
              >
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Account</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          <section style="background-color: white; padding-top: 60px; margin-bottom: 60px;">
            <Intro></Intro>
          </section>    
          <section style="background-color: #214594; padding-top: 60px">
            <FooterUno></FooterUno>
          </section>
          <section style="background-color: #214594; padding-top: 60px">
            <FooterDos></FooterDos>
          </section>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.btnmenu {
  height: 100% !important;
  background-color: transparent !important;
  font-family: DM Sans, Sans-serif !important;

  font-weight: 600 !important;
  text-transform: uppercase !important;
}
.btnmenu::before {
  background-color: transparent !important;
}
.btnmenu:active {
  color: aqua !important;
}
.v-input__slot {
  box-shadow: none !important;
}
.v-responsive__sizer {
  display: none;
}
.mobile .v-toolbar__content {
  /* height: 170px !important; */
}
.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close), .v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
    box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
    background-color: #214594 !important;
}
</style>
<script>
import Comprarahora from "../components/comprarahora.vue";

import FooterUno from "../components/Footer/FooterUno.vue";
import FooterDos from "../components/Footer/FooterDos.vue";
import Intro from "../components/FichaCurso/Intro.vue";
export default {
  data: () => ({
    drawer: false,
    drawer2: false,
    group: null,
    group2: null,
    logos: {
      logo1: {
        src: "https://niufleex.com/wp-content/uploads/2022/02/be-infinitus.png",
        link: "https://niufleex.com",
        target: "_blank",
      },
      logo2: {
        src: "https://niufleex.com/wp-content/uploads/2021/12/Sin-ti%CC%81tulo-1.png",
        link: "https://niufleex.com",
        target: "_blank",
      },
      avatar: {
        src: "",
      },
    },
    items: [
      {
        boton: "HOME",
        link: "#",
        target: "_self",
        interna: 1,
        subitems: [],
      },
      {
        boton: "CURSOS",
        link: "#",
        target: "_self",
        interna: 1,
        subitems: [],
      },
      {
        boton: "ESPECIALISTAS",
        link: "#",
        target: "_self",
        interna: 1,
        subitems: [],
      },
      {
        boton: "SESIONES EN VIVO",
        link: "#",
        target: "_self",
        interna: 1,
        subitems: [],
      },
    ],
  }),
  name: "Home",

  components: {
    Comprarahora,
    Intro,
    FooterUno,
    FooterDos,
  },
};
</script>
