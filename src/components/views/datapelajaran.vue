<template>
   <section class="content">
    <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
          <div class="box-grid">
              <div class="image"><img style="border-radius: 50%; height: 30vh; width: 15vw; margin-top: 2vh;" src="/static//img//stock/user2-128x128.jpg" /></div>
              <div class="name"><b>{{nama}}</b></div>                         
                <div class="guru">Nama Guru</div>
                <div class="info-guru"> {{guru}}</div>                           
                <div class="gender">Jenis Kelamin</div>
                <div class="info-gender"> {{female ? 'Perempuan':'Laki-laki'}} </div>                         
                <div class="jadwal">Jadwal</div>
                <div class="info-jadwal"> 
                  <ul style="list-style-type:none; padding-inline-start:0;">
                    <li v-for="item in jadwal" @click="redirectToJadwal"><span>{{item}}</span></li>
                  </ul> 
                </div>                         
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
      nama: 'Matematika',
      female: true,
      guru: 'Benedictus Harris Hutama',
      jadwal: ['Matematika 101', 'Matematika 101', 'Matematika 102'],
      mahasiswa: ['Gabriel Fabiano', 'Enryl Einhard']
    }
  },
  methods: {
    redirectToMahasiswa() {
      window.location.href = '/datasiswa'
    },
    redirectToJadwal() {
      window.location.href = '/datajadwal'
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
  grid-template-rows:1.5fr 1.5fr 1.5fr  repeat(6, 1fr);
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

.guru {
  grid-area: 5 / 1 / 6 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}

.info-guru {
  grid-area: 5 / 2 / 6 / 3;
  align-self: center;
  font-size: 1.5vw;
}

.gender {
  grid-area: 6 / 1 / 7 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}

.info-gender {
  grid-area: 6 / 2 / 7 / 3;
  align-self: center;
  font-size: 1.5vw;
}

.jadwal {
  grid-area: 7 / 1 / 8 / 2;
  align-self: center;
  padding-left: 75%;
  font-size: 1.5vw;
  vertical-align: bottom;
}

.info-jadwal {
  grid-area: 7 / 2 / 8 / 3;
  align-self: flex-start;
  font-size: 1vw;
}

.mahasiswa {
  grid-area: 8 / 1 / 9 / 2; 
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}

.info-mahasiswa {
  grid-area: 8 / 2 / 9 / 3;
  align-self: center;
  font-size: 1vw;
}
.info-jadwal li {
  text-align: left;
  width: auto;
  margin-top: 1%;
}
.info-jadwal span {
  background-color: #007bff;
  border-radius: 5%;
  padding: 0.3% 0.7%;
  transition: 0.5s ease;
  color: white;
}
.info-jadwal span:hover {
  background-color: #1c5fa7;
  box-shadow: 0 2px 2px rgba(0,0,0,0.20), 0 2px 2px rgba(0,0,0,0.30);
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
</style>
