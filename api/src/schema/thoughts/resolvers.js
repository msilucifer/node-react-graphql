// App Imports
import models from '../../models'

// Get thoughts by ID
export async function getById(parentValue, { id }) {
  return await models.Thought.findOne({ where: { id } })
}

// Get all thoughts
export async function getAll() {
  return await models.Thought.findAll({ order: [ ['createdAt', 'DESC'] ] })
}

// Create thought
export async function create(parentValue, { name, thought }) {
  console.log(name)
  console.log(thought)
  return await models.Thought.create({ name, thought })
}

// Delete thought
export async function remove(parentValue, {id}) {
  return await models.Thought.destroy({ where: { id } })
}
