import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getStorageValue } from "../../Common/LocalStorage/helpers";
import { LocalStorageKeys } from "../../Common/LocalStorage/interface";
import Layout from "../../Components/Layout";
import Objectives from "../../Components/objectives/Objectives";
import { GlobalContext } from "../../Context/global";
import { UserRole } from '../../Common/User/interface'

const HomeGuide = () => {
    const { globalState } = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const loginStorageValue = getStorageValue(LocalStorageKeys.LOGIN);

        if (!globalState.user && !loginStorageValue) {
            navigate('/login');
        }
        else if ((globalState.user && globalState.user.type === UserRole.USER) || (loginStorageValue && loginStorageValue.type === UserRole.USER)) {
            navigate('/user');
        }
    }, []);

    console.log("home page")
    return (
        <Layout>
            <h1 style={{ fontFamily: "Roboto" }}>
                Cluj Main Objectives
            </h1>
            <Objectives />
        </Layout>
    );
}

export default HomeGuide;
