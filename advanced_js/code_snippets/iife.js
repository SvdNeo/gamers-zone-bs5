let result = ((roi, loan_amount) => {

    var interest = loan_amount * roi / 100;
    console.log(interest)
    return interest;
})(10, 1000000)