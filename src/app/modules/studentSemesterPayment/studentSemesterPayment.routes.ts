import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/my-semester-payments', StudentSemesterPaymentController.getMyPayment);

router.post(
    '/initiate-payment',
    auth(ENUM_USER_ROLE.STUDENT),
    StudentSemesterPaymentController.initiatePayment
);

router.post(
    '/complete-payment',
    auth(ENUM_USER_ROLE.STUDENT),
    StudentSemesterPaymentController.completePayment
);

export const studentSemesterPaymentRoutes = router;
