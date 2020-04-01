<template>
  <div class="row h-100">
    <div class="col-sm-12 my-auto">
      <div class="foto">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
              <h2>
                <b-card-text>Nama: {{pelajaranId.nama}}</b-card-text>
                <b-card-text>Female: {{pelajaranId.female}}</b-card-text>
                <b-card-text>Guru: {{pelajaranId.guru}}</b-card-text>
              </h2>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import api from '../../api/api'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'ProfilPelajaran',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  created() {
    var pelajaranId = this.$store.state.pelajaranId
    console.log(pelajaranId)
    api.getPelajaranById(pelajaranId).then((res) => {
      console.log(res.data.pelajaran)
      this.pelajaranId = res.data.pelajaran
      /* console.log(this.pelajaran) */
    })
  },
  data() {
    return {
      pelajaranId: []
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

.row .image img {
  border-radius: 50%
}
</style>
