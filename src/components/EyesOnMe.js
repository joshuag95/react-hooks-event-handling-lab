// Code EyesOnMe Component Here

function EyesOnMe(){
    function blurEyesOnMe(event){
        console.log('Hey! Eyes on me!')
    }
    function focusEyesOnMe(event){
        console.log("Good!")
    }
    return (
        <div>
            <button onBlur={blurEyesOnMe} onFocus={focusEyesOnMe}>Eyes on me</button>
            Super Safe Password Stuff</div>
    )
}

export default EyesOnMe;