function flame(z) 
{
  switch(z)
    {
        case 1:alert("FRIENDS\n"); break;
        case 2:alert("LOVE\n"); break;
        case 3:alert("AFFECTION\n"); break;
        case 4:alert("MARRIDGE\n"); break;
        case 5:alert("ENEMY\n"); break;
        default:alert("No Relation\n");
    }
}

function a_new_func() 
{
    var name1 = document.getElementById('Name1').value;
    var name2 = document.getElementById('Name2').value;
    
    var x = name1.length;
    var y = name2.length;
    var z = x + y;
    var i = 0;
    var j = 0;
    for(i = 0 ; i < x ; i++)
    {
        for(j = 0 ; j < y ; j++)
        {
            if(name1[i] === name2[j])
            {
                name1[i] = name2[j] = ' ';
                z = z - 2;
            }
        }
    }
    if(z <= 5)
    {
        flame(z);
    }
    
    else if(z > 5)
    {
        r = z % 5;
        flame(r);
    }
}
