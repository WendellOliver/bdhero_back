import { Request, Response, NextFunction } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";

const checksIncidentValidate =
    (requestSchema: OptionalObjectSchema<ObjectShape>) =>
        async (request: Request, response: Response, next: NextFunction) => {
            const { title, description, value } = request.body;

            try {
                await requestSchema.validate({
                    title, description, value

                });
                return next();
            } catch (error) {
                throw new Error();
            }
        }

export default checksIncidentValidate;