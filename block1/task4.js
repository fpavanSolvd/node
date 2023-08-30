function debounce(func, delay) {
    let timer;

    return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay)
    };
  }
  
  function debouncedSearch(query) {  
    // Perform search operation with the query  
    console.log("Searching for:", query);  
    }  
      
    const debouncedSearchHandler = debounce(debouncedSearch, 300);  
      
    // const inputElement = document.getElementById("search-input");  
    // inputElement.addEventListener("input", event => {  
    // debouncedSearchHandler(event.target.value);  
    // });
debouncedSearch("not debounced");
debouncedSearch("not debounced");
debouncedSearch("not debounced");
debouncedSearch("not debounced");
debouncedSearch("not debounced");
debouncedSearch("not debounced");
debouncedSearch("not debounced");
debouncedSearchHandler("test");
debouncedSearchHandler("test");
debouncedSearchHandler("test");
debouncedSearchHandler("test");
debouncedSearchHandler("test");
timer = setTimeout(() => {
    debouncedSearchHandler("test")}, 301);