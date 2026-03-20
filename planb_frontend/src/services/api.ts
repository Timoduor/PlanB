const BASE_URL = 'http://localhost:8000/api';

export const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  
  const headers = new Headers(options.headers || {});
  headers.set('Content-Type', 'application/json');
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    if (errorBody.detail) {
      throw new Error(errorBody.detail);
    } else if (Object.keys(errorBody).length > 0) {
      // DRF returns errors like {"username": ["This field must be unique."]}
      const messages = Object.entries(errorBody)
        .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors[0] : errors}`)
        .join(' | ');
      throw new Error(messages);
    }
    throw new Error('API request failed');
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return null;
  }

  return response.json();
};
