<template>
   <section class="content">
    <div class="row center-block">
      <h2>Pelajaran</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tabel Data Pelajaran</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Nama: activate to sort column ascending" style="width: 200px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Nama Pelajaran</th>
                        <th aria-label="Guru: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Guru</th>
                        <th aria-label="Mahasiswa: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Mahasiswa</th>
                        <th aria-label="Jadwal: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Jadwal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Blink</td>
                        <td>Iridium  54.0</td>
                        <td>GNU/Linux</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Firefox 1.0</td>
                        <td>Win 98+ / OSX.2+</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Firefox 1.5</td>
                        <td>Win 98+ / OSX.2+</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Firefox 2.0</td>
                        <td>Win 98+ / OSX.2+</td>
                      </tr>
                      <tr class="even" role="row"> 
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>                      
                        <td class="sorting_1">ASU</td>
                        <td>Firefox 3.0</td>
                        <td>Win 2k+ / OSX.3+</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Camino 1.0</td>
                        <td>OSX.2+</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Camino 1.5</td>
                        <td>OSX.3+</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Netscape 7.2</td>
                        <td>Win 95+ / Mac OS 8.6-9.2</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Netscape RFID 8</td>
                        <td>Win 98SE+</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Netscape Navigator 9</td>
                        <td>Win 98+ / OSX.2+</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                        <td class="sorting_1">Gecko</td>
                        <td>Mozilla 1.0</td>
                        <td>Win 95+ / OSX.1+</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="1" rowspan="1"></th>
                        <th colspan="1" rowspan="1">Nama</th>
                        <th colspan="1" rowspan="1">RFID</th>
                        <th colspan="1" rowspan="1">Attendance</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
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
  name: 'Pelajaran',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
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
</style>
