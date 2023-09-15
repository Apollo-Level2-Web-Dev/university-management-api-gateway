
import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validations';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.post(
    '/',
    validateRequest(AcademicSemesterValidation.create),
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    AcademicSemesterController.insertIntoDB
);
router.patch('/:id', AcademicSemesterController.updateOneIntoDB);



export const academicSemesterRoutes = router;