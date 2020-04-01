<template>
   <section class="content">
    <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
          <div id="box-grid">
            <div class="info-siswa">
              <img src="/static//img//stock/user2-128x128.jpg" id="img-siswa"/>
              <div class="text-siswa">
                <p style="margin-bottom: 0;">{{jadwal.nama}}</p>
                <span class="pelajaran" @click="redirectToPelajaran">{{pelajaran}}</span>
                <p style="font-weight: 400; font-size: 1vw;">{{jadwal.tanggal}}</p>
                <p style="font-weight: 400; font-size: 1vw;">{{jadwal.tempat}}</p>
                <p style="font-weight: 400; font-size: 1vw;">{{jadwal.mulai}}-{{jadwal.selesai}}</p>
                <div class="button">
                  <b-button variant="danger" id="gaguna">Tombol</b-button> 
                  <b-button variant="success" style="margin-left: 0.5vw" id="gaguna">Tombol</b-button>
                </div>
              </div>
            </div>
            <div class="info-jdwl-pel">
                <b-tabs card>

                  <!-- Kartu Mahasiswa -->
                  <b-tab title="Mahasiswa" active button-id="tab1">
                    <b-card-text id="scroll">
                      <b-card-group deck>
                      <b-card @click="redirectToMahasiswa"
                        :header="mahasiswa.nama"
                        border-variant="primary"
                        header-text-variant="white"
                        class="mb-2 mt-4"
                        v-for="mahasiswa in mahasiswas" :key="mahasiswa.data"
                        id="cards"
                      >
                        <b-card-text>
                          NIM: {{mahasiswa.nim}} <br> Jenis kelamin: {{mahasiswa.female ? 'Perempuan' : 'Laki-laki'}}
                        </b-card-text>
                      </b-card>
                      </b-card-group>
                    </b-card-text>
                  </b-tab>
                </b-tabs>
            </div>
          </div>  
          </div>
          <div class="button">
            <b-button variant="primary" to="/" style="width: 10%;">Kembali</b-button>
          </div>
    </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'Finish',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      jadwal: {
        nama: 'Praktikum Biologi',
        tanggal: '5 April 2020',
        mulai: '08.00',
        selesai: '09.30',
        tempat: 'Laboratorium'
      },
      pelajaran: 'Biologi',
      mahasiswas: [
        {nama: 'Gabriel Fabiano', nim: '1813912', female: true},
        {nama: 'Benedictus Harris', nim: '1813408', female: false},
        {nama: 'Enryl Einhard', nim: '1813497', female: true},
        {nama: 'Ignatius Kresna', nim: '1813222', female: false},
        {nama: 'Stefan Rafael', nim: '1813101', female: false},
        {nama: 'Jovan Farel', nim: '1813854', female: true},
        {nama: 'Eugenius Edward', nim: '1813008', female: false},
        {nama: 'Billy Macarius', nim: '1813765', female: true}
      ]
    }
  },
  methods: {
    redirectToMahasiswa() {
      this.$router.push({name: 'Data Siswa'})
    },
    redirectToPelajaran() {
      this.$router.push({name: 'Data Pelajaran'})
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

.pelajaran {
  font-weight: 400; 
  font-size: 1.2vw; 
  background-color: #007bff; 
  border-radius: 5%; 
  padding: 5px; 
  color: white; 
  margin-top: 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: 0.5s ease;
}

.pelajaran:hover {
  background-color: #1673d6;
  box-shadow: 0 2px 4px rgba(0,0,0,0.17), 0 2px 5px rgba(0,0,0,0.3); 
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

#box-grid{
  display: grid;
  grid-template-columns: 0.75fr 2.25fr;
  grid-column-gap: 0.1vw;
  background: #f4f4f4;
}

.info-siswa {
  grid-area: 1 / 1 / 3 / 2;
  height: 70vh;
  display: grid;
  background: white;
}

.info-jdwl-pel {
  grid-area: 1 / 2 / 3 / 4;
  background: white;
  height: 70vh;
  overflow: hidden;
}

.text-siswa {
  text-align: center;
  font-weight: 600;
  font-size: 2vw;
}

#img-siswa {
  border-radius: 50%;
  height: 20vh; 
  width: 10vw; 
  margin-bottom: 3vh;
  justify-self: center;
  align-self: end;
}

#tab1 {
  font-size: 1vw;
  font-weight: 600;
  background-color: white;
}
#tab1:hover {
  background-color: #e7e7ee;
}

#tab2 {
  font-size: 1vw;
  font-weight: 600;
  background-color: white;
}
#tab2:hover {
  background-color: #e7e7ee;
}

.card-header {
  font-weight: 400;
  font-size: 1vw;
}
.card-title {
  font-weight: 600;
}
.card-text {
  font-size: 0.75vw;
}

#scroll {
  overflow-x: hidden; 
  overflow-y: scroll; 
  height: 60vh;
}

#scroll::-webkit-scrollbar {
    width: 1rem;
}
 
#scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
#scroll::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

#gaguna {
  width: 4vw;
}

#cards {
  max-width: 10vw; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
  min-width: 10vw; 
  background-color: white;
  transition: 0.5s ease;
}

#cards:hover {
  background-color: #f5f5f8;
  box-shadow: 0 2px 4px rgba(0,0,0,0.17), 0 2px 5px rgba(0,0,0,0.3); 
}

#cards .card-header {
  background-color: #007bff;
  transition: 0.5s ease
}

#cards:hover .card-header {
  background-color: #1673d6;
}
</style>
