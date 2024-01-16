import styles from './app.module.scss'
import { Header } from './components/Header/Header'
import MainRoutes from './router/MainRouters'

function App() {

  return (
    <div className={styles.container}>
      <Header />
      <MainRoutes />
    </div>
  )
}

export default App
