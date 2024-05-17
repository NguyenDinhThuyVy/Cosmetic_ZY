import { HealthFormModel } from '../database/models/health-form.model'

import { Request, Response } from 'express'

const createHealthForm = async (req: Request, res: Response) => {
  try {
    const formData: HealthForm = req.body // Giả sử HealthForm là một interface hoặc type để định nghĩa cấu trúc dữ liệu của biểu mẫu sức khỏe

    const {
      sex,
      height,
      age,
      weight,
      current_health_conditions,
      dietary_restrictions,
    } = formData

    const healthForm = new HealthFormModel({
      user: req.jwtDecoded.id,
      sex,
      height,
      age,
      weight,
      current_health_conditions,
      dietary_restrictions,
    })

    const savedHealthForm = await healthForm.save()

    return res.status(201).json({
      message: 'Biểu mẫu sức khỏe đã được tạo thành công',
      data: savedHealthForm,
    })
  } catch (error) {
    return res.status(500).json({ error: 'Không thể tạo biểu mẫu sức khỏe' })
  }
}

const getHealthFormData = async (req, res) => {
  try {
    const healthFormData = await HealthFormModel.find({
      user: req.jwtDecoded.id,
    })
    console.log(healthFormData)
    return res.status(200).json({
      message: 'Lấy biểu mẫu sức khỏe thành công',
      data: healthFormData,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const HealthController = {
  createHealthForm,
  getHealthFormData,
}

export default HealthController
