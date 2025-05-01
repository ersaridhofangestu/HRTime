interface LoginParams {
    email: string;
    password: string;
}

interface GetDataBody {
    id: number,
    name: string,
    status: string,
    date: string,
    entry_time: string,
    clock_out: string,
    working_hours?: number,
    fine : number,
    salary : number
}




export type {
    GetDataBody,
    LoginParams
}