import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { AuthService } from "../../../shared/axios";

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await AuthService.patch(`/faculties/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
};

export const FacultyService = {
    updateOneInDB
}