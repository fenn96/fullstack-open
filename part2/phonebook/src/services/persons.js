import axios from 'axios'
const baseUrl = 'https://cold-water-3639.fly.dev/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = newObject => {
  return axios.put(`${baseUrl}/${newObject.id}`, newObject)
}

const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { 
  getAll: getAll, 
  create: create,
  update: update,
  deletePerson: deletePerson
}