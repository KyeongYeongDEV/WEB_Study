interface transactionRequestDto{
    fromName : string,
    fromAccountNumber : number,
    toName : string,
    toAccountNumber : number,
    remittanceAmount : number
}

export default transactionRequestDto;