import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreHttpService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.get('/semester-registrations', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreHttpService.get(`/semester-registrations/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.post(
    `/semester-registrations`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreHttpService.patch(
    `/semester-registrations/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreHttpService.delete(`/semester-registrations/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getMyRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.get(
    `/semester-registrations/my-registration`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const startRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.post(
    `/semester-registrations/start-registration`,
    {},
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const mySemesterRegistrationCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.get(
    `/semester-registrations/my-semester-registration-courses`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const enrollIntoCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.post(
    `/semester-registrations/enroll-into-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const withDrawFromCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.post(
    `/semester-registrations/withdraw-from-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const confirmRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.post(
    `/semester-registrations/confirm-registration`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const startNewSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreHttpService.post(
    `/semester-registrations/${id}/start-new-semester`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const SemesterRegistrationService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
  getMyRegistration,
  startRegistration,
  mySemesterRegistrationCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSemester
};
