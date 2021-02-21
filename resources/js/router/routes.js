import home from '../components/DashboardComponent'
import profile from '../components/ProfileComponent'
export default [
    {
    path: '/',
    component: home,
    name: 'DashboardComponent'
    },
    {
        path: '/profile',
        component: profile,
        name: 'ProfileComponent'
    }
]