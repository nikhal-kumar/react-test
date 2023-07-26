import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons'

function UserInfo() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then(res => {
                setUserData(res)
            })
            .catch((error) => console.log('Error fetching data:', error));
    }, [])

    const handleRemoveCards = (item) => {
        let newUsers = userData.filter(
            (record) => record.id !== item.id
        );
        setUserData(newUsers);
    }

    return (
        <>
            <h1 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: '#008CBA', fontWeight: '700' }}>User Details Cards</h1>

            <div style={{ display: 'grid', gridTemplateRows: 'aut0 auto auto', gridTemplateColumns: 'auto auto auto' }}>
                {userData.length && userData?.map((item, index) => {
                    return (
                        <div style={{ display: 'flex' }}>

                            <div style={{ border: '1px solid black', width: 300, padding: '20px', margin: '20px', borderRadius: '10px' }}>
                                <MinusCircleOutlined onClick={() => handleRemoveCards(item)} />
                                <Card key={index} title={item.name} bordered={false} >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                                        <img src="./userImg.jpg" alt="" style={{ height: '80px', width: '80px' }} />
                                        <div>
                                            <p style={{ fontSize: '12px' }}><span style={{ fontSize: '16px', fontFamily: 'sans-serif', color: '#008CBA', marginRight: '10px' }}>Email:</span>{item.email}</p>
                                            <p style={{ fontSize: '12px' }}><span style={{ fontSize: '16px', fontFamily: 'sans-serif', color: '#008CBA', marginRight: '10px' }}>City:</span>{item?.address?.city}</p>
                                        </div>
                                    </div>
                                </Card>

                            </div>
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default UserInfo