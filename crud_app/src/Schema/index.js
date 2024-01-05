import * as Yup from "yup";

export const addUser = Yup.object({

    name : Yup.string().min(2).max(30).required('Enter your name'), 
    email: Yup.string().email().required('Enter your email'),
    phone: Yup. number().min(10).required('Enter your phone number')

});
 export const updateUser = Yup.object({

    name : Yup.string().min(2).max(30).required('Enter your name'), 
    email: Yup.string().email().required('Enter your email'),
    phone: Yup. number().min(10).required('Enter your phone number')

});

// export {addUser, updateUser};