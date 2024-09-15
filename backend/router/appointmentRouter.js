import express from "express";
import { deleteAppointment, getAllAppointments, getMyAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import { isAdminAuthanticated, isDoctorAuthanticated, isPatientAuthanticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthanticated, postAppointment);
router.get("/getall", isAdminAuthanticated, getAllAppointments);
router.post("/get", isDoctorAuthanticated, getMyAppointments);
router.put("/update/:id", isAdminAuthanticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthanticated, deleteAppointment);
router.put("/doctor/update/:id", isDoctorAuthanticated, updateAppointmentStatus);
router.delete("/doctor/delete/:id", isDoctorAuthanticated, deleteAppointment);

export default router;