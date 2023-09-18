import { ref } from 'vue'
import axios from 'axios'

export const useFetch = (url, config = {}) => {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetch = async () => {
    loading.value = true

    try {
      const response = await axios.request({ url, ...config })
      data.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  fetch()

  return { data, error, loading, fetch }
}
