import * as yup from "yup";


export const schemaAuth = yup.object().shape({
    pseudo: yup.string().min(3).required().matches(/^[a-zA-Z0-9_]*$/, { message : "special characters not permitted",  excludeEmptyString: true }),
    password: yup.string().min(6).required()
})

export const schemaAddItem = yup.object().shape({
    name: yup.string().min(3).required().matches(/^[a-zA-Z0-9_]*$/, { message : "special characters not permitted",  excludeEmptyString: true }),
    note: yup.string().min(3).required(),
    category : yup.string().required()
})