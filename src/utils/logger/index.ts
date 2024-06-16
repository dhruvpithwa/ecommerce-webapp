
export const logError = ({ functionName, error}: { functionName: string, error: any}) => {
   log(`Error in ${functionName}: `, error);
}

const log = (message: string, data: any) => {
    console.log(message, data);
}