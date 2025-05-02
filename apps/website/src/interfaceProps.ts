interface LoginParams {
  email: string;
  password: string;
}

interface GetDataBody {
  id: number;
  name: string;
  status: string;
  date: string | any;
  entry_time: string | any;
  clock_out: string | any;
  working_hours?: number;
  fine: number;
  salary: number;
}

export type { GetDataBody, LoginParams };
