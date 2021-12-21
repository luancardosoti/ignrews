import { NextApiRequest, NextApiResponse } from 'next';

export default function (request: NextApiRequest, response: NextApiResponse) {
  const users = [
    { id: 1, name: 'Luan' },
    { id: 2, name: 'Willian' },
    { id: 3, name: 'Werlley' },
  ]

  return response.json(users);
}