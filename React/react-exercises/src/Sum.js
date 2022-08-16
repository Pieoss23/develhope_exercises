export function Sum({numbers}){
    return(
        <div>
            <h3>Get a sum of this: {numbers}</h3>
            <h1>The sum of all numbers is: {numbers.reduce((number, sum) => sum + number,0)}</h1>
        </div>
    )
}