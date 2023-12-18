import express from 'express'
import { createContact, getAllContact, getContact } from '../controllers/contactController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createContact)
router.get('/:id', verifyUser, getContact)
router.get('/', verifyAdmin, getAllContact)

export default router