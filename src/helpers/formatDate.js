export const formatDate = (date) => {
    let today = new Date();
    if (date) {
        today = new Date(date);
    }
    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    const yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    } 
    const dateFormat = yyyy + '-' + mm + '-' + dd;
    return dateFormat;
}
