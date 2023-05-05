<template>
  <v-container
    style="margin-top: 50px; background-color: white; position: relative"
    v-if="tramite != 'undefined' && tramite != null"
  >
    <v-row>
      <v-col xs="6">
        <h4 style="color: var(--roofsie-gray); font-size: 22px !important">
          Tramite Nro.: {{ tramite.anio }}0000{{ tramite.id }} <br />
          <small style="font-size: 0.7em">{{ tramite.nombre_oficina }}</small
          ><br />
          <small style="font-size: 0.6em">{{ tramite.nombre_tramite }}</small>
        </h4>
      </v-col>
      <v-col xs="6">
        <div>
          <div
            style="
              display: inline-block;
              vertical-align: middle;
              border-left: solid 1px lightgray;
              padding-left: 10px;
            "
          >
            <h4 style="color: var(--roofsie-gray); font-size: 22px !important">
              Iniciado por <br />
              <small style="font-size: 0.7em">{{
                tramite.nombre_contribuyente
              }}</small
              ><br />
              <small style="font-size: 0.6em">CUIT: {{ tramite.cuit }}</small
              ><br />
              <small
                style="font-size: 0.6em; margin-bottom: 0; padding-bottom: 0"
                >En representacion de: Si mismo</small
              >
            </h4>
          </div>
        </div>
      </v-col>
    </v-row>

    <template v-if="tramite.lstPasos != null">
      <v-row>
        <v-col cols="12">
          <v-tabs v-model="tab">
            <v-tab
              v-for="(pestania, indice) in arraySinRepetidos"
              :key="indice"
              >{{ pestania.nombre_ingreso_paso }}</v-tab
            >
            <v-tab style="right: 0; position: fixed; height: 48px">
              <v-btn
                style="background: transparent; border: none; box-shadow: none"
                @click="doSomething()"
              >
                <v-icon class="fa fa-chevron-left"></v-icon>
                &nbsp; Salir
              </v-btn></v-tab
            >
          </v-tabs>
        </v-col>
      </v-row>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="(contenido, indice2) in arraySinRepetidos"
          :key="indice2"
        >
          <v-row
            style="padding: 0"
            class="g-0"
            v-for="(itemRow, c) in tramite.lstPasos
              .filter((objeto) => objeto.id_paso === contenido.id_paso)
              .filter(
                (filas, index, self) =>
                  index === self.findIndex((f) => f.row === filas.row)
              )"
            :key="c"
          >
            <v-col
              xs="12"
              :lg="itemCol.col"
              :xl="itemCol.col"
              v-for="(itemCol, ic) in tramite.lstPasos
                .filter((objeto) => objeto.id_paso === contenido.id_paso)
                .filter((persona) => persona.row === itemRow.row)"
              :key="ic"
            >
              <v-card elevation="0">
                <v-card-text>
                  <template v-if="itemCol.id_ddjj != 0 && primer_paso == 0">
                    <v-card-title
                      style="
                        margin-bottom: 10px;
                        margin-top: 0px;
                        font-size: 18px;
                        font-weight: 500;
                        padding: 0;
                        color: var(--roofsie-gray);
                      "
                      >Solicitud</v-card-title
                    >
                    <hr />

                    <div v-html="itemCol.objDDJJs.ddjj"></div>
                  </template>
                  <template v-if="itemCol.id_formulario != 0">
                    <v-card-title
                      style="
                        margin-bottom: 10px;
                        margin-top: 0px;
                        font-size: 18px;
                        font-weight: 500;
                        padding: 0;
                        color: var(--roofsie-gray);
                      "
                    >
                      {{
                        itemCol.objFormulario.nombre[0].toUpperCase() +
                        itemCol.objFormulario.nombre.substring(1).toLowerCase()
                      }}
                    </v-card-title>
                    <hr />
                    <v-card-text
                      v-if="
                        itemCol.objFormulario != null &&
                        itemCol.objFormulario != 'undefined'
                      "
                      style="padding: 0"
                    >
                      <v-row
                        v-for="(item, c) in itemCol.objFormulario.lstRespuesta"
                        :key="c"
                        style="padding: 0; padding-bottom: 5px"
                      >
                        <v-col cols="12">
                          <div v-if="item.id_tipo_campo == 1">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br /><strong>{{
                                item.respuesta_usuario
                              }}</strong>
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 2">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br /><strong>{{
                                item.respuesta_usuario
                              }}</strong>
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 3">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br /><strong>{{
                                item.respuesta_usuario
                              }}</strong>
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 4">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br /><strong>{{
                                item.respuesta_usuario
                              }}</strong>
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 5">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br /><strong>{{
                                item.respuesta_usuario
                              }}</strong>
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 6">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br /><strong>{{
                                item.respuesta_usuario
                              }}</strong>
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 7">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br /><strong>{{
                                item.respuesta_usuario
                              }}</strong>
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 8">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br />
                              <strong>
                                {{
                                  item.respuesta_usuario.split(",")[1]
                                }}</strong
                              >
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 9">
                            <p
                              v-for="seleccionado in JSON.parse(
                                item.respuesta_usuario
                              )"
                              :key="seleccionado.value"
                            >
                              <CIcon icon="cil-task" />&nbsp;
                              <strong>{{ seleccionado.text }}</strong>
                            </p>
                          </div>
                          <div v-if="item.id_tipo_campo == 14">
                            <p>
                              {{
                                item.etiqueta_campo[0].toUpperCase() +
                                item.etiqueta_campo.substring(1).toLowerCase()
                              }}: <br />
                              <strong>
                                {{
                                  item.respuesta_usuario.split(",")[1]
                                }}</strong
                              >
                            </p>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </template>
                  <template v-if="itemCol.id_adjunto != 0">
                    <v-card-title
                      style="
                        margin-bottom: 10px;
                        margin-top: 0px;
                        font-size: 18px;
                        font-weight: 500;
                        padding: 0;
                        color: var(--roofsie-gray);
                      "
                    >
                      {{
                        itemCol.objAdjuntos.nombre[0].toUpperCase() +
                        itemCol.objAdjuntos.nombre.substring(1).toLowerCase()
                      }}</v-card-title
                    >
                    <hr />
                    <template v-if="itemCol.objAdjuntos.archivo[0] != '['">
                      <CButton
                        style="box-shadow: none"
                        @click="descargaPDF(itemCol.objAdjuntos.archivo)"
                      >
                        <CWidgetStatsF
                          color="danger"
                          :value="itemCol.objAdjuntos.nombre"
                        >
                          <template #icon>
                            <CIcon
                              :icon="icon.cibAdobeAcrobatReader"
                              size="xl"
                            />
                          </template>
                        </CWidgetStatsF>
                      </CButton>
                    </template>
                    <template v-else>
                      <v-alert
                        v-for="(image, index) in JSON.parse(
                          itemCol.objAdjuntos.archivo
                        )"
                        :key="index"
                        style="display: inline-flex; margin: 0px; padding: 5px"
                      >
                        <img
                          @click="abrirModal('data:image/*;base64,' + image)"
                          :src="'data:image/*;base64,' + image"
                          style="
                            height: 100px;
                            width: auto;
                            margin-top: 20px;
                            border: solid gray;
                            border-radius: 15px;
                          "
                        />
                      </v-alert>
                    </template>
                  </template>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </template>
  </v-container>
</template>
<style scoped>
.row {
  padding: 15px;
}
hr:not([size]) {
  height: 2px;
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: #ffc107;
  border: 0;
  opacity: 0.75;
}
</style>
<script>
export default {
  data: () => ({
    modalAceptarTramite: false,
    tabPaneActiveKey: 1,
    tramite: null,
    filasUnicas: [],
    modalQuitarImage: false,
    preview: "",
    estado: 0,
    primer_paso: 0,
    siguiente_paso: 0,
    original_tramite: null,
    arraySinRepetidos: [],
    tab: null,
  }),
  components: {},
  async mounted() {
    try {
      this.$http
        .get("/Tramites/getByPk?id=" + this.$route.params.id)
        .then(
          (response) => (
            (this.tramite = response.data),
            (this.estado = response.data.estado),
            (this.arraySinRepetidos = this.tramite.lstPasos.filter(
              (objeto, indice, self) =>
                self.findIndex((obj) => obj.id_paso === objeto.id_paso) ===
                indice
            ))
          )
        );
    } catch (error) {
      alert(error);
    }
  },
  methods: {
    doSomething() {
      this.$router.push("/ListaTramites/" + this.$storage.getTextOrInt("hash"));
    },
  },
};
</script>
