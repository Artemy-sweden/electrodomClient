const radios = document.querySelectorAll('.radio')
for (let i = 0; i< radios.length; i++)
{
    let r = radios[i]
    r.addEventListener("click", function()
    {
        if(r.checked === true)
            r.addEventListener("click", function()
            {
                if(r.checked === true)
                    r.checked = false  
                else r.checked = true;
            }
        )
    }
    )
}

