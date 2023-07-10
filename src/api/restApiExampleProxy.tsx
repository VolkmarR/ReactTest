import useSWR from "swr";
import axios from "axios";

const api = axios.create({
  baseURL: "https://dummy.restapiexample.com/api/v1/"
});

axios.interceptors.request.use((rq) => {
  console.log(rq);
  return rq;
});

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function useGetEmployees() {
  const { data, error, isLoading } = useSWR<GetEmployeesResponseWrapperDto>(
    "employees",
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    employees: data?.data,
    error: error,
    isLoading: isLoading
  };
}

export interface GetEmployeesResponseWrapperDto {
  status: string;
  data: GetEmployeesResponseDto[];
  message: string;
}

export interface GetEmployeesResponseDto {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
