
import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";

// A generic interface for the hook's return value.
interface PaginatedFetchResult<T> {
  currentItems: T[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  loading: boolean;
  error: Error | null;
}

/**
 * A reusable custom hook to fetch, manage, and paginate data from an API.
 * @param apiUrl The URL to fetch data from.
 * @param itemsPerPage The number of items to show per page.
 * @param dataExtractor A memoized function (using useCallback) to extract the items array from the API response.
 * @returns An object with paginated data and state management.
 */
export function usePaginatedFetch<T>(
  apiUrl: string,
  itemsPerPage: number,
  dataExtractor: (data: unknown) => T[]
): PaginatedFetchResult<T> {
  const [allItems, setAllItems] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // Reset states for a new fetch, including resetting the page to 1.
    setLoading(true);
    setError(null);
    setCurrentPage(1); // <-- OPTIMIZATION: Reset page on new data fetch.

    if (!apiUrl) {
      console.warn("API URL is not provided to usePaginatedFetch hook.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const extractedData = dataExtractor(response.data);
        setAllItems(extractedData);
      } catch (err: unknown) {
        // Your type-safe error handling is perfect.
        const errorToSet =
          err instanceof Error ? err : new Error("An unknown error occurred");
        setError(errorToSet);
        console.error("Error fetching data in usePaginatedFetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, dataExtractor]); // Dependency on dataExtractor is now safe if memoized.

  // Memoize calculations for pagination to avoid re-calculating on every render.
  const totalPages = useMemo(
    () => Math.ceil(allItems.length / itemsPerPage),
    [allItems, itemsPerPage]
  );

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return allItems.slice(indexOfFirstItem, indexOfLastItem);
  }, [allItems, currentPage, itemsPerPage]);

  return {
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
    loading,
    error,
  };
}
