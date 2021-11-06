import { Request, Response, NextFunction } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";

const checksIncidentValidate =
    (requestSchema: OptionalObjectSchema<ObjectShape>) =>
        async (request: Request, response: Response, next: NextFunction) => {
            const { inc_title, inc_desc, inc_value } = request.body;

            try {
                await requestSchema.validate({
                    inc_title, inc_desc, inc_value

                });
                return next();
            } catch (error) {
                throw new Error();
            }
        }

export default checksIncidentValidate;