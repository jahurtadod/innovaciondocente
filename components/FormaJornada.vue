<template>
  <div>
    <h3>Valorá la jornada:</h3>
    <div class="form-group">
      <label for="preg_1">1. En relación a la jornada ¿Qué valoración le daría?</label>
      <br>
      <fieldset class="rating"
                name="preg_1">
        <input type="radio"
               id="preg_1_star5"
               name="preg_1_rating"
               v-model="forma.preg_1"
               value="5" />
        <label class="full"
               for="preg_1_star5"
               title="Excelente">
          <i class="fas fa-star"></i>
        </label>
        <input type="radio"
               id="preg_1_star4"
               name="preg_1_rating"
               v-model="forma.preg_1"
               value="4" />
        <label class="full"
               for="preg_1_star4"
               title="Muy bueno">
          <i class="fas fa-star"></i>
        </label>
        <input type="radio"
               id="preg_1_star3"
               name="preg_1_rating"
               v-model="forma.preg_1"
               value="3" />
        <label class="full"
               for="preg_1_star3"
               title="Bueno">
          <i class="fas fa-star"></i>
        </label>
        <input type="radio"
               id="preg_1_star2"
               name="preg_1_rating"
               v-model="forma.preg_1"
               value="2" />
        <label class="full"
               for="preg_1_star2"
               title="Regular">
          <i class="fas fa-star"></i>
        </label>
        <input type="radio"
               id="preg_1_star1"
               name="preg_1_rating"
               v-model="forma.preg_1"
               value="1" />
        <label class="full"
               for="preg_1_star1"
               title="Malo">
          <i class="fas fa-star"></i>
        </label>
      </fieldset>
      <br>
    </div>
    <div class="form-group">
      <label for="preg_2">2. Valore la aplicabilidad del tema: Desarrollo de competencias transversales en el aula de clases:
        innovación, creatividad y emprendimiento</label>
      <select v-model="forma.preg_2"
              class="form-control"
              id="preg_2"
              name="preg_2"
              v-validate="'required|not_in:Choose'">
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <span v-show="errors.has('preg_2')"
            class="alert alert-danger">Es requerido</span>
    </div>
    <div class="form-group">
      <label for="preg_2_1">2.1 ¿En qué aspectos te resulta aplicable el tema?</label>
      <select v-model="forma.preg_2_1"
              class="form-control"
              id="preg_2_1"
              name="preg_2_1"
              v-validate="'required|not_in:Choose'">
        <option value="Aspectos de docencia">Aspectos de docencia</option>
        <option value="Aspectos de investigacion">Aspectos de investigacion</option>
        <option value="Aspectos de vinculación con la sociedad">Aspectos de vinculación con la sociedad</option>
      </select>
      <span v-show="errors.has('preg_2_1')"
            class="alert alert-danger">Es requerido</span>
    </div>
    <div class="form-group">
      <label>3. Valore los siguientes aspectos contemplados en la jornada:</label>
      <div class="form-group">
        <label for="preg_3_1">
          3.1 Valore el contenido, metodología y organización general de la Jornada
        </label>
        <br>
        <fieldset class="rating"
                  name="preg_3_1">
          <input type="radio"
                 id="preg_3_1_star5"
                 name="preg_3_1_rating"
                 v-model="forma.preg_3_1"
                 value="5" />
          <label class="full"
                 for="preg_3_1_star5"
                 title="Excelente">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_1_star4"
                 name="preg_3_1_rating"
                 v-model="forma.preg_3_1"
                 value="4" />
          <label class="full"
                 for="preg_3_1_star4"
                 title="Muy bueno">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_1_star3"
                 name="preg_3_1_rating"
                 v-model="forma.preg_3_1"
                 value="3" />
          <label class="full"
                 for="preg_3_1_star3"
                 title="Bueno">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_1_star2"
                 name="preg_3_1_rating"
                 v-model="forma.preg_3_1"
                 value="2" />
          <label class="full"
                 for="preg_3_1_star2"
                 title="Regular">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_1_star1"
                 name="preg_3_1_rating"
                 v-model="forma.preg_3_1"
                 value="1" />
          <label class="full"
                 for="preg_3_1_star1"
                 title="Malo">
            <i class="fas fa-star"></i>
          </label>
        </fieldset>
        <br>
      </div>
      <div class="form-group">
        <label for="preg_3_2">
          3.2 Valore el contenido y metodología de la charla magistral "Un docente aprendiendo"
        </label>
        <br>
        <fieldset class="rating"
                  name="preg_3_2">
          <input type="radio"
                 id="preg_3_2_star5"
                 name="preg_3_2_rating"
                 v-model="forma.preg_3_2"
                 value="5" />
          <label class="full"
                 for="preg_3_2_star5"
                 title="Excelente">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_2_star4"
                 name="preg_3_2_rating"
                 v-model="forma.preg_3_2"
                 value="4" />
          <label class="full"
                 for="preg_3_2_star4"
                 title="Muy bueno">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_2_star3"
                 name="preg_3_2_rating"
                 v-model="forma.preg_3_2"
                 value="3" />
          <label class="full"
                 for="preg_3_2_star3"
                 title="Bueno">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_2_star2"
                 name="preg_3_2_rating"
                 v-model="forma.preg_3_2"
                 value="2" />
          <label class="full"
                 for="preg_3_2_star2"
                 title="Regular">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_2_star1"
                 name="preg_3_2_rating"
                 v-model="forma.preg_3_2"
                 value="1" />
          <label class="full"
                 for="preg_3_2_star1"
                 title="Malo">
            <i class="fas fa-star"></i>
          </label>
        </fieldset>
        <br>
      </div>
      <div class="form-group">
        <label for="preg_3_3">
          3.3 Valore el taller práctico"ADN Innovador".
        </label>
        <br>
        <fieldset class="rating"
                  name="preg_3_3">
          <input type="radio"
                 id="preg_3_3_star5"
                 name="preg_3_3_rating"
                 v-model="forma.preg_3_3"
                 value="5" />
          <label class="full"
                 for="preg_3_3_star5"
                 title="Excelente">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_3_star4"
                 name="preg_3_3_rating"
                 v-model="forma.preg_3_3"
                 value="4" />
          <label class="full"
                 for="preg_3_3_star4"
                 title="Muy bueno">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_3_star3"
                 name="preg_3_3_rating"
                 v-model="forma.preg_3_3"
                 value="3" />
          <label class="full"
                 for="preg_3_3_star3"
                 title="Bueno">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_3_star2"
                 name="preg_3_3_rating"
                 v-model="forma.preg_3_3"
                 value="2" />
          <label class="full"
                 for="preg_3_3_star2"
                 title="Regular">
            <i class="fas fa-star"></i>
          </label>
          <input type="radio"
                 id="preg_3_3_star1"
                 name="preg_3_3_rating"
                 v-model="forma.preg_3_3"
                 value="1" />
          <label class="full"
                 for="preg_3_3_star1"
                 title="Malo">
            <i class="fas fa-star"></i>
          </label>
        </fieldset>
        <br>
      </div>
    </div>
    <div class="form-group">
      <label for="preg_4">4. ¿Qué temáticas consideras importante que se traten en próximas jornadas?</label>
      <textarea v-model="forma.preg_4"
                type="text"
                name="preg_4"
                class="form-control"
                v-validate="'required'" />
      <span v-show="errors.has('preg_4')"
            class="alert alert-danger">Es requerido</span>
    </div>
    <div class="form-group">
      <label for="preg_5">5. Sugerencias</label>
      <textarea v-model="forma.preg_5"
                type="text"
                name="preg_5"
                class="form-control" />
    </div>
    <button @click="validateBeforeSubmit"
            class="btn btn-primary btn-large"
            v-bind:class="{ disabled: errors.items.length > 0 }"
            type="submit">
      Valorar
    </button>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    let forma = {
      preg_1: 1,
      preg_2: null,
      preg_2_1: null,
      preg_3_1: 1,
      preg_3_2: 1,
      preg_3_3: 1,
      preg_4: null,
      preg_5: null
    };
    return {
      forma
    };
  },
  props: ["LinkKey"],
  methods: {
    validateBeforeSubmit(e) {
      this.$validator
        .validateAll()
        .then(x => {
          // push to firebase
          axios
            .post(
              `https://innovaciondocente-utpl.firebaseio.com/formacion-docente/jornadas-de-reflexion/${
                this.LinkKey
              }/valoraciones.json`,
              this.forma
            )
            .then(function(response) {
              alert("Completado");
            })
            .catch(function(error) {
              console.log(error);
              alert("HA OCURRIDO UN ERROR, VUELVE A INTENTARLO");
            });
        })
        .catch(e => {
          console.log(e);
        });
      console.log(this.forma);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/alert";
@import "assets/form";

.rating {
  border: none;
  float: left;
}

.rating > input {
  display: none;
}
.rating > label {
  margin: 5px;
  font-size: 1em;
  display: inline-block;
}

.rating > label {
  color: $color-text;
  float: right;
}

.rating > input:checked ~ label,
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: $color-primary;
}

.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
  color: lighten($color: $color-primary, $amount: 40);
}
</style>

