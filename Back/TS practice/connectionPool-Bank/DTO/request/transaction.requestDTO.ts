interface transactionRequestDto{
    fromName : string,
    fromAccountNumber : number,
    toName : string,
    toAccountNumber : number,
    amount : number
}

export default transactionRequestDto;