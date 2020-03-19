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
                  label="Nama Pelajaran:"
                  label-for="input-1"
                  description="Masukan Nama Pelajaran!"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.namapelajaran"
                    type="Nama Pelajaran"
                    required
                    placeholder="Masukan Nama Pelajaran"
                  ></b-form-input>
                </b-form-group>

                 <div>
                    <label for="example-datepicker">Choose a date</label>
                    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                    <p>Value: '{{ value }}'</p>
                </div>

                <b-form-group id="input-group-2" label="Guru:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.guru"
                    required
                    placeholder="Masukan Nama Guru"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Mahasiswa:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.mahasiswa"
                    required
                    placeholder="Masukan Nama Mahasiswa"
                  ></b-form-input>
                </b-form-group>

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
  name: 'UpdatePelajaran',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      form: {
        namapelajaran: '',
        tanggal: '',
        guru: '',
        mahasiswa: ''
      },
      show: true,
      value: ''
    }
  },
  methods: {
    onSubmit(evt) {
      this.form.tanggal = this.value
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.namapelajaran = ''
      this.form.guru = ''
      this.form.mahasiswa = ''
      this.from.tanggal = ''
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
