import * as yup from "yup";


export const schemaAuth = yup.object().shape({
    pseudo: yup.string().min(3).required().matches(/^[a-zA-Z0-9_]*$/, { message : "special characters not permitted",  excludeEmptyString: true }),
    password: yup.string().min(6).required()
}) 