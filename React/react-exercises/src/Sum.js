export function Sum({ numbers= [18, 21, 27, 30]}){
    return(
        <div>
            <h3>Get a sum of this: {numbers.map((num => `${num}, `))}</h3>
            <h1>The sum of all numbers is: {numbers.reduce((number, sum) => sum + number,0)}</h1>
        </div>
    )
}