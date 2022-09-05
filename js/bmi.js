function fun(form) {
    var age = form.age.value;
    var weight = form.weight.value;
    var height = form.height.value;
    var bmi = parseInt(weight / (height / 100 * height / 100));
    if (age < 20) {
        window.alert("your are under age");
    }
    else if (age > 20) {
        if (bmi < 18.5) {
            window.location.href = 'underweight.html';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            window.location.href = 'normalweight.html';
        } else if (bmi > 24.9) {
            window.location.href = 'overweight.html';
        }
    }
    return false;
}

