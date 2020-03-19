import axios from 'axios'

/* const couchUrl = 'http://admin:12345@localhost:5984' */

var queryType = {
  MUTATION: 1,
  QUERY: 0
}

/* function getDate () {
  var today = new Date()
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  var dateTime = date + ' ' + time
  return dateTime
} */

export default {
  async execute (type, inputQuery) {
    var queryAxios = inputQuery
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000/graphql',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    }
    if (type === queryType.MUTATION) {
      queryAxios = 'mutation ' + inputQuery
    }
    try {
      // console.log('Execute: ' + queryAxios)
      const res = await axios.post('http://localhost:3000/graphql',
        {query: queryAxios},
        {headers: headers}
      )
      return res.data
    } catch (e) {
      // console.log('err', e)
    }
  },
  addMahasiswa (data) {
    var mutation = `mutation{ addMahasiswa(
      nama: "${data.nama}", 
      nim: "${data.nim}",
      rfid: "${data.rfid}",
      pelajarans: "${data.pelajarans}",
      jadwals: "${data.jadwals}"){ nama nim }}`
    // console.log(mutation)
    return this.execute(queryType.MUTATION, mutation)
  },
  listMahasiswa () {
    var query = `query{
      mahasiswas{
        nama
        nim 
      }
    }`
    return this.execute(queryType.QUERY, query)
  },
  addPelajaran (data) {
    var mutation = `mutation{ addPelajaran(
      nama: "${data.nama}",
      guru: "${data.guru}".
      female: "${data.female}",
      mahasiswas: "${data.mahasiswa}"){ nama guru female mahasiswas}}`
    return this.execute(queryType.MUTATION, mutation)
  }
}
