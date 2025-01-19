import apiClient from "./apiClient";


export async function ApiBackendRequest(url, request){
    const responseData ={
        isException : false,
        exceptionMessage : "",
        data : null,
    }
    try {
        const response = await apiClient.post(url, request)
        responseData.data = response.data;
        
    } catch (error) {
        if(error.response && error.response.status === 401){
            localStorage.removeItem("accessToken")
            window.location.href = "/"
        } else{
        responseData.isException = true;
        responseData.exceptionMessage = error.response.data;
        }
        
    }
    return responseData
}
export async function ApiGetBackendRequest(url, request){
    const responseData ={
        isException : false,
        exceptionMessage : "",
        data : null,
    }
    try {
        
        const response = (request) ? await apiClient.get(url, request) : await apiClient.get(url)
        responseData.data = response.data;
        
    } catch (error) {
        if(error.response && error.response.status === 401){
            localStorage.removeItem("accessToken")
            window.location.href = "/"
        } else{
        responseData.isException = true;
        responseData.exceptionMessage = error.response.data;
        }
        
    }
    return responseData
}

