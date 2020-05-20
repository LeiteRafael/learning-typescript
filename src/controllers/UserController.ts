import { Request, Response } from 'express'
import { User } from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const { name } = req.body
    const user = await User.findOneAndDelete({ firstName: name })

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { email, firstName, lastName } = req.body
    const user = await User.findOneAndUpdate({ firstName: firstName },
      {
        $set:
            {
              email: email,
              firstName: firstName,
              lastName: lastName
            }
      })

    return res.json(user)
  }
}

export default new UserController()
