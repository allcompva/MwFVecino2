<template>
  <v-form class="row needs-validation" v-if="datosCompletos != null">
    <v-row
      v-for="(itemRow, i) in filasUnicas"
      :key="i"
      style="padding-top: 0; padding-bottom: 0"
    >
      <v-col
        xs="12"
        :lg="itemCol.col"
        :xl="itemCol.col"
        v-for="(itemCol, ic) in datosCompletos.filter(
          (persona) => persona.row === itemRow.row
        )"
        :key="ic"
      >
        <template v-if="itemCol.id_ddjj != 0">
          <v-card-title
            style="
              margin-bottom: 10px;
              margin-top: 0px;
              font-size: 18px;
              font-weight: 500;
              color: var(--roofsie-gray);
            "
            >Solicitud</v-card-title
          >
          <hr style="margin-bottom: 30px" />
          <div
            class="justify"
            v-html="itemCol.objDDJJ.texto"
            style="margin-bottom: 35px"
          ></div>
          <v-checkbox
            label="He leído y acepto"
            v-model="chkDJJ"
            required
          ></v-checkbox>
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
            >{{ itemCol.objFormulario.nombre }}</v-card-title
          >
          <hr style="margin-bottom: 0px" />
          <v-card-text
            style="padding-left: 0; padding-right: 0"
            v-if="datosCompletos != null && datosCompletos != 'undefined'"
          >
            <v-row
              style="padding-top: 0px; padding-bottom: 0; margin-top: 0"
              v-for="(campo, c) in itemCol.objFormulario.lstCampos.filter(
                (filas, index, self) =>
                  index === self.findIndex((f) => f.row === filas.row)
              )"
              :key="c"
            >
              <v-col
                style="padding: 0"
                xs="12"
                :lg="itemColF.col"
                :xl="itemColF.col"
                v-for="(
                  itemColF, ico
                ) in itemCol.objFormulario.lstCampos.filter(
                  (persona) => persona.row === campo.row
                )"
                :key="ico"
              >
                <div v-if="itemColF.id_tipo_campo == 1">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <v-text-field
                    label="Outlined"
                    :placeholder="
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    "
                    outlined
                    :id="itemColF.nombre"
                    v-model="itemColF.ingreso_usuario"
                    dense
                    required
                  ></v-text-field>
                </div>
                <div v-if="itemColF.id_tipo_campo == 2">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <v-textarea
                    solo
                    :id="itemColF.nombre"
                    clear-icon="mdi-close-circle"
                    :placeholder="
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    "
                    v-model="itemColF.ingreso_usuario"
                    required
                  ></v-textarea>
                </div>
                <div v-if="itemColF.id_tipo_campo == 3">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <v-text-field
                    :id="itemColF.nombre"
                    v-model="itemColF.ingreso_usuario"
                    :placeholder="
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    "
                    type="number"
                    required
                  ></v-text-field>
                </div>
                <div v-if="itemColF.id_tipo_campo == 4">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <v-text-field
                    :id="itemColF.nombre"
                    v-model="itemColF.ingreso_usuario"
                    :placeholder="
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    "
                    type="email"
                    required
                  ></v-text-field>
                </div>
                <div v-if="itemColF.id_tipo_campo == 5">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <v-text-field
                    :id="itemColF.nombre"
                    v-model="itemColF.ingreso_usuario"
                    :placeholder="
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    "
                    type="url"
                    required
                  ></v-text-field>
                </div>
                <div v-if="itemColF.id_tipo_campo == 6">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <v-text-field
                    :id="itemColF.nombre"
                    v-model="itemColF.ingreso_usuario"
                    :placeholder="
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    "
                    type="text"
                    onfocus="(this.type='date')"
                    required
                  ></v-text-field>
                </div>
                <div v-if="itemColF.id_tipo_campo == 7">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <v-text-field
                    :id="itemColF.nombre"
                    v-model="itemColF.ingreso_usuario"
                    :placeholder="
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    "
                    type="time"
                    required
                  ></v-text-field>
                </div>
                <div v-if="itemColF.id_tipo_campo == 8">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <select
                    v-model="itemColF.ingreso_usuario"
                    class="form-control"
                  ></select>
                </div>
                <div
                  style="margin-top: 10px"
                  v-if="itemColF.id_tipo_campo == 9"
                >
                  <label style="margin-bottom: 5px;">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <v-select
                    label="text"
                    track-by="value"
                    :multiple="true"
                    :close-on-select="true"
                    :items="itemColF.contenido_campo"
                    v-model="itemColF.ingreso_usuario"
                    :id="itemColF.nombre"
                    class="form-comtrol"
                    chips
                    multiple
                    solo
                  ></v-select>
                </div>
                <div v-if="itemColF.id_tipo_campo == 14">
                  <label style="margin-top: 10px">{{
                    itemColF.etiqueta[0].toUpperCase() +
                    itemColF.etiqueta.substring(1).toLowerCase()
                  }}</label>
                  <select
                    v-model="itemColF.ingreso_usuario"
                    class="form-control"
                  >
                    <option
                      v-for="opciones in contenido_h"
                      :key="opciones.value"
                      :value="opciones.value + ',' + opciones.text"
                    >
                      {{ opciones.text }}
                    </option>
                  </select>
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
              color: var(--roofsie-gray);
            "
            >{{ itemCol.objAdjunto.etiqueta }}</v-card-title
          >
          <hr style="margin-bottom: 0px" />
          <template v-if="itemCol.objAdjunto.multiple == false">
            <template v-if="itemCol.objAdjunto.ingreso_usuario != ''">
              <v-alert
                v-if="
                  itemCol.objAdjunto.extenciones_aceptadas == 'application/pdf'
                "
                color="primary"
                class="d-flex align-items-center"
                @close="alert"
                style="
                  word-wrap: break-word;
                  background-color: #fff;
                  background-clip: border-box;
                  border: 1px solid rgba(0, 0, 0, 0.125);
                  border-radius: 0.25rem;
                "
              >
                <span
                  class="fa fa-reader"
                  size="xl"
                  style="
                    height: 60px;
                    width: 60px;
                    background-color: #d53149;
                    margin-right: 15px;
                    color: white;
                    padding: 10px;
                  "
                ></span>
                <div style="color: gray">
                  {{ itemCol.objAdjunto.descripcion }}
                </div>
                <v-btn
                  @click="clearPdf()"
                  style="right: 0; position: absolute; box-shadow: none"
                >
                  <span span="fa fa-delete" size="xl" style="color: red"></span>
                </v-btn>
              </v-alert>
              <v-alert
                v-if="itemCol.objAdjunto.extenciones_aceptadas == 'image/*'"
                style="display: inline-flex; margin-right: 5px"
              >
                <v-btn
                  @click="iniciaEliminar(index)"
                  style="right: 0; position: absolute; box-shadow: none"
                >
                  <span
                    class="fa fa-delete"
                    size="xl"
                    style="
                      border: solid;
                      border-radius: 50%;
                      padding: 2px;
                      background: red;
                      color: white;
                    "
                  ></span>
                </v-btn>
                <img
                  :src="itemCol.objAdjunto.ingreso_usuario"
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
            <template v-else>
              <label style="margin-top: 25px">Subir Archivos</label>
              <v-file-input
                :accept="itemCol.objAdjunto.extenciones_aceptadas"
                label="File input"
                :id="itemCol.objAdjunto.nombre"
                @change="handleImage($event, i + ic)"
              ></v-file-input>
            </template>
          </template>
          <template v-else>
            <label style="margin-top: 25px">Subir Archivos</label>
            <v-file-input
              :accept="itemCol.objAdjunto.extenciones_aceptadas"
              :id="itemCol.objAdjunto.nombre"
              @change="handleImageMultipla($event)"
              multiple
              label="File input"
            ></v-file-input>
            <v-alert
              v-for="(image, index) in images"
              :key="index"
              style="display: inline-flex; margin-right: 5px"
            >
              <v-btn
                @click="iniciaEliminar(index)"
                style="right: 0; position: absolute; box-shadow: none"
              >
                <span
                  class="fa fa-delete"
                  size="xl"
                  style="
                    border: solid;
                    border-radius: 50%;
                    padding: 2px;
                    background: red;
                    color: white;
                  "
                ></span>
              </v-btn>
              <img
                :src="image"
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
      </v-col>
    </v-row>

    <v-row style="margin-top: 0; padding-top: 0">
      <v-col cols="12">
        <v-alert v-if="error" elevation="7" shaped color="danger">{{
          this.textoError
        }}</v-alert>

        <v-btn
          @click="btnSigPrueba(paso, 0)"
          class="btn btn-primary shadow-md me-2"
          style="float: left"
        >
          <i class="pi pi-arrow-left"></i><span>&nbsp;&nbsp;Anterior</span>
        </v-btn>
        <v-btn
          type="button"
          @click="btnSigPrueba(paso, 1)"
          class="btn btn-primary shadow-md me-2"
          style="float: right"
        >
          <span>Siguiente</span>&nbsp;&nbsp;<i class="pi pi-arrow-right"></i>
        </v-btn>
      </v-col>
    </v-row>
    <!--<CModal
      style="margin-top: 150px !important"
      :visible="visibleLiveDemo"
      @close="
        () => {
          visibleLiveDemo = false;
        }
      "
    >
      <CModalBody style="text-align: center">
        <i class="pi pi-times btn-delete"></i>
        <h3>¿Esta seguro de volver atras?</h3>
        <p style="padding-left: 25%; padding-right: 25%">
          Si elige continuar se descartaran los cambios realizados en el paso
          actual
        </p>
        <CButton
          style="background: white; color: #6c757d !important"
          color="secondary"
          @click="
            () => {
              visibleLiveDemo = false;
            }
          "
        >
          Cancelar </CButton
        >&nbsp;
        <CButton
          @click="btnAnterior_clickHijo()"
          color="primary"
          style="
            color: #fff !important;
            background-color: rgb(173 16 41) !important;
            border-color: rgb(173 16 41) !important;
          "
          >Aceptar</CButton
        >
      </CModalBody>
    </CModal>
    <CModal
      style="margin-top: 150px !important"
      :visible="modalQuitarImage"
      @close="
        () => {
          modalQuitarImage = false;
        }
      "
    >
      <CModalBody style="text-align: center">
        <i class="pi pi-times btn-delete"></i>
        <h3>¿Esta seguro de quitar la imagen?</h3>
        <p style="padding-left: 25%; padding-right: 25%"></p>
        <CButton
          style="background: white; color: #6c757d !important; margin-top: 25px"
          color="secondary"
          @click="
            () => {
              modalQuitarImage = false;
            }
          "
        >
          Cancelar </CButton
        >&nbsp;
        <CButton
          @click="clearPdfMultiple()"
          color="primary"
          style="
            color: #fff !important;
            background-color: rgb(173 16 41) !important;
            border-color: rgb(173 16 41) !important;
          "
          >Aceptar</CButton
        >
      </CModalBody>
    </CModal>-->
  </v-form>
</template>

<script>
export default {
  components: {},
  data: () => ({
    modalQuitarImage: false,
    images: [],
    visibleLiveDemo: false,
    maxValue: 0,
    text: "",
    value: "",
    chkDJJ: false,
    chipErrorDDJJ: false,
    nroPaso: 2,
    error: false,
    contador: 0,
    textoError: "",
    habilita: false,
    errors: [],
    multisel: null,
    datosCompletos: null,
    files: [],
    base64String: "",
    cuit: "",
    descripcion: "",
    pdestino: 0,
    pdireccion: 0,
    contenido_h: [],
    base64StringsM: [],
    indice_imagen: 0,
    filasUnicas: [],
  }),
  mounted() {
    this.datosCompletos = this.formulario;
    this.contenido_h = this.$store.getters.origen_hijo;
    this.images = this.$store.getters.getPreviaImagenes;
    this.base64StringsM = this.$store.getters.getImagenes;
    this.filasUnicas = this.datosCompletos.filter(
      (filas, index, self) =>
        index === self.findIndex((f) => f.row === filas.row)
    );
    //const store = useStore()
    // alert(store.cuit)
  },
  props: {
    formulario: {
      type: Array,
      required: true,
      default: () => [],
    },
    paso: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    btnSigPrueba(pasoDestino, direccion) {
      this.$emit("tengo_resultados", pasoDestino, direccion);
    },
    iniciaEliminar(indexCol) {
      this.indice_imagen = indexCol;
      this.modalQuitarImage = true;
    },
    CambiaValor(event, cont) {
      const contenido = cont;
      const elejido = event.target.value.split(",")[0];
      this.contenido_h = contenido.filter((city) => city.cod_enlaza == elejido);
      this.$store.commit("setOrigen_hijo", this.contenido_h);
    },
    alert() {
      alert("👋 Well, hi there! Thanks for dismissing me.");
    },
    handleImage(evt, index) {
      const file = evt.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        this.datosCompletos[0].objAdjunto.descripcion = file.name;
        this.datosCompletos[index].objAdjunto.ingreso_usuario =
          this.base64String;
        this.error = false;
        this.textoError = "";
      };
    },
    handleImageMultipla(evt) {
      const files = evt.target.files;
      const readers = [];

      for (let i = 0; i < files.length; i++) {
        readers[i] = new FileReader();
        readers[i].readAsDataURL(files[i]);

        readers[i].onload = () => {
          this.base64StringsM.push(
            readers[i].result.replace("data:", "").replace(/^.+,/, "")
          );
          this.images.push(readers[i].result);
        };
      }
      this.datosCompletos[0].objAdjunto.descripcion = "Images Multiples";
      this.error = false;
      this.textoError = "";
    },
    clearPdf() {
      this.datosCompletos[0].objAdjunto.descripcion = "";
      this.datosCompletos[0].objAdjunto.ingreso_usuario = "";
      this.base64String = "";
    },
    clearPdfMultiple() {
      alert(this.indice_imagen);
      this.images.splice(this.indice_imagen, 1);
      this.base64StringsM.splice(this.indice_imagen, 1);
      this.modalQuitarImage = false;
    },
    btnSiguiente_clickHijo(pasoDestino, direccion) {
      var control = false;
      //var cont = 0
      if (direccion == 1) {
        if (this.datosCompletos != null) {
          for (var i = 0; i < this.datosCompletos.length; i++) {
            if (this.datosCompletos[i].id_ddjj != 0) {
              if (this.chkDJJ == false) {
                control = true;
                return;
              }
            }
            if (this.datosCompletos[i].id_adjunto != 0) {
              if (this.datosCompletos[i].objAdjunto.requerido == 1) {
                if (this.datosCompletos[i].objAdjunto.multiple == false) {
                  if (this.base64String == "") {
                    if (
                      this.datosCompletos[i].objAdjunto.ingreso_usuario == ""
                    ) {
                      control = true;
                      this.error = true;
                      this.textoError = "Por favor selecciona un archivo";
                      return;
                    }
                  } else {
                    this.datosCompletos[i].objAdjunto.ingreso_usuario =
                      this.base64String;
                  }
                } else {
                  if (this.base64StringsM.length == 0) {
                    if (
                      this.datosCompletos[i].objAdjunto.ingreso_usuario == ""
                    ) {
                      control = true;
                      this.error = true;
                      this.textoError = "Por favor selecciona un archivo";
                      return;
                    }
                  } else {
                    this.datosCompletos[i].objAdjunto.ingreso_usuario =
                      this.base64StringsM;
                    this.$store.commit("setImagenes", this.base64StringsM);
                    this.$store.commit("setPreviaImagenes", this.images);
                  }
                }
              }
            }

            if (this.datosCompletos[i].id_formulario != 0) {
              for (
                var e = 0;
                e < this.datosCompletos[i].objFormulario.lstCampos.length;
                e++
              ) {
                if (
                  this.datosCompletos[i].objFormulario.lstCampos[e].requerido ==
                  1
                ) {
                  //var campo = document.getElementById(
                  //  this.formulario[i].objFormulario.lstCampos[e].nombre,
                  //)
                  if (
                    !this.datosCompletos[i].objFormulario.lstCampos[e]
                      .ingreso_usuario
                  ) {
                    /*campo.removeAttribute('class', 'is-valid')
                  campo.classList.add('form-control')
                  campo.classList.add('is-invalid')*/
                    control = true;
                  }
                  /*else {
                  campo.removeAttribute('class', 'is-invalid')
                  campo.classList.add('form-control')
                  campo.classList.add('is-valid')
                }*/
                }
              }
            }
            this.$store.commit("addItem", this.datosCompletos[i]);
            /*cont = this.$pasoCompleto.findIndex(
              (object) => object.id === this.datosCompletos[i].id,
            )
            if (cont == -1) {
              this.$pasoCompleto.push(this.datosCompletos[i])
            }*/
          }
        }
      } else {
        this.visibleLiveDemo = true;
        this.pdestino = pasoDestino;
        this.pdireccion = direccion;
        return;
      }
      if (!control) this.$emit("tengo_resultados", pasoDestino, direccion);
    },
    btnAnterior_clickHijo() {
      this.visibleLiveDemo = false;
      this.$emit("tengo_resultados", this.pdestino, this.pdireccion);
    },
  },
};
</script>
