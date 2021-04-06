baby.onshow = function() {
    for (i = 0; i < listBabyNames.length; i++)
        selNames.addItem(listBabyNames[i])
}

btnNextStep.onclick = function() {
    chosen.push(selNames.text)
    ChangeForm(favNames)
}