import React, { useEffect, useState } from 'react'
import './style.css'
import Guy1 from '../../assets/images/Guy1.png';
import Guy2 from '../../assets/images/Guy2.png';
import Guy3 from '../../assets/images/Guy3.png';
import Guy4 from '../../assets/images/Guy4.png';

function Form({userList, setUserList}) {
    const [id, setId] = useState(0);
    const [userName, setuserName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    let user = {
        id: userList.length + 1,
        userName,
        mail,
        pass
    }



    const createUser = (e) => {
        e.preventDefault();
        setId(id + 1)
        user = {
            id,
            userName,
            mail,
            pass

        }
        if(userName && mail && pass){
            setUserList([...userList, user]);
        }


        setuserName('');
        setMail('');
        setPass('');
        console.log(userList);

    }




    return (
        <>
            <form onSubmit={createUser}>
                <input type="text" placeholder='Enter name' value={userName} onChange={(e) => {
                    setuserName(e.target.value)
                }} />
                <input type="email" placeholder='Enter mail' value={mail} onChange={(e) => {
                    setMail(e.target.value)
                }} />
                <input type="text" placeholder='Enter password' value={pass} onChange={(e) => {
                    setPass(e.target.value)
                }} />
                <div className="form-images">
                    <img src={Guy1} />
                    <img src={Guy2} />
                    <img src={Guy3} />
                    <img src={Guy4} />
                </div>
                <input className="submit-btn" type="submit" />
            </form>
        </>
    )
}

export default Form