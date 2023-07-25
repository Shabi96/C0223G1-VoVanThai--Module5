import { useDispatch, useSelector } from 'react-redux';
import { getUserList, deleteUser } from '../store/actions/userAction';

export default function UserList() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users);

    function deleteUserById(id) {
        if (window.confirm("Are you sure delete user by id: " + id)) {
            dispatch(deleteUser(id));
        }
    }

    return (
        <>
            <h1>User List</h1>
            <button onClick={() => dispatch(getUserList())}>Get User</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button onClick={() => deleteUserById(user.id)}>Delete User</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
} 