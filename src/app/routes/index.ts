import express from 'express';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { buildingRoutes } from '../modules/building/building.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.routes';
import { userRoutes } from '../modules/user/user.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/users',
        routes: userRoutes
    },
    {
        path: '/academic-faculties',
        routes: academicFacultyRoutes
    },
    {
        path: '/academic-departments',
        routes: academicDepartmentRoutes
    },
    {
        path: '/academic-semesters',
        routes: academicSemesterRoutes
    },
    {
        path: '/buildings',
        routes: buildingRoutes
    },
    {
        path: '/rooms',
        routes: roomRoutes
    },
    {
        path: '/courses',
        routes: courseRoutes
    },
    {
        path: '/semester-registrations',
        routes: semesterRegistrationRoutes
    },
    {
        path: '/offered-courses',
        routes: offeredCourseRoutes
    },
    {
        path: '/offered-course-sections',
        routes: offeredCourseSectionRoutes
    },
    {
        path: '/offered-course-class-schedules',
        routes: offeredCourseClassScheduleRoutes
    },
    {
        path: '/student-enrolled-courses',
        routes: studentEnrolledCourseRoutes
    },
    {
        path: '/student-enrolled-course-marks',
        routes: studentEnrolledCourseMarkRoutes
    },
    {
        path: '/student-semester-payments',
        routes: studentSemesterPaymentRoutes
    }
];

moduleRoutes.forEach((route) => {
    router.use(route.path, route.routes);
});

export default router;