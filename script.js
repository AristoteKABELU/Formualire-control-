document.forms[0].addEventListener("submit", function(evenement) 
        { 
            if (document.getElementById("name").value == "")
            {
                evenement.preventDefault();
                alert("veuillez entrez le nom");
                document.getElementById("name").focus();
            }
            else if (document.getElementById("first_name").value == "")
            {
                evenement.preventDefault();
                alert("veuillez entrez le prenom");
                document.getElementById("first_name").focus();
            }
            else if (document.getElementById("sex").value == null)
            {
                evenement.preventDefault();
                alert("veuillez entrez le sexe");
                document.getElementById("sex").focus();
            }
            else if (document.getElementById("birthday").value == "")
            {
                evenement.preventDefault();
                alert("veuillez entrez l'année de naissance");
                document.getElementById("year").focus();
            }
            else if (document.getElementById("promotion").value == "")
            {
                evenement.preventDefault();
                alert("veuillez choisir la promotion");
                document.getElementById("promotion").focus();
            }
            else if (document.getElementById("description").value == "")
            {
                evenement.preventDefault();
                alert("veuillez entrez la description");
                document.getElementById("description").focus();
            }
            

        });