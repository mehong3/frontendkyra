<template>
   <section class="content">
    <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-grid">
              <div class="image"><img style="border-radius: 50%; height: 30vh; width: 15vw; margin-top: 2vh;" src="/static//img//stock/user2-128x128.jpg" /></div>
              <div class="name"><b>{{nama}}</b></div>                         
                <div class="pelajaran">Pelajaran</div>
                <div class="info-pelajaran" @click="redirectToPelajaran"> <span> {{pelajaran}} </span> </div>
                <div class="tempat"> Tempat </div> 
                <div class="info-tempat">{{tempat}}</div>
                <div class="tanggal"> Tanggal </div>                             
                <div class="info-tanggal">{{tanggal}}</div>
                <div class="waktu"> Waktu </div>                             
                <div class="info-waktu">{{mulai}}-{{selesai}}</div>
                <div class="mahasiswa">Mahasiswa</div>
                <div class="info-mahasiswa">
                  <ul style="list-style-type:none; padding-inline-start:0;">
                    <li v-for="item in mahasiswa" @click="redirectToMahasiswa"><span>{{item}}</span></li>
                  </ul> 
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
      title: 'Jadwal',
      nama: 'Matematika 101',
      pelajaran: 'Matematika',
      tempat: 'Lab',
      tanggal: '16 Februari 2021',
      mulai: '16.00',
      selesai: '17.30',
      mahasiswa: ['Gabriel Fabiano', 'Enryl Einhard']
    }
  },
  methods: {
    redirectToMahasiswa() {
      window.location.href = '/datasiswa'
    },
    redirectToPelajaran() {
      window.location.href = '/datapelajaran'
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

.box-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows:1fr 1fr 1fr  repeat(6, 0.5fr);
  grid-column-gap: 0px;
  grid-row-gap: 0.5vh;
}

.image {
  grid-area: 1 / 1 / 4 / 3;
  justify-self: center;
  align-self: center;
}

.name {
  grid-area: 4 / 1 / 5 / 3; 
  justify-self: center;
  align-self: center;
  font-size: 3vw;
}

.pelajaran {
  grid-area: 5 / 1 / 6 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}

.info-pelajaran {
  grid-area: 5 / 2 / 6 / 3;
  align-self: center;
  font-size: 1vw;
}

.tempat {
  grid-area: 6 / 1 / 7 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}

.info-tempat {
  grid-area: 6 / 2 / 7 / 3;
  align-self: center;
  font-size: 1.5vw;
}
.tanggal {
  grid-area: 7 / 1 / 8 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}
.info-tanggal {
  grid-area: 7 / 2 / 8 / 3;
  align-self: center;
  font-size: 1.5vw;
}
.waktu {
  grid-area: 8 / 1 / 9 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}
.info-waktu {
  grid-area: 8 / 2 / 9 / 3;
  align-self: center;
  font-size: 1.5vw;
}
.mahasiswa {
  grid-area: 9 / 1 / 10 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}
.info-mahasiswa {
  grid-area: 9 / 2 / 10 / 3;
  align-self: center;
  font-size: 1vw;
}
.info-mahasiswa li {
  text-align: left;
  width: auto;
  margin-top: 1%;
}
.info-mahasiswa span {
  background-color: #007bff;
  border-radius: 5%;
  padding: 0.3% 0.7%;
  transition: 0.5s ease;
  color: white;
}
.info-mahasiswa span:hover {
  background-color: #1c5fa7;
  box-shadow: 0 2px 2px rgba(0,0,0,0.20), 0 2px 2px rgba(0,0,0,0.30);
}
.info-pelajaran span {
  background-color: #007bff;
  border-radius: 5%;
  padding: 0.3% 0.7%;
  transition: 0.5s ease;
  color: white;
}
.info-pelajaran span:hover {
  background-color: #1c5fa7;
  box-shadow: 0 2px 2px rgba(0,0,0,0.20), 0 2px 2px rgba(0,0,0,0.30);
}
</style>
