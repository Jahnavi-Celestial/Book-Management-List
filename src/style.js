const stylesFunc = ()=>{
    const styles = document.createElement("style");
    styles.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    .container{
        width: 100vw;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .root-container{
        width: 80%;
        border: 1px solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 40px;
        padding: 40px;
    }
    
    #insert-book-btn{
        width: 90%;
        background-color: #2196f3;
        display: flex;
        align-items: center;
        border: none;
        padding: 15px 20px;
        cursor: pointer;
        color: white;
        font-weight: bold;
    }

    #insert-book-btn > p{
        width: 100%;
        text-align: center;
        display: block;
    }

    .book-details-div{
        display: none;
    }

    .active{
        width: 90%;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        padding: 20px;
    }

    #details-form{
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
        
    #details-form .formData {
        display: flex;
    }

    .formData {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .formData label {
        width: 150px;
        text-align: left;
    }

    .formData input {
        flex: 1;
        height: 40px;
        margin: 20px 0;
    }

    #create-book-btn{
        margin: 20px auto 50px;
        padding: 10px 20px;
        cursor: pointer;
    }

    #book-div{
        border: 1px solid;
        padding: 20px;
        margin-top: 20px;
        width: 91%;
        text-align: center;
    }

    .bookList{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 50px;
    }

    .empty{
        min-height: 200px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .bookTitleDiv{
        display: flex;
        align-items: center;
        border: 1px solid;
        padding: 10px 20px;
        width: 80%;
        margin-top: 20px;
        cursor: pointer;
    }

    .bookTitleDiv p{
        font-size: large;
        width: 100%;
        margin: 0;
    }

    .book-desc-div{
        width: 80%;
        margin: 0;
        border-top: none;
        border: 1px solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 50px;
        cursor: default;
    }

    #deleteBtn{
        align-self: flex-end;
        padding: 5px 30px;
        background-color: #ff3131;
        border: 2px solid black;
        border-radius: 10px;
        cursor: pointer;
        margin: 10px;
    }

    .bookDesc{
        border: none;
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: justify;
        cursor: default;
        margin: 10px 0;
        padding: 10px;
    }

    .bookDesc span{
        font-size: large;
    }

    .bookDesc p{
        width: 60%;
        font-size: large;
        max-width: 60%;
        margin-right: 20px;
        margin-left: 50px;
        cursor: pointer;
    }

    .book-desc-input {
        width: 60%;
        font-size: inherit;
        font-family: inherit;
        border: 1px solid #aaa;
        border-radius: 4px;
        padding: 2px 6px;
        outline: none;
    }
    
    .book-desc-input:focus {
        border-color: #999c9f;
    }

    .deleteDiv{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background: rgba(27, 26, 26, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .deleteMsgBox{
        // min-width: 300px;
        width: 600px;
        height: auto;
        background: white;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .deleteMsgBox>button{
        background-color: #2196f3;
        border: none;
        padding: 10px;
        border-radius: 5px;
    }

    @media(max-width: 950px){
        .formData{
            flex-direction: column;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        .formData input{
            width: 100%;
            height: 100%;
            margin-left: 0;
            margin-bottom: 20px;
        }
    }

    @media(max-width: 725px){
        .bookDesc{
            flex-direction: column;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 10px;
            padding-left: 10px;
        }
        .bookDesc span{
            text-decoration: underline;
        }
        .bookDesc p{
            margin-left: 0;
        }
        .deleteMsgBox{
            margin: 0 10px;
            width: 150%;
        }
    }
    
    @media(max-width: 470px){
        .root-container{
            width: 100%;
        }
    }
    
`;

document.head.append(styles);
};