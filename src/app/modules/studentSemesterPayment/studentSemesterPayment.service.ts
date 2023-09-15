import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreHttpService } from '../../../shared/axios';

const getMyPayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.get(
    '/student-semester-payments/my-semester-payments',
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const initiatePayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.post(
    `/student-semester-payments/initiate-payment`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const completePayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreHttpService.post(
    `/student-semester-payments/complete-payment`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const StudentSemesterPaymentService = {
  getMyPayment,
  initiatePayment,
  completePayment
};
