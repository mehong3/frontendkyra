import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import Mahasiswa from './components/views/mahasiswa.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import ScheduleView from './components/views/Schedule.vue'
import PelajaranView from './components/views/Pelajaran.vue'
import AddStudent from './components/views/addstudent.vue'
import UpdateStudent from './components/views/updatestudent.vue'
import AddPelajaran from './components/views/addpelajaran.vue'
import UpdatePelajaran from './components/views/updatepelajaran.vue'
import AddSchedule from './components/views/addschedule.vue'
import UpdateSchedule from './components/views/updateschedule.vue'
import Profil from './components/views/profil.vue'
import ProfilPelajaran from './components/views/profilpelajaran.vue'
import ProfilSchedule from './components/views/profilschedule.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'mahasiswa',
        component: Mahasiswa,
        name: 'Mahasiswa',
        meta: {description: 'Daftar Mahasiswa'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'pelajaran',
        component: PelajaranView,
        name: 'Pelajaran',
        meta: {description: 'List of pelajaran'}
      }, {
        path: 'schedule',
        component: ScheduleView,
        name: 'Schedule',
        meta: {description: 'List of schedule'}
      }, {
        path: 'addstudent',
        component: AddStudent,
        name: 'Add Student',
        meta: {description: 'Tambah Murid'}
      }, {
        path: 'updatestudent',
        component: UpdateStudent,
        name: 'Update Student',
        meta: {description: 'Update Murid'}
      }, {
        path: 'addpelajaran',
        component: AddPelajaran,
        name: 'Add Pelajaran',
        meta: {description: 'Tambah Pelajaran'}
      }, {
        path: 'updatepelajaran',
        component: UpdatePelajaran,
        name: 'Update Pelajaran',
        meta: {description: 'Update Pelajaran'}
      }, {
        path: 'addschedule',
        component: AddSchedule,
        name: 'Add Schedule',
        meta: {description: 'Tambah Schedule'}
      }, {
        path: 'updateschedule',
        component: UpdateSchedule,
        name: 'Update Schedule',
        meta: {description: 'Update Schedule'}
      }, {
        path: 'profil',
        component: Profil,
        name: 'Profil',
        meta: {description: 'Profil Siswa'}
      }, {
        path: 'profilpelajaran',
        component: ProfilPelajaran,
        name: 'ProfilPelajaran',
        meta: {description: 'Profil Pelajaran'}
      }, {
        path: 'profilschedule',
        component: ProfilSchedule,
        name: 'ProfilSchedule',
        meta: {description: 'Profil Schedule'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
