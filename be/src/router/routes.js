import views from './view'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: views.Login
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: views.Dashboard
  },

  {
    path: '/article',
    name: 'ArticleList',
    component: views.ArticleList
  },

  {
    path: '/article/new',
    name: 'NewArticle',
    component: views.Article
  },
]

export default routes