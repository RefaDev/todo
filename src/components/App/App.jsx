import Todo from 'components/Todo/Todo'
import Layout from 'components/layout/Layout'
import 'scss/App.scss'
function App() {
  return (
    <div className='wrapper'>
      <Layout>
        <Todo />
      </Layout>
    </div>
  )
}

export default App
