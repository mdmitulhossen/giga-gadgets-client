// all services fatch from here
export const allServices =async()=>{
    const response = await fetch('/services.json');
    const data = await response.json();
    return data;
}
// all services fatch from here
export const serviceByParams =async({params})=>{
    const response = await fetch('/services.json');
    const data = await response.json();
    const filterData = data?.filter(item=>item.id===params.id)
    return filterData;
}

// all Event fatch from here
export const allEvents =async()=>{
    const response = await fetch('/event.json');
    const data = await response.json();
    return data;
}