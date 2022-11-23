import { useReducer, useCallback } from "react";

type HttpState = {
    status: string | null;
    data: any;
    error: string | null;
};

type HttpAction = {
    type: string;
    responseData: any;
    errorMessage: string | null;
};

function httpReducer(state: HttpState, action: HttpAction) {
    if (action.type === "SEND") {
        return {
            data: null,
            error: null,
            status: "pending",
        };
    }

    if (action.type === "SUCCESS") {
        return {
            data: action.responseData,
            error: null,
            status: "completed",
        };
    }

    if (action.type === "ERROR") {
        return {
            data: null,
            error: action.errorMessage,
            status: "completed",
        };
    }

    return state;
}

function useHttp(
    requestFunction: (data: any) => void,
    startWithPending = false
) {
    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? "pending" : null,
        data: null,
        error: null,
    });

    const sendRequest = useCallback(
        async function (requestData?: any | undefined) {
            dispatch({
                type: "SEND",
                responseData: httpState.data,
                errorMessage: httpState.error,
            });
            try {
                const responseData = await requestFunction(requestData);
                dispatch({
                    type: "SUCCESS",
                    responseData,
                    errorMessage: httpState.error,
                });
            } catch (error) {
                dispatch({
                    type: "ERROR",
                    errorMessage:
                        (error as Error).message || "Something went wrong!",
                    responseData: httpState.data,
                });
            }
        },
        [requestFunction]
    );

    return {
        sendRequest,
        ...httpState,
    };
}

export default useHttp;
