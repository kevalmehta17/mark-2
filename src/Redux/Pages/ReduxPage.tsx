import { Provider } from 'react-redux'
import { store } from '../store/UserStore'
import UserForm from '../components/UserForm.tsx'
import UserSelectId from '../components/UserSelectId.tsx'
import FilterPanel from '../components/FilterPanel.tsx'
import UserTableList from '../components/UserTableList.tsx'

const ReduxPage = () => {
  return (
    <Provider store={store}>
      <UserForm />
      <UserSelectId />
      <FilterPanel />
      <UserTableList />
    </Provider>
  )
}

export default ReduxPage