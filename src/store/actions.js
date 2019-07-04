export const CHANGE_BUSINESS_TYPE = "CHANGE_BUSINESS_TYPE";


export const changeBusinessType = (value) => {
    return {
        type : CHANGE_BUSINESS_TYPE,
        payload : value
    }
}