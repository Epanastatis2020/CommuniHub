import React from 'react';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import ForumLanding from '../../components/Forum/ForumLanding/ForumLanding';

function DashBoard() {
    const [appDispatch] = useAppContext();

    useLoginCheck(appDispatch);

    console.log("Dashboard is rendered");

    return (
        <ForumLanding />
    );
}

export default DashBoard;
