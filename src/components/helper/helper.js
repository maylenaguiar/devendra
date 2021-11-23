import { data } from "./data";

export const requestData = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            return resolve(data);
        }, 2000);
    });
};
console.log(requestData);