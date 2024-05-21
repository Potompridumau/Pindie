import { useEffect, useState } from 'react'
import { getNormalizedGamesDataByCategory, isResponseOk } from './api-utils'

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const normalizedData = await getNormalizedGamesDataByCategory(endpoint, category);

      // Проверяем, успешно ли был выполнен запрос
      if (isResponseOk(normalizedData)) {
        setData(normalizedData);
      } else {
        // Обработка случая, когда запрос не был успешным
        console.error("Ошибка при получении данных:", normalizedData);
        // Здесь можно установить состояние ошибки или сбросить данные
        setData(null); // Пример сброса данных
      }
    }
    fetchData();
  }, [endpoint, category]); // Добавляем зависимости в список зависимостей useEffect

  return data;
};