
customerState.onshow = function() {
    drpStates.clear()
    query = "SELECT DISTINCT `state` FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(`The results are: \n ${results}`)
        if (results.length === 0)
            lblMessage.value = "There are no customers in the database."
        else {
            for (i = 0; i < results.length; i++)
                drpStates.addItem(results[i])
        }
    } else
        lblMessage.value = "Error code: " + req.status
}

drpStates.onclick = function() {
        let state = drpStates.selection
        query = `Select name FROM customer WHERE state = '${state}'`
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (typeof(s) == "object") {
            return
        } else {
            if (req.status == 200) { 
                results2 = JSON.parse(req.responseText)
                if (results2.length == 0)
                    lblCustomers.value = "There are no customers in the database."
                else {
                    let message = ""
                    for (i = 0; i < results2.length; i++)
                        message = message + results2[i][0] + "\n"
                    txtCustomer.value = `The customer(s) in ${state} are: \n` + message
              } }else    
          lblMessage.value = "Error code: " + req.status
}
}









