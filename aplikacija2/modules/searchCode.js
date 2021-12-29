import ajaxService from "./ajaxService";
import {then} from "laravel-mix";

const searchCode= ()=>{
    document.querySelector('form').addEventListener('submit',()=>{
        e.preventDefault() //keiciama standartine elgsena
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchResponse);
        .then(result =>searchResponse = result)
            .then(()=>console.log(searchResponse.data[0].post_code))
            .then(()=>document.querySelector('.result').value=searchResponse.data[0].post_code)
    })
}

export default searchCode