let repeat = true
let goodbyes = 0

while ( repeat ) {

    let userInput = prompt()

    if ( userInput == "" ) {
        alert("WHAT!?")
    }
    else if ( userInput.toUpperCase() != userInput ) {
        alert("SPEAK UP, KID!")
    }
    else if ( userInput == "GOODBYE!" ) {
        goodbyes++

        if ( goodbyes == 1 ) {
            alert('LEAVING SO SOON?')
        }
    }
    else if ( userInput.toUpperCase() == userInput ) {
        alert('NO, NOT SINCE 1946!')
    }
    if ( goodbyes == 2 ) {
        alert("LATER, SKATER!")
        repeat = false
    }
}