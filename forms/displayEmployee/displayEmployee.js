displayEmployee.onshow = function() {
    inptChooseEmployee.clear()
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(`The results are: \n ${results}`)
        if (results.length === 0)
            lblDeleteMessage.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i] + "\n"
                txtaCustomer.value = message
        }
    } else
        lblDeleteMessage.value = "Error code: " + req.status
}

btnChooseEmployee.onclick = function() {
    let displayEmployee = inptEmployee.value
    let found = false
    for (i = 0; i < results.length; i++) {
        if (displayEmployee == results[i]) {
            found = true
            break
        }
    }
    if (found == false)
        lblDeleteMessage.value = "That customer name is nowhere in the database."
    else if (found == true) {
        query = `DELETE FROM customer WHERE name = '${displayEmployee}'`

        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {
                lblDeleteMessage.value = `You have successfully deleted the customer named ${CustomerDelete}`
            } else
                lblDeleteMessage.value = `We encountered a problem deleting ${CustomerDelete} from the database.`
        } else
            lblDeleteMessage2.textContent = `Error: ${req.status}`
    }
}

btnRefresh.onclick = function() {
    txtaCustomer.value = ""
    inptEmployee.value = ""
    lblDeleteMessage.value = ""
}