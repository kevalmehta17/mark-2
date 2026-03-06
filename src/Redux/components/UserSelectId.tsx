import { useDispatch, useSelector } from 'react-redux';
import { clearInputData, selectId, showInputData } from '../store/UserSlice';

interface User {
  id: string | number;
}

const UserSelectId = () => {
  const getAllId = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  console.log('getAllId', getAllId);

  const handleIdChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const id = Number(e.target.value);
    console.log('selectedId is', id);
    if (!id) {
      console.log("no id selected");
      dispatch(clearInputData());
      return;
    }
    dispatch(selectId(id));
    dispatch(showInputData(id));
  };
  return (
    <div>
      <label>Select based on ID:</label>
      <select onChange={handleIdChange}>
        <option value="">Select Id</option>
        {getAllId.map((user: User) => (
          <option key={user.id} value={user.id}>
            {user.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelectId;
