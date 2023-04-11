import React, { useEffect, useState } from 'react';
import { IUserInfo } from '../interface/IUsers';
import { ACTION_TYPES } from '../constans/actionTypes';

export default function User({ user, dispatch } : { user: IUserInfo, dispatch: React.Dispatch<{type: string; user: IUserInfo;}>}) {
    return (
        <div>
            <span 
                style={{textDecoration: user.isHere ? 'line-through' : 'none', color: user.isHere ? 'gray' : 'black'}}
                onClick={() => dispatch({ type: ACTION_TYPES.MARK_USER, user: {id: user.id} })}
            >
                {user.name}
            </span>
            <button onClick={() => dispatch({ type: ACTION_TYPES.DEL_USER, user: {id: user.id} })}>삭제</button>
        </div>
    );
}