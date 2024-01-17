import Header from './components/Header/Header.jsx'
import MainRoutes from './router/MainRouters.jsx'
import styles from './app.module.scss'

function App() {

  return (
    <div className={styles.container}>
      <Header />
      <MainRoutes />
    </div>
  )
}

export default App
