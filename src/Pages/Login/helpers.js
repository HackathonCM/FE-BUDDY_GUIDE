import React from "react";
import { removeStorageValue } from "../../Common/LocalStorage/helpers";
import { LocalStorageKeys } from "../../Common/LocalStorage/interface";
import { GlobalContext } from "../../Context/global";

export const useLogout = () => {
    const { setGlobalState } = React.useContext(GlobalContext);

    const logout = React.useCallback(async () => {
        try {
            removeStorageValue(LocalStorageKeys.LOGIN);
            setGlobalState({
                user: undefined
            })
        } catch (err) {
            console.error(err);
        }
    }, [setGlobalState]);

    return { logout }
}