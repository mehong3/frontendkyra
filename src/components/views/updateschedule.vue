<template>
   <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tambah Pelajaran</h3>
              
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                  id="input-group-1"
                  label="Pelajaran:"
                  label-for="input-1"
                  description="Masukkan Pelajaran"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.pelajaran"
                    type="pelajaran"
                    required
                    placeholder="Masukan Pelajaran"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="mahasiswa" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.mahasiswa"
                    required
                    placeholder="Masukan Mahasiswa"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Tempat:" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tempat"
                    :options="tempat"
                    required
                  ></b-form-select>
               </b-form-group>

                <div>
                  <label for="example-datepicker">Choose a date</label>
                  <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                  <p>Value: '{{ value }}'</p>
                </div>

                <div>
                  <b-form-timepicker v-model="value2" locale="en"></b-form-timepicker>
                  <div class="mt-2">Value2: '{{ value2 }}'</div>
                </div>

                <div>
                  <b-form-timepicker v-model="value3" locale="en"></b-form-timepicker>
                  <div class="mt-2">Value3: '{{ value3 }}'</div>
                </div>                 

                <div class="button">
                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </div> 
              </b-form>
              <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import $ from 'jquery'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'UpdateSchedule',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      form: {
        pelajaran: '',
        mahasiswa: '',
        tempat: null,
        tanggal: '',
        mulai: '',
        selesai: ''
      },
      value: '',
      value2: '',
      value3: '',
      tempat: [{ text: 'Pilih Tempat', value: null }, 'Lab', 'Ruang 1', 'Ruang 2', 'Ruang 3'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      this.form.tanggal = this.value
      this.form.mulai = this.value2
      this.form.selesai = this.value3
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.id = ''
      this.form.tanggal = ''
      this.form.mulai = ''
      this.form.selesai = ''
      this.form.pelajaran = ''
      this.form.mahasiswa = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: '\f0dc';
}


table.dataTable thead .sorting_asc:after {
  content: '\f0dd';
}

table.dataTable thead .sorting_desc:after {
  content: '\f0de';
}

button {
  width: 10%;
}

.row .image img {
  border-radius: 50%
}
</style>
