import React, { useReducer, useRef, useState } from 'react';
import { useEffect } from 'react';
import { IUsers, IUserInfo } from './interface/IUsers';
import User from './components/User';
import { ACTION_TYPES } from './constans/actionTypes';

const reducer = (state: IUsers, action: { type: string, user: IUserInfo }): IUsers => {
    switch (action.type) {
        case ACTION_TYPES.ADD_USER:
            const newUser = {
                id: Date.now(),
                name : action.user.name,
                isHere: false
            }
            return {
                count: state.count + 1,
                users: [...state.users, newUser]
            }
        case ACTION_TYPES.DEL_USER:
            return {
                count: state.count - 1,
                users: state.users.filter((item) => item.id !== action.user.id)
            }
        case ACTION_TYPES.MARK_USER:
            return {
                ...state,
                users: state.users.map((item) => {
                    if(item.id === action.user.id)
                        return { ...item, isHere: !item.isHere }
                    return item;
                })
            }
        default:
            return state;
    }
}

export default function HookUseReducer() {
    const [user, setUser] = useState('');
    const [userInfo, dispatch] = useReducer(reducer, {count: 0, users: []});
    const userRef: React.LegacyRef<HTMLInputElement> = useRef(null);

    useEffect(() => {
        if(userRef.current === null) return;
        userRef.current.focus();
    }, [userInfo]);

    return (
        <div>
            <h2>useReducer</h2>
            <p>총 사용자 수: {userInfo.count}</p>
            <input type='text' value={user} onChange={(e) => setUser(e.target.value)} ref={userRef}/>
            <button onClick={() => user && dispatch({ type: ACTION_TYPES.ADD_USER, user: {name: user} })}>추가</button>
            {userInfo.users.map((item) => <User key={item.id} user={item} dispatch={dispatch}/>)}
        </div>
    )
}