// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import {routesApi} from '../../../setup/routes'

// Actions Types
export const THOUGHTS_GET_LIST_REQUEST = 'THOUGHTS/GET_LIST_REQUEST'
export const THOUGHTS_GET_LIST_RESPONSE = 'THOUGHTS/GET_LIST_RESPONSE'
export const THOUGHTS_GET_LIST_FAILURE = 'THOUGHTS/GET_LIST_FAILURE'
export const THOUGHTS_GET_REQUEST = 'THOUGHTS/GET_REQUEST'
export const THOUGHTS_GET_RESPONSE = 'THOUGHTS/GET_RESPONSE'
export const THOUGHTS_GET_FAILURE = 'THOUGHTS/GET_FAILURE'

// Actions

// Get list of thoughts
export function getList(isLoading = true) {
  return dispatch => {
    dispatch({
      type: THOUGHTS_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'thoughts',
      fields: ['id', 'name', 'thought']
    }))
      .then((response) => {
        dispatch({
          type: THOUGHTS_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.thoughts
        })
      })
      .catch((error) => {
        dispatch({
          type: THOUGHTS_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}

// Get single thought
export function get(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: THOUGHTS_GET_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'thought',
      variables: {id: parseInt(id, 10)},
      fields: ['id', 'name', 'thought']
    }))
      .then((response) => {
        dispatch({
          type: THOUGHTS_GET_RESPONSE,
          error: null,
          item: response.data.data.thought
        })
      })
      .catch((error) => {
        dispatch({
          type: THOUGHTS_GET_FAILURE,
          error: error
        })
      })
  }
}

// Create thought
export function create(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'thoughtCreate',
      variables, fields: ['id']
    }))
  }
}

// Remove thought
export function remove(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'thoughtRemove',
      variables,
      fields: ['id']
    }))
  }
}
