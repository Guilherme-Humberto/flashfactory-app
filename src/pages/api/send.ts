import { NextApiRequest, NextApiResponse } from 'next'

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.send({ ok: true })
}
