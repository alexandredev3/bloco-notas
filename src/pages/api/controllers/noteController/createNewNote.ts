import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const token = req.cookies.authorization
    // const [, token] = req.headers.authorization.split(' ')

  console.log('token', token)
  try { 

    const { title, description } = req.body;

    if (!title || !description || title === ' ' || description === ' ') {
      return res.status(400).send({ message: "Missing body parameter" })
    }

    await connect()

    const payload = await jwt.verify(token)
    const user = await User.findById(payload.user)

    const noteData = { 
      note_index: String(user.length += 1),
      title: String(title),
      description: String(description)
    }

    const note = User.findOneAndUpdate({ email: user.email}, {
      $push: {
        note: noteData,
    }
    }).then(doc => {
      doc.length += 1
      doc.save()

      console.log(note)
    })

    console.log(note)

    return res.json(user)

  } catch (err) {
    console.log(err)
  }
  }
}