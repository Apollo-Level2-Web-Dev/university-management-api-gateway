import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { UserValidation } from './user.validations';

const router = express.Router();

router.post(
    '/create-student',
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    FileUploadHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data))
        return UserController.createStudent(req, res, next)
    }
);



export const userRoutes = router;
