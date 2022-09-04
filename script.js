function promotion()
{
    const monForm = document.forms[0];
    const mesCheckboxes = monForm.querySelectorAll("input[type='checkbox']");
    let emptyCase = 0;
    for (const cb of mesCheckboxes) 
    {  
        if(cb.checked == false && emptyCase <= 4)
        {
            emptyCase++;
        }
    }
    if(emptyCase == 4)
    {
        alert("Veuillez croché une promotion! ");
    }
}

function sexe()
{
    const monForm = document.forms[0]
    const mesCheckboxes = monForm.querySelectorAll("input[type='radio']");
    let emptyCase = 0;
    for (const cb of mesCheckboxes) 
    {  
       if(cb.checked == false && emptyCase <= 2)
        {
            emptyCase++;
        }
    }
    if(emptyCase == 2)
    {
        alert("Veuillez choisir un sexe")
    }
}