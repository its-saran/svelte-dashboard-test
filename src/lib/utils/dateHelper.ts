import { isBefore } from "date-fns";

// This takes yyyy-mm-dd and returns m-d-yyy
export const convertDate = (myDate: string) => {
    // Break apart the date
    const [year, month, date] =  splitDate(myDate)
    // Return it in correct format
    return `${parseInt(date)}/${parseInt(month)}/${year}`
}

export const isLate = (myDate: string):boolean => {
    // Break apart the date
    const [year, month, date] =  splitDate(myDate)
    const dueDate = new Date(parseInt(year), parseInt(month), parseInt(date))
    const today = new Date();
    return isBefore(dueDate, today)
}

export const splitDate = (myDate: string) => {
    return myDate.split('-')
}