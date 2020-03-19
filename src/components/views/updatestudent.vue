<template>
   <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tambah Data Murid</h3>
              
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                  id="input-group-1"
                  label="Nama:"
                  label-for="input-1"
                  description="Masukan Nama Murid!"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.nama"
                    type="nama"
                    required
                    placeholder="Masukan Nama"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="RFID:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.rfid"
                    required
                    placeholder="Masukan RFID"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="NIM:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.nim"
                    required
                    placeholder="Masukan NIM"
                  ></b-form-input>
                </b-form-group>

                <div >
                  <b-form-group id="input-group-4" label="Foto:" label-for="input-4">
                  <!-- Styled -->
                  <b-form-file
                    v-model="file"
                    :state="Boolean(file)"
                    placeholder="Masukan Foto"
                    drop-placeholder="Masukan Foto Murid"
                  ></b-form-file>
                  <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
                  </b-form-group>
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
  name: 'UpdateStudent',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      form: {
        nama: '',
        rfid: '',
        nim: '',
        file: null
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.nama = ''
      this.form.rfid = ''
      this.form.nim = ''
      this.file = null
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
