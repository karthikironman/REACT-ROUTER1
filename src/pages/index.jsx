import React from 'react';
import {Link} from  "react-router-dom";

const MainPage = () => {

    return(
        <div>
        <h3>heading from the mainpage function component</h3>
        <Link to="/users">Show List of Users</Link>
        </div>
    );
}

export default MainPage;