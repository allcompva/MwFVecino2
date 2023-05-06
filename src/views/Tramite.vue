<template>
  <div>
    <div
      class="container"
      style="
        padding-top: 20px;
        z-index: 0;
        position: relative;
        margin-top: -40px;
      "
      v-if="this.paso != null && this.paso != 'undefined'"
    >
      <v-card>
        <div class="row" style="padding: 17px; padding-bottom: 0px">
          <div class="col-xs-12">
            <h2 style="font-size: 26px !important; font-weight: 500">
              {{ paso.nombre_unidad_organizativa }}
            </h2>
            <h5
              style="
                margin-bottom: 16px;
                margin-top: 0px;
                color: var(--roofsie-gray);
              "
            >
              {{ paso.nombre_tramite }}
            </h5>
            <hr
              style="
                margin-top: 10px;
                opacity: 1;
                border: solid #fad613 1px;
                margin-bottom: 35px;
              "
            />
          </div>
        </div>
        <div class="row" style="padding: 17px; padding-top: 0">
          <div class="col-xs-12" v-if="pasos != null && pasos != 'undefined'">
            <v-stepper v-model="e1">
              <v-stepper-header>
                <template v-for="pas in pasos">
                  <v-stepper-step :complete="e1 > pas.id" :step="pas.id">
                    {{ pas.title }}
                  </v-stepper-step>
                  <v-divider v-if="pasos.length < pas.id"></v-divider>
                </template>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card
                    class="mb-12"
                    color="white"
                    style="box-shadow: none !important"
                  >
                    <template>
                      <v-row style="padding-bottom: 0">
                        <v-col cols="12" lg="5" xl="5">
                          <label style="margin-bottom: 5px"
                            >Apellido y Nombre</label
                          >
                          <v-text-field
                            v-model="NombreFormateado"
                            label="Nombre"
                            readonly
                            solo
                            dense
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="3" xl="3">
                          <label style="margin-bottom: 5px">CUIT</label>
                          <v-text-field
                            v-model="cuit"
                            label="CUIT"
                            readonly
                            solo
                            dense
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row style="margin-top: 0; padding-top: 0">
                        <v-col xs="12" sm="12" md="12" lg="8" xl="8">
                          <label style="margin-bottom: 5px"
                            >Representando a</label
                          >
                          <v-select
                            v-model="representado"
                            :items="items"
                            label="Representado"
                            solo
                          ></v-select>
                          <v-btn
                            style="
                              background-color: #0f99ca;
                              border-color: #0f99ca;
                              color: white;
                            "
                            @click="cambiartabs(e1, 1)"
                          >
                            Siguiente
                          </v-btn>
                        </v-col>
                      </v-row>
                    </template>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content
                  :step="index + 2"
                  v-for="(item, index) in this.paso.lstIngresos"
                  :key="index"
                >
                  <v-card
                    class="mb-12"
                    color="white"
                    style="box-shadow: none !important"
                  >
                    <template v-if="currentTabIndex === index + 1">
                      <Formulario
                        :formulario="
                          item.lstContenido.filter(
                            (r) => r.id_ingerso_paso == item.id_ingerso_paso
                          )
                        "
                        :paso="index + 1"
                        v-on:tengo_resultados="onResultados"
                      ></Formulario>
                    </template>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

                  <v-btn text> Cancel </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>

            <div v-if="currentTabIndex === this.paso.lstIngresos.length + 1">
              <Resumen
                :iniciador="NombreFormateado"
                :paso="currentTabIndex"
                representado="A si mismo"
                v-on:tengo_resultados="onResultados"
              />
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<style>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/app.css";
.form-wizard-vue {
  overflow-x: hidden !important;
}
.padding-small {
  padding: 10px;
}
.fw-card {
  background: #ffffff;
  border: none;
  box-shadow: none;
  border-radius: none;
}
.padding-large {
  padding: 20px;
}
@media (min-width: 450px) {
  #divMobile {
    display: none;
  }
}
@media (max-width: 450px) {
  .fw-body-content {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
  .form-wizard-vue .fw-body-list span {
    display: none;
  }
  .form-wizard-vue .fw-body-list .fw-list-progress {
    display: none !important;
  }
  .container {
    padding-left: 2px;
    padding-right: 2px;
  }
  .col-12 {
    margin-bottom: 20px;
  }
  .row {
    padding-top: 0 !important;
  }
  form .row {
    padding-right: 0 !important;
  }
  .form-wizard-vue .fw-body-list li .fw-list-wrapper-icon {
    width: 42px;
    height: 42px;
  }
  .form-wizard-vue .fw-body-list li {
    position: relative;
    padding: 1.5rem;
    padding-left: 0;
    padding-right: 0;
  }
  .justify {
    text-align: justify;
  }
  .form-wizard-vue .fw-body-list {
    overflow-x: hidden !important;
  }
}

.form-wizard-vue .fw-body-content {
  padding: 0px 50px;
}
.form-wizard-vue {
  display: flex;
  flex-direction: column;
  border-top-color: #3798c9 !important;
  border-top: none !important;
  border-radius: 25px !important;
}
.btn-primary {
  color: #fff !important;
  background-color: rgb(15 153 202) !important;
  border-color: rgb(15 153 202) !important;
}
.fw-footer {
  display: none !important;
}
.form-wizard-vue .fw-footer {
  display: flex;
  justify-content: space-between;
  padding: 50px 50px;
  padding-top: 0;
}
.form-wizard-vue .fw-body-content {
  padding: 10px 20px;
}
.form-wizard-vue .fw-body-list {
  overflow-x: scroll;
}
.form-wizard-vue .fw-step-active {
  background: #4a97c8 !important;
  color: #fff !important;
}
.form-wizard-vue .fw-body-list .fw-list-progress-active {
  background: linear-gradient(
    90deg,
    #4a97c8 -3.12%,
    #45a7f7 48.22%,
    #c5e5f3 105.52%
  );
}
.form-wizard-vue .fw-step-checked {
  border: 2px solid #4a97c8 !important;
}
.border-top-warning {
  border-top-color: #3798c9 !important;
  border-top: 5px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
}

.v-input .v-label {
  height: 20px;
  line-height: 20px;
  letter-spacing: normal;
}

.btn-secondary {
  color: #fff !important;
  background-color: #6c757d;
  border-color: #6c757d;
  box-shadow: none;
}

.theme--light.v-stepper .v-stepper__step__step {
  color: white;
  background-color: #6f6f6e;
  font-size: 18px;
  height: 40px;
  width: 40px;
}

.theme--light.v-stepper .v-stepper__step__step {
  background-color: #3798c9 !important;
}

.theme--light.v-stepper .v-stepper__step__step .v-icon {
  color: white;
  background-color: #3798c9 !important;
  font-weight: bolder;
  border-radius: 50%;
  height: 36px;
  width: 36px;
}
.form-wizard-vue .fw-body-list li .fw-list-wrapper-icon {
  border-radius: 50%;
}
.v-stepper__header {
  height: 88px !important;
}
.row {
  padding: 15px;
}
</style>
<script>
import Formulario from "../components/Formularios.vue";
//import Resumen from "../components/Resumen.vue";

export default {
  data: () => ({
    chipErrorDDJJ: false,
    NombreFormateado: "",
    representado: "A si mismo",
    razonSocial: "",
    NombreFantasia: "",
    cuit: "",
    domicilio: "",
    MontoInicial: 0,
    e1: 1,
    items: ["A si mismo"],
    value: [],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    paso: null,
    nroPaso: 2,
    rows: 1,
    chkDJJ: false,
    errorPadre: false,
    number: 20,
    currentTabIndex: 0,
    pasos: [],
    cuil: "",
    titu: "",
    usuario: null,
    foto: "",
  }),
  components: {
    //Header,
    Formulario,
    //Wizard,
    //Resumen,
  },
  async mounted() {
    try {
      if (this.$storage.getTextOrInt("cuit") != null) {
        this.NombreFormateado = this.$storage.getTextOrInt("nombreformateado");
        this.cuit = this.$storage.getTextOrInt("cuitformateado");
        this.cuil = this.$storage.getTextOrInt("cuit");
        this.paso = (
          await this.$http.get("/Paso/getByPk?ID=" + this.$route.params.id)
        ).data;

        let titulosPaso = { id: 1, title: "Iniciador" };
        this.pasos.push(titulosPaso);
        var i = 2;
        this.paso.lstIngresos.forEach((element) => {
          titulosPaso = { id: i, title: element.titulo };
          this.pasos.push(titulosPaso);
          i++;
        });
        titulosPaso = { id: i, title: "Confirmación" };
        this.pasos.push(titulosPaso);
        //this.$store.commit("setIdTramite", this.paso.id_tramite);
        //this.$store.commit("setIdPaso", this.paso.id);
        this.titu = this.pasos[0].title();
      }
    } catch (error) {
      console.log(error);
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
    cambiartabs(actual, direccion) {
      if (direccion == 1) {
        this.currentTabIndex = actual + 1;
        this.e1 = this.e1 + 1;
      }
    },
    validadeFormOne() {
      return false;
    },
    prueba() {},
    onChangeCurrentTab(index, oldIndex) {
      console.log(index, oldIndex);
      this.currentTabIndex = index;
    },
    onTabBeforeChange() {
      return false;
    },
    wizardCompleted() {
      console.log("Wizard Completed");
    },
    onResultados(datos, direccion) {
      var sig = 0;
      var actual = document.getElementById("step-" + datos);
      var siguiente = "";
      if (direccion == 0) {
        sig = datos - 1;
        actual.removeAttribute("class", "fw-step-active");
        actual.classList.add("fw-list-wrapper-icon");
        siguiente = document.getElementById("step-" + sig);
      } else {
        sig = datos + 1;
        actual.removeAttribute("class", "fw-step-active");
        actual.classList.add("fw-list-wrapper-icon");
        actual.classList.add("fw-step-checked");
        siguiente = document.getElementById("step-" + sig);
      }
      this.titu = this.pasos[sig].title;
      siguiente.classList.add("fw-step-active");
      //for (var i = 0; i < datos; i++) {
      //var elem1 = document.getElementById('step-1')
      //if (i == 0) {

      //}
      //if (i == 1) {

      //}
      //}
      this.currentTabIndex = sig;
    },
  },
};
</script>
