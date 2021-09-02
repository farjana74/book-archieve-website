document.getElementById("total-book").style.display='none'
document.getElementById("error-message").style.display='none'
document.getElementById('display-field').textContent='';




// search input field
const search =()=>{

    const input =document.getElementById('input-field');
    const inputText = input.value;
    if(inputText.length===0){
      document.getElementById("error-message").style.display='block'
      document.getElementById("total-book").style.display='none'
      document.getElementById('display-field').textContent='';

    }
    else{

    
    input.value="";
    
    document.getElementById("error-message").style.display='none'
    // console.log(inputText);

// getting url for books finding
    const url = `https://openlibrary.org/search.json?q=${inputText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBook(data.docs))


}
}
// display book details-------------------------------------
 const displayBook = books =>{
  //  console.log(books)
   if(books.length==[]){
    document.getElementById("error-message").style.display='block'
    document.getElementById("total-book").style.display='none'
    document.getElementById('display-field').textContent='';

   }
   else{

   
      const displayField = document.getElementById('display-field');
      displayField.textContent='';
      document.getElementById("total-book").style.display='block'
      document.getElementById("total-book").innerText=`total books: ${books.length}`
      books.forEach(book=>{
      // console.log(book)
       
      const div =document.createElement('div');
        div.classList.add('col')
        div.innerHTML =`

        <div class="card">
            <img  src="https://covers.openlibrary.org/b/id/${book.cover_i?book.cover_i:"picture not found"}-M.jpg" class=" rounded mx-auto mt-10" alt="...">
            <div class="card-body">
              <h5 class="card-title fs-5">${book.title}</h5>
              <h4 class="card-title ">${book.author_name?book.author_name:"not found"}</h4>
               <h4 class="card-title">${book.publisher[0]?book.publisher:"not found"}</h4>
              <p class="card-text">first pubilsh:${book.first_publish_year?book.first_publish_year:"not found"}</p>
            </div>
          </div>
        
        `
        displayField.appendChild(div)
    })
 }
}