import React, {useState, useEffect} from "react";

const Search = () => {
    const [Comments, setComments] = useState([]);
    const [InputValue, setInputValue] = useState('');
    const [FilteredComments, setFilteredComments] = useState([]);

    function fetchData() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(comments => {
                setComments(comments);
                setFilteredComments(comments)
            });
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleChange = (event) => {
        let inputValue = event.target.value;
        setInputValue(inputValue);
        setFilteredComments(
            Comments.filter(comment => comment.email.toLowerCase().startsWith(
                inputValue.toLowerCase()))
        );
    };

    const handleSearch = () => {
        setFilteredComments(
            Comments.filter(comment => comment.email.toLowerCase().startsWith(
                InputValue.toLowerCase()))
        );
    };


    return (
        <div className="search container">
            <h2>Search</h2>
            <input type='text' value={InputValue} onChange={handleChange}/>
            <button onClick={handleSearch}>SEARCH</button>
            <h3>Search Results</h3>
            <ul className="search-results">
                {FilteredComments.map(comment => <li key={comment.id}>{comment.email}</li>)}
            </ul>
        </div>
    )

}

export default Search;