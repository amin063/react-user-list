import React, { useEffect, useState } from 'react'
import './style.css'
import Guy1 from '../../assets/images/Guy1.png';
import Guy2 from '../../assets/images/Guy2.png';
import Guy3 from '../../assets/images/Guy3.png';
import Guy4 from '../../assets/images/Guy4.png';

function Form({ userList, setUserList }) {
    const [id, setId] = useState(0);
    const [userName, setuserName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState(Guy1);
    let user = {
        id: userList.length + 1,
        userName,
        mail,
        pass,
        selectedAvatar
    }



    const createUser = (e) => {
        e.preventDefault();
        setId(id + 1)
        user = {
            id,
            userName,
            mail,
            pass,
            selectedAvatar

        }
        if (userName && mail && pass) {
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
                    {[Guy1, Guy2, Guy3, Guy4].map((img, index) => (

                        <img key={index} src={img} onClick={() => setSelectedAvatar(img)}
                            style = {{
                                borderBottom: img === selectedAvatar ? '2px solid green': 'none'
                            }}
                         />
                    ))}


                    {/* <img src={Guy1} isSelect={false} onClick={selectAvatar} /> */}
                    {/* <img src={Guy2} isSelect={false} onClick={selectAvatar} /> */}
                    {/* <img src={Guy3} isSelect={false} onClick={selectAvatar} /> */}
                    {/* <img src={Guy4} isSelect={false} onClick={selectAvatar} /> */}
                </div>
                <input className="submit-btn" type="submit" />
            </form >
        </>
    )
}

export default Form