function val(result){
    form.result.value = form.result.value + result;
}

function calculate(){
    form.result.value = eval(form.result.value);
}