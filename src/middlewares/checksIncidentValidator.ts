import * as Yup from "yup";

const requestSchema = Yup.object({

    inc_title: Yup.string().required(),
    inc_desc: Yup.string().required(),
    inc_value: Yup.string().required(),

});

export default requestSchema;