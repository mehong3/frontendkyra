<template>
   <section class="content">
    <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
          <div class="box-grid">
              <div class="image"><img style="border-radius: 50%; height: 30vh; width: 15vw; margin-top: 2vh;" src="/static//img//stock/user2-128x128.jpg" /></div>
              <div class="name"><b>{{nama}}</b></div>                         
                <div class="gender">Jenis Kelamin</div>
                <div class="info-gender"> {{female ? 'Perempuan':'Laki-laki'}}</div>                           
                <div class="nim">NIM</div>
                <div class="info-nim"> {{nim}} </div>                         
                <div class="pelajaran">Pelajaran</div>
                <div class="info-pelajaran"> 
                  <ul style="list-style-type:none; padding-inline-start:0;">
                    <li v-for="item in pelajaran" @click="redirectToPelajaran"><span>{{item}}</span></li>
                  </ul> 
                </div>                         
                <div class="jadwal">Jadwal</div>
                <div class="info-jadwal">
                  <ul style="list-style-type:none; padding-inline-start:0;">
                    <li v-for="item in jadwal" @click="redirectToJadwal"><span>{{item}}</span></li>
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
      nama: 'Gabriel Fabiano',
      female: false,
      nim: '1813414',
      pelajaran: ['Matematika', 'Biologi'],
      jadwal: ['Mat 101', 'Biologi 101', 'Biologi 102']
    }
  },
  methods: {
    redirectToPelajaran() {
      window.location.href = '/datapelajaran'
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

.gender {
  grid-area: 5 / 1 / 6 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}

.info-gender {
  grid-area: 5 / 2 / 6 / 3;
  align-self: center;
  font-size: 1.5vw;
}

.nim {
  grid-area: 6 / 1 / 7 / 2;
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}

.info-nim {
  grid-area: 6 / 2 / 7 / 3;
  align-self: center;
  font-size: 1.5vw;
}

.pelajaran {
  grid-area: 7 / 1 / 8 / 2;
  align-self: center;
  padding-left: 75%;
  font-size: 1.5vw;
  vertical-align: bottom;
}

.info-pelajaran {
  grid-area: 7 / 2 / 8 / 3;
  align-self: flex-start;
  font-size: 1vw;
}

.jadwal {
  grid-area: 8 / 1 / 9 / 2; 
  align-self: center;
  justify-self: start;
  padding-left: 75%;
  font-size: 1.5vw;
}

.info-jadwal {
  grid-area: 8 / 2 / 9 / 3;
  align-self: center;
  font-size: 1vw;
}
.info-pelajaran li {
  text-align: left;
  width: auto;
  margin-top: 1%;
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
</style>

