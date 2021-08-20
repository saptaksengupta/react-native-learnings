import * as React from 'react';
import { Text, View } from "react-native";
import { useSelector } from 'react-redux';

export const UserList = (): JSX.Element => {

    const onUsersSynced = (state) => state.userListReducer;

    const usersListState = useSelector(onUsersSynced);
    const { users } = usersListState;

    return (
        <View>
            <Text>Uset List feature and test added</Text>
            <View>
                {users && (<Text>{users[0].nickName}</Text>)}
                {!users && (<Text> No Users </Text>)}
            </View>
        </View>
    )
}