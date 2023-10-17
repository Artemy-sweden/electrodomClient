const radios = document.querySelectorAll('.radio')
for (let i = 0; i< radios.length; i++)
{
    let r = radios[i]
    r.addEventListener("click", () =>
    {
        if(r.checked)
            r.addEventListener("click", ()=>
            {
                r.checked ? r.checked = false :  r.checked = true;
            }
        )
    }
    )
}

