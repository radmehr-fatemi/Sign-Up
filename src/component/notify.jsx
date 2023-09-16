import {toast} from "react-toastify";

export const notify = (text ,type) => {
    if(type === "SUCCESS") {
        toast.success(text)
    } else {
        toast.error(text)
    }
}