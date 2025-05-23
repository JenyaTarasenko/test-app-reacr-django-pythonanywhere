const BASE_URL = import.meta.env.VITE_API_URL;


export async function fetchProjects() {
    try {
      const response = await fetch(`${BASE_URL}projects/`);
      if (!response.ok) throw new Error('Ошибка загрузки');
      return await response.json();
    } catch (error) {
      console.error('Ошибка при запросе:', error);
      return [];
    }
}