import React, { useState } from 'react'
import './style.css'
import Guy1 from '../../assets/images/Guy1.png';

function Users({ userList, setUserList }) {
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateUser, setUpdateUser] = useState({})
    const deleteUser = (user) => {
        setUserList(userList.filter(item => item.id !== user.id))
    }

    const changeUser = (e) => {
        setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
    }

    const updateList = () => {
        setUserList(userList.map(item => item.id === updateUser.id ? updateUser : item))
        setIsUpdate(false);
        setUpdateUser({})
    }

    const saveList = (user) => {
        setIsUpdate(true);
        setUpdateUser(user);
    }

    return (
        <div className='users'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>AVATAR</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userList.map(user => (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <th><img src={user.selectedAvatar} alt="" /></th>
                                <th>
                                    {user.id === updateUser.id ? (
                                        <input type="text" name="userName" value={updateUser.userName} onChange={changeUser} />
                                    ) : (
                                        <p>{user.userName}</p>
                                    )}
                                </th>

                                <th>
                                    {user.id === updateUser.id ? <input type="text" name="mail" value={updateUser.mail} onChange={changeUser} /> : user.mail}
                                </th>

                                <th>
                                    {user.id === updateUser.id ? <input type="text" name="pass" value={updateUser.pass} onChange={changeUser} /> : user.pass}
                                </th>


                                <th>
                                    <button onClick={() => isUpdate ? updateList() : saveList(user)}> {isUpdate ? "SAVE" : "UPDATE"}</button>
                                    <button onClick={() => deleteUser(user)}>DELETE</button>
                                </th>
                            </tr>
                        ))

                    }
                </tbody>
            </table>


        </div>
    )
}

export default Users



