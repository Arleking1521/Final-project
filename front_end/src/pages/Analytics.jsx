import React, { useContext, useMemo } from 'react';
import PostsList from '../Components/PostsList';
import { useNavigate, useLocation, } from 'react-router-dom';
import { CombinedContext } from '../Context/context';
import back from "../assets/back-button.png"


const Main = () => {
    const combinedContext = useContext(CombinedContext);
    

    return (
        <div className="main_blog">
            
        </div>
    );
};

export default Main;
