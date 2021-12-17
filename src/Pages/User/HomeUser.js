import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStorageValue } from "../../Common/LocalStorage/helpers";
import { LocalStorageKeys } from "../../Common/LocalStorage/interface";
import { UserRole } from "../../Common/User/interface";
import Layout from "../../Components/Layout";
import Objectives from "../../Components/objectives/Objectives";
import { GlobalContext } from "../../Context/global";

function HomeUser() {
    const { globalState } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        const loginStorageValue = getStorageValue(LocalStorageKeys.LOGIN);

        if (!globalState.user && !loginStorageValue) {
            navigate('/login');
        }
        else if ((globalState.user && globalState.user.type === UserRole.GUIDE) || (loginStorageValue && loginStorageValue.type === UserRole.GUIDE)) {
            navigate('/guide');
        }
    }, []);

    return (
        <Layout>
            <h1 style={{ fontFamily: "Roboto" }}>
                Cluj Main Objectives
            </h1>
            <Objectives />
        </Layout>
    );
}

export default HomeUser;
