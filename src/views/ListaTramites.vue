<template>
  <v-container style="min-height: 750px">
    <v-row v-if="this.tramite != null && this.tramite != 'undefined'">
      <v-col cols="12">
        <v-card elevation="10">
          <v-container>
            <div class="row" style="padding-top: 25px; padding-left: 10px">
              <div class="col-xs-12">
                <h2 class="intro-y fs-lg fw-medium">Mis Tramites</h2>
                <hr
                  style="
                    margin-top: 10px;
                    opacity: 1;
                    border: solid #fad613 1px;
                  "
                />
              </div>
            </div>
            <div style="padding: 10px">
              <div class="row" style="padding-top: 25px; padding-bottom: 25px">
                <div class="col-8">
                  <div
                    class="position-relative text-gray-700 dark-text-gray-300"
                  >
                    <input
                      type="text"
                      class="form-control box border-white dark-border-dark-3 pe-10 placeholder-theme-8"
                      placeholder="Search..."
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-search w-4 h-4 position-absolute my-auto top-0 bottom-0 me-3 end-0"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
                <div class="col-4" style="text-align: right">
                  <button
                    v-if="
                      $vuetify.breakpoint.name == 'xs' ||
                      $vuetify.breakpoint.name == 'sm' ||
                      $vuetify.breakpoint.name == 'md'
                    "
                    target="sm"
                    class="btn btn-primary shadow-md me-2"
                    style="border-radius: 50%; font-size: 20px; padding: 10px"
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                  <button
                    v-else
                    @click="abrirModal"
                    class="btn btn-primary shadow-md me-2"
                  >
                    Nuevo Tramite
                  </button>
                </div>
              </div>
              <v-container style="padding: 0">
                <v-row
                  v-if="
                    $vuetify.breakpoint.name == 'xs' ||
                    $vuetify.breakpoint.name == 'sm' ||
                    $vuetify.breakpoint.name == 'md'
                  "
                >
                  <v-col
                    cols="12"
                    v-for="(tra, index) in tramite"
                    :key="index"
                    style="margin-bottom: 20px"
                  >
                    <TarjetaTramitesMobile
                      :tramite="tra"
                    ></TarjetaTramitesMobile>
                  </v-col>
                </v-row>
                <v-row v-else>
                  <v-col
                    cols="6"
                    v-for="(tra, index) in tramite"
                    :key="index"
                    style="margin-bottom: 20px"
                  >
                    <TarjetaMisTramitesPC :tramite="tra"></TarjetaMisTramitesPC>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="ModalTramites">
      <v-card style="text-align: center">
        <v-card-title class="text-h5">
          <h3 style="font-size: 20px; font-weight: 700; margin-top: 20px">
            Listado de e-tramites disponibles
          </h3>
          <hr
            style="
              margin-top: 20px;
              margin-bottom: 20px;
              opacity: 1;
              border: 1px solid rgb(250, 214, 19);
            "
          />
        </v-card-title>
        <div class="row">
          <div
            class="col-md-3"
            v-for="tra in tramitesdisponibles"
            :key="tra.id"
          >
            <TarjetasTramites :tramite="tra"></TarjetasTramites>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<style>
@import "../assets/css/app.css";
.modal-dialog {
  margin: 1.75rem auto;
  max-width: 70% !important;
}
.btn-primary {
  background-color: rgb(15 153 202) !important;
}
.main-header-two__shape-3 {
  bottom: 0.5px !important;
}
img {
  display: inline !important;
}
.box,
.pagination .page-item.active .page-link,
.search-result .search-result__content {
  --bs-bg-opacity: 1;
  --bs-border-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity));
  border-color: transparent;
  border-top: solid 1px lightgray;
  border-radius: 0.375rem;
  box-shadow: 0 3px 20px #0000000b;
  position: relative;
  box-shadow: 1px 3px 2px 1px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
</style>
<script>
import TarjetaMisTramitesPC from "../components/TarjetaMisTramitesPC.vue";
import TarjetaTramitesMobile from "@/components/TarjetaTramitesMobile.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import TarjetasTramites from "../components/TarjetasTramites.vue";

export default {
  data: () => ({
    tabPaneActiveKey: 1,
    tramite: [],
    pantalla: 0,
    vecino: null,
    ModalTramites: false,
    tramitesdisponibles: [],
  }),
  components: {
    TarjetaMisTramitesPC,
    TarjetaTramitesMobile,
    TarjetasTramites,
  },
  async mounted() {
    try {
      if (this.$storage.getTextOrInt("cuit") != null) {
        try {
          this.tramite = (
            await this.$http.get(
              "/Tramites/read?cuit=" + this.$storage.getTextOrInt("cuit")
            )
          ).data;

          this.tramitesdisponibles = (
            await this.$http.get("/Tramite/read")
          ).data;
        } catch (error) {
          this.tramitesdisponibles = null;
        }
      } else {
        if (this.$route.params.hash == "") {
          this.$router.push("Login/");
        }

        this.$http
          .get(
            "https://vecino.villaallende.gov.ar/WebApiShared/UsuarioCIDI/ObtenerUsuarioCIDI2?Hash=" +
              this.$route.params.hash
          )
          .then(
            (response) => (
              (this.vecino = response.data),
              this.$storage.set("cuit", response.data.cuil),
              this.$storage.set("hash", this.$route.params.hash),
              this.$storage.set("cuitformateado", response.data.cuilFormateado),
              this.$storage.set(
                "nombreformateado",
                response.data.nombreFormateado
              ),
              this.$storage.set("avatar", result.data.foto),
              this.$storage.set("cuitrepresentado", response.data.cuil),
              alert(this.$storage.getTextOrInt("avatar"))
            )
          )
          .catch((this.labelError = true));

        try {
          this.tramite = (
            await this.$http.get(
              "/Tramites/read?cuit=" + this.$storage.getTextOrInt("cuit")
            )
          ).data;

          this.tramitesdisponibles = (
            await this.$http.get("/Tramite/read")
          ).data;
        } catch (error) {
          this.tramitesdisponibles = null;
        }
      }

      /*this.tramite = axios.get(
          '/Tramites/read?cuit=23271734999',
        ).data*/
      this.pantalla = window.innerWidth;
    } catch (error) {
      alert(error);
    }
  },
  props: {
    nextButton: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    abrirModal() {
      this.ModalTramites = true;
    },
    validadeFormOne() {
      return false;
    },
    verTramite() {
      //router.push("VistaTramite/" + this.tramite.id);
    },
  },
};
</script>
