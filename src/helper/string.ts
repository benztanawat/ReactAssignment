export function isEmpty<T>(data: T): boolean {
    if (data === null || data === undefined) return true;

    if(typeof data === "string" && data.trim().length === 0) return true;
  
    if (typeof data === "object" && Object.keys(data as object).length === 0) return true;
  
    return false;
}