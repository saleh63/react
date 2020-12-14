const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
export function formatDate(date) {
    const m = '' + (date.getMonth());
    const d = '' + date.getDate();
    const year = date.getFullYear();

    const month = months[m];
    let day = d;
    if (d.length < 2)
        day = '0' + d;


    return [month, day, year].join('-');
}

