function formatDate(date) {

    let today = new Date(date);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

      today = dd + '-' + mm + '-' + yyyy;

     return today
}

export default formatDate;
